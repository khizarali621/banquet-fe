"use client";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import clsx from "clsx";

type Person = { id: number; name: string }; // Define type for person

type SelectProps = {
  options: Person[]; // Add a prop for dynamic options
};

const Select: React.FC<SelectProps> = ({ options }) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Person | null>(options[0] || null);

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="w-full">
      <Combobox<Person | null>
        value={selected}
        onChange={(value) => setSelected(value)}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full rounded-xl border border-[#CBD5E1] bg-white md:py-4 py-3 px-5 md:text-xl text-base text-black",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary"
            )}
            displayValue={(person: Person | null) => person?.name || ""}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-8 fill-[#A8A8A8] group-data-[hover]:fill-[#A8A8A8]" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-xl border border-[#CBD5E1] bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {filteredOptions.map((option) => (
            <ComboboxOption
              key={option.id}
              value={option}
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
            >
              <CheckIcon className="invisible md:size-8 size-6 fill-[#A8A8A8] group-data-[selected]:visible" />
              <div className="md:text-lg text-base text-black">
                {option.name}
              </div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

export default Select;
