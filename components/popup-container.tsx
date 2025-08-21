"use client";

import * as React from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ContactForm } from "./contact-form";

const textContainerSetting = {
  textButton: "Отправить",
  title: "Заявка на проект",
  content:
    "Оставьте ваши контактные данные. Я свяжусь с вами в течении 15 минут.",
};

export function PopUpContainer() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useIsMobile();

  if (!isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>{textContainerSetting.textButton}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{textContainerSetting.title}</DialogTitle>
            <DialogDescription>
              {textContainerSetting.content}
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>{textContainerSetting.textButton}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{textContainerSetting.title}</DrawerTitle>
          <DrawerDescription>{textContainerSetting.content}</DrawerDescription>
        </DrawerHeader>
        <ContactForm className="px-4" onSuccess={() => setOpen(false)} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Отметить</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
