"use client";

import { SettingsQueryResult } from "@/sanity.types";
import { SanityImage } from "../image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";

const Header = ({
  settings,
}: {
  settings: NonNullable<SettingsQueryResult>;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSidebarMounted, setIsSidebarMounted] = useState<boolean>(false);

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-10">
      <div className="max-width-container padding-container py-6! flex items-center justify-between">
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
        <Button variant="primary" className="lg:flex hidden">
          <span>{settings.headerButton}</span>
          <span>
            <ChevronDown className="size-4.5!" />
          </span>
        </Button>
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
