import { DetailedHTMLProps, FC, InputHTMLAttributes, forwardRef } from "react";

type Input = {} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type Ref = HTMLInputElement;
export const Input = forwardRef<Ref, Input>((props, ref) => {
  return (
    <input
      ref={ref}
      className="p-2 focus:outline-blue-400 px-3 bg-white shadow rounded-xl "
      {...props}
    />
  );
});
