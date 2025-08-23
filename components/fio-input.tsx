"use client";

import * as React from "react";
import { suggestFioValues } from "@/actions/dadata";

export type FioInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** Минимум символов для запуска подсказок */
  minChars?: number;
  /** Количество подсказок (макс. 20) */
  count?: number;
  /** Дебаунс (мс) */
  debounceMs?: number;
  /** Колбэк при выборе значения */
  onValueSelect?: (value: string) => void;
};

/**
 * Простой автокомплит ФИО:
 * - без shadcn, только <input> и <ul> со стилями
 * - дружит с react-hook-form (используйте {...field})
 */
export function FioInput({
  minChars = 2,
  count = 10,
  debounceMs = 250,
  onValueSelect,
  onChange,
  value,
  name,
  style,
  className,
  ...props
}: FioInputProps) {
  // Значение контролируется родителем (RHF): берем из props.value
  const controlledValue = typeof value === "string" ? value : "";

  // Локальный запрос для дебаунса
  const [query, setQuery] = React.useState(controlledValue);

  // Состояния выпадающего списка
  const [open, setOpen] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<string[]>([]);
  const [highlighted, setHighlighted] = React.useState<number>(-1);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const lastCallId = React.useRef(0);

  // Синхронизация query, если значение меняют снаружи
  React.useEffect(() => {
    setQuery(controlledValue);
  }, [controlledValue]);

  // Клик вне — закрыть список
  React.useEffect(() => {
    const handleDocMouseDown = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleDocMouseDown);
    return () => document.removeEventListener("mousedown", handleDocMouseDown);
  }, []);

  // Загрузка подсказок (debounce)
  React.useEffect(() => {
    const q = query.trim();
    if (!focused || q.length < minChars) {
      setItems([]);
      setOpen(false);
      setHighlighted(-1);
      return;
    }

    const id = ++lastCallId.current;
    const t = setTimeout(async () => {
      try {
        setLoading(true);
        const suggestions = await suggestFioValues(q, count);
        if (lastCallId.current !== id) return; // пришёл устаревший ответ

        setItems(suggestions);
        setOpen(suggestions.length > 0);
        setHighlighted(suggestions.length ? 0 : -1);
      } catch {
        setItems([]);
        setOpen(false);
        setHighlighted(-1);
      } finally {
        if (lastCallId.current === id) setLoading(false);
      }
    }, debounceMs);

    return () => clearTimeout(t);
  }, [query, focused, minChars, count, debounceMs]);

  // Изменение ввода: меняем query и пробрасываем вверх (в RHF)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onChange?.(e);
  };

  // Фокус/блюр
  const handleFocus = () => {
    setFocused(true);
    // Попробовать открыть, если уже есть сохранённые items
    if (items.length > 0) setOpen(true);
  };
  const handleBlur = () => {
    // Закрываем позже, чтобы клик по опции успел сработать
    setTimeout(() => setOpen(false), 0);
    setFocused(false);
  };

  // Выбор значения
  const choose = (val: string) => {
    // Вызовем onChange родителя (RHF) с синтетическим событием
    const event = {
      target: { value: val, name: name ?? "" },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange?.(event);

    onValueSelect?.(val);
    setOpen(false);
    // Вернём фокус в инпут
    inputRef.current?.focus();
  };

  // Клавиатура
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      if (items.length > 0) {
        setOpen(true);
        setHighlighted((h) => (h >= 0 ? h : 0));
      }
      return;
    }

    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((h) => (items.length ? (h + 1) % items.length : -1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((h) =>
        items.length ? (h - 1 + items.length) % items.length : -1
      );
    } else if (e.key === "Enter") {
      if (highlighted >= 0 && highlighted < items.length) {
        e.preventDefault();
        choose(items[highlighted]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Базовые стили (без зависимостей)
  const wrapperStyles: React.CSSProperties = {
    position: "relative",
    display: "block",
    width: "100%",
  };

  const inputStyles: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
  };

  const listStyles: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 20,
    background: "white",
    border: "1px solid rgba(0,0,0,0.1)",
    borderTop: "none",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    maxHeight: 240,
    overflow: "auto",
  };

  const itemStyles: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: "8px 12px",
    textAlign: "left" as const,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: 14,
  };

  const itemActiveStyles: React.CSSProperties = {
    ...itemStyles,
    background: "rgba(0,0,0,0.05)",
  };

  const hintStyles: React.CSSProperties = {
    padding: "8px 12px",
    fontSize: 13,
    color: "rgba(0,0,0,0.6)",
  };

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ ...wrapperStyles, ...style }}
    >
      <input
        {...props}
        ref={inputRef}
        name={name}
        value={controlledValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        style={{ ...inputStyles, ...(props.style ?? {}) }}
        autoComplete="off"
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        aria-controls={open ? "fio-suggestions" : undefined}
      />

      {open && (
        <div
          role="listbox"
          id="fio-suggestions"
          aria-label="Подсказки ФИО"
          style={listStyles}
        >
          {loading && items.length === 0 && (
            <div style={hintStyles}>Загрузка…</div>
          )}

          {!loading && items.length === 0 && (
            <div style={hintStyles}>Ничего не найдено</div>
          )}

          {items.length > 0 && (
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {items.map((val, idx) => (
                <li key={`${val}-${idx}`}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={idx === highlighted}
                    style={idx === highlighted ? itemActiveStyles : itemStyles}
                    onMouseEnter={() => setHighlighted(idx)}
                    onMouseDown={(e) => e.preventDefault()} // чтобы не потерять фокус при выборе
                    onClick={() => choose(val)}
                  >
                    {val}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
