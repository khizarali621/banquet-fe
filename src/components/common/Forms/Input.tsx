"use client";
import * as React from "react";
import { UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";

interface SizeProps {
  sm: string;
  lg: string;
  md: string;
}

const sizeStyles: SizeProps = {
  sm: "px-3 py-2 text-sm",
  md: "px-[22px] py-5 text-xs",
  lg: "px-5 py-4 text-lg",
};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  register?: UseFormRegister<any>;
  name: string;
  size?: "sm" | "md" | "lg";
  AddIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, register, type, name, size = "md", AddIcon, ...props },
    ref
  ) => {
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);
    const togglePasswordVisibility = () =>
      setPasswordVisible(!isPasswordVisible);

    const inputType = type === "password" && isPasswordVisible ? "text" : type;

    return (
      <div className="relative flex w-full">
        {AddIcon && (
          <div className="absolute top-1/2 -translate-y-1/2 left-4 flex items-center justify-center overflow-hidden rounded-l-md">
            {AddIcon}
          </div>
        )}
        <input
          type={inputType}
          className={cn(
            "flex w-full rounded-md border-[1.5px] bg-[#A6A6A60D] border-white focus-visible:outline-none focus-visible:ring-0 focus-visible:border-white disabled:cursor-not-allowed disabled:opacity-50",
            className,
            sizeStyles[size],
            AddIcon && "pl-12"
          )}
          ref={ref}
          {...(register !== undefined && { ...register(name) })}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
          >
            {isPasswordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
