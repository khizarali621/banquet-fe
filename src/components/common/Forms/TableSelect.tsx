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
  tableOptions: Person[]; // Add a prop for dynamic options
  className: string;
};

const TableSelect: React.FC<SelectProps> = ({ tableOptions, className }) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Person | null>(
    tableOptions[0] || null
  );

  const filteredOptions =
    query === ""
      ? tableOptions
      : tableOptions.filter((tableOptions) =>
          tableOptions.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className={`${className} w-full `}>
      <Combobox<Person | null>
        value={selected}
        onChange={(value) => setSelected(value)}
        onClose={() => setQuery("")}
      >
        <div className="relative flex gap-3">
          <ComboboxInput
            className={clsx(
              " w-full rounded-xl bg-white md:text-sm text-xs text-[#101828]",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-none"
            )}
            displayValue={(person: Person | null) => person?.name || ""}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 flex items-center">
            <ChevronDownIcon className="size-6 fill-[#A8A8A8] group-data-[hover]:fill-[#A8A8A8]" />
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
          {filteredOptions.map((tableOptions) => (
            <ComboboxOption
              key={tableOptions.id}
              value={tableOptions}
              className="group flex cursor-pointer items-center gap-1 rounded-lg py-2 px-1 select-none data-[focus]:bg-black/10"
            >
              <CheckIcon className="invisible size-4 fill-[#A8A8A8] group-data-[selected]:visible" />
              <div className="text-xs text-[#101828]">{tableOptions.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

export default TableSelect;
