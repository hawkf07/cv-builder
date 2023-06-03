import { useForm } from "react-hook-form";
import { MainButton } from "./Button";
import { } from "../utils/types";
import { useFormStore } from "../utils/store";
import { Input } from "./Input";
export const StepOneForm = () => {
  const { register } = useForm();
  return (
      );
};
export const StepTwoForm = () => {
  const { personalInformationNameList } = useFormStore();
  const { register } = useForm();
  return (
    );
};
