import clsx from "clsx";
import { ImSpinner9 } from "react-icons/im";
import {
  BsProps,
  IButtonProps,
  SsProps,
  VsProps,
} from "@/interfaces/button.interface";

const baseStyles: BsProps = {
  solid:
    "inline-flex justify-center items-center  border-2 leading-none font-medium disabled:cursor-not-allowed disabled:text-white",
  outline:
    "inline-flex justify-center items-center  border-2 leading-none font-medium disabled:cursor-not-allowed disabled:text-white",
};

const variantStyles: VsProps = {
  solid: {
    primary:
      "bg-primary text-[#FFFFFF] active:text-#FFFFFF/80 border-primary hover:border-white disabled:opacity-30 disabled:hover:bg-primary disabled:text-white hover:bg-transparent hover:text-white",
  },
  outline: {
    primary:
      "border-white bg-transparent hover:text-white text-white hover:bg-primary hover:border-primary active:border-primary/20 active:bg-primary/10 active:text-primary/70 disabled:text-white disabled:opacity-40 disabled:hover:border-white disabled:hover:bg-transparent",
  },
};

const sizeStyles: SsProps = {
  sm: "px-2.5 py-1 text-xs",
  md: "md:px-11 px-8 md:py-4 py-3 text-base",
  lg: "px-7 py-2 text-base",
};
const Button = ({
  variant = "solid",
  color = "primary",
  size = "md",
  className,
  type,
  disabled,
  isLoading,
  children,
  loaderClass,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        sizeStyles[size],
        className,
        isLoading &&
          "relative !cursor-wait !text-transparent hover:!text-transparent"
      )}
      type={type || "button"}
      disabled={disabled}
      {...props}
    >
      {isLoading && (
        <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
          <ImSpinner9 className={clsx("animate-spin text-sm", loaderClass)} />
        </div>
      )}
      {children}
    </button>
  );
};
export default Button;
