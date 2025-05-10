"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { 
  IconHome, 
  IconInfoCircle, 
  IconShoppingBag, 
  IconPhoto, 
  IconStar 
} from "@tabler/icons-react";

export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/#hero",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/about",
      icon: <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Shop",
      link: "/shop",
      icon: <IconShoppingBag className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Gallery",
      link: "/gallery",
      icon: <IconPhoto className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Testimonials",
      link: "/testimonials",
      icon: <IconStar className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // Contact link removed
  ];
  
  return (
    <div className="relative w-full">
      <FloatingNav 
        navItems={navItems} 
        className="bg-white/90 backdrop-blur-md border-neutral-200 dark:border-white/[0.2] dark:bg-black/60"
      />
    </div>
  );
}

export default FloatingNavbar;
