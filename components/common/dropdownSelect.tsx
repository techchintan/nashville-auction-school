import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Label } from "../ui/label";

interface DropdownSelectProps {
  menuItems: { label: string; value: string | number; icon?: ReactNode }[];
  placeHolder: string;
  selectedOption: { label: string; value: string | number };
  onSelect: (value: string | number) => void;
  label: string;
  icon?: ReactNode;
}

const DropdownSelect = ({
  menuItems,
  placeHolder,
  selectedOption,
  onSelect,
  label,
  icon,
}: DropdownSelectProps) => {
  return (
    <div className="relative flex flex-col gap-2">
      {label && (
        <Label className="text-xl font-bold text-black-pearl">{label}</Label>
      )}
      <Select onValueChange={onSelect} defaultValue={selectedOption.label}>
        <SelectTrigger className="border-grey-200 flex w-full items-center justify-between rounded-sm border px-4 py-1 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 focus-visible:shadow-none">
          {selectedOption?.value ? (
            <div className="flex w-full items-center gap-2">
              {icon && icon}
              <span className="text-black-pearl line-clamp-1 text-left text-base font-normal whitespace-normal">
                {selectedOption?.label}
              </span>
            </div>
          ) : (
            <span className="text-black-pearl/60 line-clamp-1 text-left text-base font-normal italic">
              {placeHolder ?? ""}
            </span>
          )}
        </SelectTrigger>
        <SelectContent className="max-h-60 w-min rounded-sm" position="popper">
          {menuItems?.map((option, index) => {
            return (
              <SelectItem
                key={index}
                value={option.label}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2 rounded-sm text-left",
                  option.label === selectedOption.label && "bg-shiny-white",
                )}
              >
                {option?.icon && option.icon}
                <span className="text-black-pearl line-clamp-1 text-[14px] leading-6.75 font-normal">
                  {option.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropdownSelect;
