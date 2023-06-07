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
import html2pdf from "html2pdf.js";
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
import { type page as pageType, useFormStore } from "./utils/store";
import {
  StepFourForm,
  StepOneForm,
  StepThreeForm,
  StepTwoForm,
} from "./components/Forms";
import { ViewPage } from "./components/ViewPage";

function App() {
  const methods = useForm<contactInformation>();
  const element = document.getElementById("cv");
  useEffect(() => {
    const worker = html2pdf().from(element).save();
  }, []);

  const {
    setData,
    wizardPageNumber,
    personalInformationNameList,
    setPageWizardNumber,
    data,
    setPage,
    page,
  } = useFormStore();
  const onSubmit: SubmitHandler<z.infer<typeof contactInformationZodType>> = (
    data
  ) => {
    setPageWizardNumber("+");
    setData(data);
    console.log(data);
  };
  return (
    <>
      <header>
        <h1 className="text-center upppercase">CV Builder</h1>
        <div className="flex items-center justify-center">
          {["editor", "view", "demo"].map((page) => (
            <MainButton onClick={() => setPage(page)}>{page}</MainButton>
          ))}
        </div>
      </header>
      {page == "editor" ? (
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
              ) : wizardPageNumber == 4 ? (
                <StepFourForm />
              ) : null}
            </form>
          </FormProvider>
        </main>
      ) : page == "view" ? (
        <ViewPage />
      ) : null}
    </>
  );
}

export default App;
