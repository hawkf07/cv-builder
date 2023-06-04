import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import reactLogo from "./assets/react.svg";
import { contactInformation, contactInformationZodType } from "./utils/types";
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
  FormProvider,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import autoAnimate from "@formkit/auto-animate";
import { z } from "zod";
import { useFormStore } from "./utils/store";
import { StepOneForm, StepThreeForm, StepTwoForm } from "./components/Forms";

function App() {
  const methods = useForm<contactInformation>();

  const {
    setContactInformation,
    wizardPageNumber,
    personalInformationNameList,
    contactInformation,
    setPageWizardNumber,
  } = useFormStore();
  const onSubmit: SubmitHandler<z.infer<typeof contactInformationZodType>> = (
    data
  ) => {
    setContactInformation(data);
  };

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
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-3"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            {wizardPageNumber === 1 ? (
              <StepOneForm />
            ) : wizardPageNumber == 2 ? (
              <StepTwoForm />
            ) : wizardPageNumber === 3 ? (
              <StepThreeForm />
            ) : null}
          </form>
        </FormProvider>
      </main>
    </>
  );
}

export default App;
