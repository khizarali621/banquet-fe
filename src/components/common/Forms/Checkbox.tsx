"use client";
import React, { useState } from "react";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
type Props = {};

const Checkboxs = (props: Props) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex justify-center bg-transparent cursor-pointer">
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className="group size-5 rounded-md bg-white/10 p-1 ring-1 ring-[#D0D5DD] ring-inset data-[checked]:bg-white"
      >
        <CheckIcon className="hidden size-3 fill-black group-data-[checked]:block" />
      </Checkbox>
    </div>
  );
};

export default Checkboxs;
