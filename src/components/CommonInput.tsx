import { forwardRef, ForwardRefRenderFunction, PropsWithChildren } from "react";

interface IContainerProps {
  inputPlaceHolder: string;
  minLength?: number;
  maxLength?: number;
  inputType?: string;
  inputOnChange?: Function;
  value?: any;
  disabled?: boolean;
  required?: boolean;
}
const HtmlInput: ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<IContainerProps>
> = (props: any) => {
  return (
    <input
      placeholder={props.inputPlaceHolder}
      value={props.value}
      type={props.inputType}
      onChange={(data) => {
        props.inputOnChange(data.target.value);
      }}
      maxLength={props.maxLength || 100}
      minLength={props.minLength || 0}
      disabled={props.disabled}
    ></input>
  );
  // <HtmlInput inputPlaceHolder="Enter name" minLength={0} maxLength={15} inputType="text" inputOnChange={()=>InChage} required />
  //     <HtmlInput inputPlaceHolder="Enter number" minLength={0} maxLength={5} inputType="number" inputOnChange={()=>InChage} required />
};
export default forwardRef(HtmlInput);
