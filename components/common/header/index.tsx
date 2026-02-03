"use client";

import { SettingsQueryResult } from "@/sanity.types";
import { SanityImage } from "../image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const subMenuLinks = [
  "Pre-License Education",
  "Multi-State Continuing Education",
  "Bid Calling",
  "KY Core Course",
  "Public Automobile Auctioneer License Education",
  "State Exam Prep",
];

const Header = ({
  settings,
}: {
  settings: NonNullable<SettingsQueryResult>;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSidebarMounted, setIsSidebarMounted] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
      setOpen(false);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-10">
      <div className="max-width-container padding-container py-6! flex items-center realtive justify-between">
        <Link
          href={"/"}
          onClick={() => {
            if (isSidebarOpen) {
              setIsSidebarOpen(false);
              setTimeout(() => setIsSidebarMounted(false), 300);
            }
          }}
        >
          <SanityImage
            src={settings.headerLogo}
            alt={settings.headerLogo.alt}
            width={120}
            height={56}
            className="w-auto h-14 object-contain"
          />
        </Link>
        <nav className="items-center gap-8 font-semibold text-black-pearl lg:flex hidden">
          {settings.headerLinks.map((link) => (
            <Link
              href={link.url}
              key={link._key}
              className="hover:text-vivid-orange duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {screenSize.width > 1024 && (
          <div className="hidden lg:block">
            <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="primary">
                  <span>{settings.headerButton}</span>
                  <ChevronDown className="size-4.5!" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="bottom"
                align="end"
                sideOffset={40}
                className="z-50 min-w-64 "
              >
                {subMenuLinks.map((link) => (
                  <DropdownMenuItem
                    key={link}
                    asChild
                    className=" cursor-pointer"
                  >
                    <Link
                      href="#"
                      className="hover:text-vivid-orange! group duration-300 flex items-center text-black-pearl font-semibold hover:bg-black/4! text-base! justify-between gap-4 py-2"
                    >
                      <span>{link}</span>
                      <ArrowRight className="opacity-0 text-vivid-orange duration-300 group-hover:opacity-100 transition-all" />
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        <div className="lg:hidden block">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            settings={settings}
            isSidebarMounted={isSidebarMounted}
            setIsSidebarMounted={setIsSidebarMounted}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
