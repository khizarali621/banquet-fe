import clsx from "clsx";

interface Iprops {
  label: string;
  className?: React.ReactNode;
  type?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: any;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checkClass?: string;
  labelClass?: string;
}

const FormCheck = ({
  label,
  className,
  type,
  disabled,
  id,
  name,
  value,
  checked,
  onChange,
  checkClass,
  labelClass,
}: Iprops) => {
  return (
    <div className={clsx(className, "mb-1 flex items-center gap-2")}>
      <input
        type={type ? type : "checkbox"}
        className={clsx(
          checkClass,
          "focus:shadow-outline h-4  w-4 cursor-pointer rounded-[3px] bg-transparent text-primary focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed",
          type == "radio" && "!rounded-full"
        )}
        name={name}
        id={`default-${id}`}
        disabled={disabled}
        onChange={(e) => {
          onChange ? onChange(e) : {};
        }}
        value={value}
        checked={checked}
      />
      <label
        htmlFor={`default-${id}`}
        className={`${labelClass} inline-block cursor-pointer text-lg`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormCheck;
