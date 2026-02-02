import { SettingsQueryResult } from "@/sanity.types";
import Link from "next/link";
import { SanityImage } from "../common/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = ({
  settings,
}: {
  settings: NonNullable<SettingsQueryResult>;
}) => {
  return (
    <footer className="bg-shiny-white">
      <div className="max-width-container padding-container">
        <div className="flex justify-between gap-x-20 gap-y-10 flex-wrap">
          <div className="flex flex-col gap-16">
            <Link href={"/"}>
              <SanityImage
                src={settings.footerLogo}
                alt={settings.footerLogo.alt}
                width={161}
                height={75}
                className="object-contain"
              />
            </Link>
            <div className="flex flex-col gap-3">
              <p className="text-black-pearl font-medium text-xl">
                Subscribe to Newsletter
              </p>
              <div className="bg-white rounded-[5px] flex">
                <Input
                  placeholder="Email Here"
                  className="bg-white placeholder:text-atomic-grey border-0 shadow-none rounded-[5px]"
                />
                <Button variant="primary" className="font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-between grow flex-wrap gap-y-10 gap-x-20">
            {settings.footerLinkGroups.map((group) => (
              <div key={group._key} className="flex flex-col gap-2">
                <p className="font-medium text-xl text-black-pearl">
                  {group.label}
                </p>
                {group.groupLinks.map((link) => (
                  <Link
                    href={link.url}
                    className="font-medium text-base text-dull-black hover:text-vivid-orange duration-300"
                    key={link._key}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <p className="font-medium text-xl text-black-pearl">Contact</p>
              <a
                href={`tel:${settings.contactPhone}`}
                className="font-medium text-base text-dull-black hover:text-vivid-orange duration-300"
              >
                {settings.contactPhone}
              </a>
              <a
                href={`mailto:${settings.contactEmail}`}
                className="font-medium text-base text-dull-black hover:text-vivid-orange duration-300"
              >
                {settings.contactEmail}
              </a>
              <p className="font-medium text-base text-dull-black">
                {settings.contactDescription}
              </p>
              <div className="flex items-center justify-between gap-2 mt-4">
                {settings.socialMediaLinks.map((link) => (
                  <Link
                    href={link.url}
                    target={link.isExternal ? "_blank" : "_self"}
                    key={link._key}
                  >
                    <SanityImage
                      src={link.image}
                      alt={link.image.alt}
                      width={26}
                      height={26}
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
