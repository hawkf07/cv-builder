import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import reactLogo from "./assets/react.svg";
import { contactInformationZodType } from "./utils/types";
import viteLogo from "/vite.svg";
import "./App.css";
import { Input } from "./components/Input";
import { MainButton, SecondaryButton } from "./components/Button";
import {
  FieldValues,
  useForm,
  Resolver,
  SubmitHandler,
  Form,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import autoAnimate from "@formkit/auto-animate";
import { z } from "zod";
import { useFormStore } from "./utils/store";
import { StepOneForm, StepTwoForm } from "./components/Forms";

function App() {
  const { handleSubmit, control, register } = useForm<
    z.infer<typeof contactInformationZodType>
  >({});
  const {
    setContactInformation,
    wizardPageNumber,
    personalInformationNameList,
    contactInformation,
    setPageWizardNumber,
  } = useFormStore();
  const onSubmit: SubmitHandler<z.infer<typeof contactInformationZodType>> = (
    data
  ) => console.log(data);

  return (
    <>
      <header>
        <h1 className="text-center upppercase">CV Builder</h1>
        <div className="flex items-center justify-center">
          {[1, 2, 3].map((num) => (
            <SecondaryButton
              value={num}
              onClick={() => setPageWizardNumber(num)}
              key={num}
            >
              {num}
            </SecondaryButton>
          ))}
        </div>
      </header>
      <main className="p-3">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          {wizardPageNumber === 1 ? (
            <div className="flex flex-col gap-3">
              <header>
                <h1>Summary</h1>
              </header>
              <textarea
                className="focus:outline-blue-400 p-2 px-4 w-full shadow rounded-xl bg-white"
                placeholder="write about the summary of the portofolio"
                {...register("summary")}
              />
              <MainButton>Submit</MainButton>
            </div>
          ) : wizardPageNumber == 2 ? (
            <>
              <header>
                <h1>Contact Information</h1>
              </header>
              <div className="flex flex-col gap-2">
                {personalInformationNameList.map((item) => (
                  <Input
                    required
                    {...register(item, { required: true })}
                    placeholder={item}
                    type={"email" === item ? "email" : "text"}
                    key={item}
                  />
                ))}
                <div className="flex w-full flex-col">
                  <MainButton
                    type="submit"
                    onClick={() => console.log(contactInformation)}
                  >
                    Submit
                  </MainButton>
                </div>
              </div>
            </>
          ) : null}
        </form>
      </main>
    </>
  );
}

export default App;
