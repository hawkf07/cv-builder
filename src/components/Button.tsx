import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
  forwardRef,
} from "react";

type Button = { children: ReactNode } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const MainButton = forwardRef<HTMLButtonElement, Button>(
  (props, ref) => {
    const { children } = props;
    return (
      <button
        {...props}
        className="flex bg-blue-400 rounded items-center  gap-2 px-3 p-2"
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
