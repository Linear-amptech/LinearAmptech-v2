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
          "flex h-12 w-full items-center justify-between gap-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 text-left text-sm text-[color:var(--color-text)] outline-none transition-all duration-300 hover:border-[color:var(--color-text)]/25 focus-visible:border-[color:var(--color-text)]/30 focus-visible:ring-2 focus-visible:ring-[color:var(--color-text)]/10 data-[popup-open]:border-[color:var(--color-text)]/30",
          className,
        )}
      >
        <Select.Value
          placeholder={
            <span className="text-[color:var(--color-text-muted)]">
              {placeholder}
            </span>
          }
        />
        <Select.Icon>
          <ChevronDown className="size-4 text-[color:var(--color-text-muted)] transition-transform duration-300 data-[popup-open]:rotate-180" />
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
          <Select.Popup className="min-w-[var(--anchor-width)] max-w-[calc(100vw-2rem)] origin-[var(--transform-origin)] overflow-hidden rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-1.5 text-sm text-[color:var(--color-text)] shadow-[0_18px_50px_rgba(15,23,42,0.16)] outline-none transition-[opacity,transform] duration-200 ease-out data-[ending-style]:-translate-y-1 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:-translate-y-1 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="flex cursor-default items-center justify-between gap-4 rounded-md px-3 py-2.5 text-[color:var(--color-text-muted)] outline-none transition-colors data-[highlighted]:bg-[color:var(--color-surface-soft)] data-[highlighted]:text-[color:var(--color-text)] data-[selected]:text-[color:var(--color-text)]"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check
                    className="size-4 text-[color:var(--color-text)]"
                    aria-hidden="true"
                  />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
