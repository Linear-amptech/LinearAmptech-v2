"use client";

import { Select } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type SelectOption = {
  value: string;
  label: string;
};

type AppSelectProps = {
  options: SelectOption[];
  placeholder: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  required?: boolean;
  className?: string;
};

export function AppSelect({
  options,
  placeholder,
  value,
  defaultValue,
  onValueChange,
  name,
  required,
  className,
}: AppSelectProps) {
  const selectedValue = value === "" ? null : value;
  const initialValue = defaultValue === "" ? null : defaultValue;

  return (
    <Select.Root
      value={selectedValue}
      defaultValue={initialValue}
      onValueChange={(nextValue) => onValueChange?.(nextValue ?? "")}
      name={name}
      required={required}
      modal={false}
    >
      <Select.Trigger
        className={cn(
          "flex h-12 w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-slate-950/55 px-4 text-left text-sm text-white outline-none transition-all duration-300 hover:border-cyan-200/35 focus-visible:border-cyan-200/55 focus-visible:ring-2 focus-visible:ring-cyan-200/20 data-[popup-open]:border-cyan-200/55 data-[popup-open]:bg-slate-950/75",
          className,
        )}
      >
        <Select.Value
          placeholder={<span className="text-slate-500">{placeholder}</span>}
        />
        <Select.Icon>
          <ChevronDown className="size-4 text-cyan-100 transition-transform duration-300 data-[popup-open]:rotate-180" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          side="bottom"
          align="start"
          sideOffset={6}
          alignItemWithTrigger={false}
          className="z-[80]"
        >
          <Select.Popup className="min-w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-hidden rounded-lg border border-white/10 bg-[#06101d] p-1.5 text-sm text-white shadow-[0_18px_70px_rgba(0,0,0,0.46)] outline-none backdrop-blur-xl transition-[opacity,transform] duration-200 ease-out data-[ending-style]:-translate-y-1 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:-translate-y-1 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="flex cursor-default items-center justify-between gap-4 rounded-md px-3 py-2.5 text-slate-200 outline-none transition-colors data-[highlighted]:bg-cyan-200/10 data-[highlighted]:text-white data-[selected]:text-cyan-100"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check className="size-4 text-cyan-200" aria-hidden="true" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
