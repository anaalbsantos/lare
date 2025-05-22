import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { label, ...rest } = props;
    return (
      <button
        ref={ref}
        {...rest}
        className="text-white bg-borrow px-20 hover:border-none w-fit border-none focus-visible:outline-none hover:opacity-90"
      >
        {label}
      </button>
    );
  }
);

export default Button;
