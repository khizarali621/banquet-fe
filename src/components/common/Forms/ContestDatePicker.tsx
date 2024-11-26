"use client";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Calendar } from "@/components/common/Icons";

interface ContestDatePickerProps {
  className?: string;
  selected?: Date;
  onChange?: (date: Date | null) => void;
  [key: string]: any; // To accept other props
}

const ContestDatePicker: React.FC<ContestDatePickerProps> = ({
  className,
  selected,
  onChange,
  ...props
}) => {
  const [startDate, setStartDate] = useState<Date>(selected || new Date());

  const datePickerRef = useRef(null);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date || new Date());
    if (onChange) onChange(date);
  };

  const handleCalendarIconClick = () => {
    if (datePickerRef.current) {
      // Trigger the DatePicker input to open
      (datePickerRef.current as any).setFocus();
    }
  };

  return (
    <div className="relative rounded-xl border border-[#D7DAE0] w-full">
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        ref={datePickerRef}
        dateFormat="MM/dd/yyyy"
        className={`bg-transparent border-none md:py-4 py-3 px-5 text-[#0A0E14] placeholder:text-xl text-xl placeholder:font-normal placeholder:text-[#0A0E14] focus-visible:border-[#D7DAE0] focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 xs:placeholder:text-base xs:text-base ${className}`}
        {...props} // Spread other props
      />
      <div
        className="lg:px-5 px-4 h-full rounded-r-xl bg-primary border border-primary flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={handleCalendarIconClick}
      >
        <Calendar />
      </div>
    </div>
  );
};

export default ContestDatePicker;
