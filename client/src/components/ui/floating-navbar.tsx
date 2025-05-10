"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [location] = useLocation();

  // Always keep navbar visible
  React.useEffect(() => {
    setVisible(true);
  }, []);
  
  // Keep it visible on scroll
  useMotionValueEvent(scrollY, "change", () => {
    setVisible(true);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex w-full md:w-4/5 lg:w-3/4 fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-3 items-center justify-between space-x-4",
          className
        )}
      >
        <div className="flex items-center space-x-2">
          <Link href="/#hero">
            <a className="cursor-pointer">
              <div className="font-bold text-xl text-primary">Kenjac'<span className="text-violet-600">Creations</span></div>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-6">
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link key={`${navItem.name}-${idx}`} href={navItem.link}>
            <a
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer",
                location === navItem.link ? "text-black dark:text-white font-medium" : ""
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
              {location === navItem.link && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full -mb-2"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          </Link>
        ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
