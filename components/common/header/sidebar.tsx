import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SettingsQueryResult } from "@/sanity.types";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const subMenuLinks = [
  "Pre-License Education",
  "Multi-State Continuing Education",
  "Bid Calling",
  "KY Core Course",
  "Public Automobile Auctioneer License Education",
  "State Exam Prep",
];

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  settings,
  isSidebarMounted,
  setIsSidebarMounted,
}: {
  isSidebarOpen: boolean;
  isSidebarMounted: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  setIsSidebarMounted: Dispatch<SetStateAction<boolean>>;
  settings: NonNullable<SettingsQueryResult>;
}) => {
  const pathname = usePathname();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    document.body.style.overflow = isSidebarMounted ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarMounted]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarMounted(false);
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isSidebarOpen ? (
        <X
          role="button"
          onClick={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            setIsSubMenuOpen(false);
            setIsSidebarOpen(false);
            timeoutRef.current = setTimeout(
              () => setIsSidebarMounted(false),
              300,
            );
          }}
          className="cursor-pointer hover:text-vivid-orange duration-300 text-black-pearl"
        />
      ) : (
        <Menu
          onClick={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            setIsSidebarMounted(true);
            setTimeout(() => setIsSidebarOpen(true), 10);
          }}
          className="cursor-pointer hover:text-vivid-orange duration-300 text-black-pearl"
        />
      )}
      {isSidebarMounted && (
        <div
          className={cn(
            "bg-white absolute z-12 w-full h-[calc(100vh-104px)] left-0 top-26 duration-300 -translate-x-full padding-container py-6!",
            isSidebarOpen && "translate-x-0",
          )}
        >
          <nav className="gap-8 font-semibold text-black-pearl flex flex-col">
            {settings.headerLinks.map((link) => (
              <Link
                href={link.url}
                key={link._key}
                onClick={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }
                  setIsSidebarOpen(false);
                  timeoutRef.current = setTimeout(
                    () => setIsSidebarMounted(false),
                    300,
                  );
                }}
                className={cn("hover:text-vivid-orange duration-300 w-fit group flex gap-6 items-center", pathname === link.url && 'text-vivid-orange')}
              >
                <span>{link.label}</span>
                <ArrowRight className="group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 opacity-0 duration-300" />
              </Link>
            ))}
            <div className="flex flex-col gap-2">
              <div
                className={cn(
                  "flex gap-4 items-center cursor-pointer hover:text-vivid-orange duration-300",
                  isSubMenuOpen && "text-vivid-orange",
                )}
                onClick={() => setIsSubMenuOpen((prev) => !prev)}
                role="button"
              >
                <span>{settings.headerButton}</span>
                <span>
                  <ChevronDown
                    className={cn(
                      "size-4.5! duration-300",
                      isSubMenuOpen && "rotate-180",
                    )}
                  />
                </span>
              </div>
              <div
                className={cn(
                  "overflow-hidden duration-300 flex flex-col gap-2 text-black-pearl pl-4 translate-y-2 max-h-0 ease-in-out",
                  isSubMenuOpen && "translate-y-0 max-h-10000",
                )}
              >
                {subMenuLinks.map((link) => (
                  <Link
                    href={"#"}
                    key={link}
                    onClick={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                      }
                      setIsSubMenuOpen(false);
                      setIsSidebarOpen(false);
                      timeoutRef.current = setTimeout(
                        () => setIsSidebarMounted(false),
                        300,
                      );
                    }}
                    className={cn(
                      "pl-2 opacity-0 ease-in-out duration-300 hover:text-vivid-orange border-l py-1 border-vivid-orange group flex items-center gap-6",
                      isSubMenuOpen && "opacity-100",
                    )}
                  >
                    <span>{link}</span>
                    <ArrowRight className="group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 opacity-0 duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
