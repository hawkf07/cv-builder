import { UseFormReturn, useForm, useFormContext } from "react-hook-form";
import { MainButton, SecondaryButton } from "./Button";
import { useFormStore } from "../utils/store";
import { Input } from "./Input";
import { FC } from "react";
type Form = {};
export const StepOneForm: FC<Form> = ({ }) => {
  const { register } = useFormContext();
  const { setPageWizardNumber } = useFormStore();
  return (
    <div className="flex flex-col gap-3">
      <header>
        <h1>Summary</h1>
      </header>
      <textarea
        className="focus:outline-blue-400 p-2 px-4 w-full shadow rounded-md border border-gray-400 bg-white"
        placeholder="write about the summary of the portofolio"
        required
        {...register("summary")}
      />
      <MainButton type="submit">Next</MainButton>
    </div>
  );
};
export const StepTwoForm: FC<Form> = () => {
  const { personalInformationNameList } = useFormStore();

  const { setPageWizardNumber, wizardPageNumber } = useFormStore();
  const { register } = useFormContext();
  return (
    <>
      <header>
        <h1>Contact Information</h1>
      </header>
      <div className="flex flex-col gap-2">
        {personalInformationNameList.map((item) => (
          <Input
            required
            {...register("contact." + item, { required: true })}
            placeholder={item}
            key={item}
            type={item === "email" ? "email" : "text"}
          />
        ))}
        <div className="grid grid-cols-2 gap-3">
          <SecondaryButton
            type="button"
            onClick={() => setPageWizardNumber("-")}
          >
            prev
          </SecondaryButton>
          <SecondaryButton type="submit">next</SecondaryButton>
        </div>
      </div>
    </>
  );
};

export const StepThreeForm: FC<Form> = () => {
  const {
    setPageWizardNumber,
    inputValue,
    inputOnChangeHandler,
    skillsList,
    setSkillsList,
  } = useFormStore();
  const { register } = useFormContext();
  return (
    <>
      <header>
        <h1>Skills</h1>
      </header>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Input
            placeholder="add skill"
            name="skillInput"
            onChange={(e) => inputOnChangeHandler(e)}
          />
          <SecondaryButton
            type="button"
            onClick={() => setSkillsList(inputValue.skillInput)}
          >
            +
          </SecondaryButton>
        </div>
        {skillsList.map((item) => (
          <Input
            required
            {...register("skills." + item, { required: true })}
            placeholder={"describe skill the " + ` '${item}'`}
            key={`${Math.random()} `}
          />
        ))}
        <div className="grid grid-cols-2 gap-3">
          <SecondaryButton
            type="button"
            onClick={() => setPageWizardNumber("-")}
          >
            {"<"} prev
          </SecondaryButton>
          <MainButton type="submit">Submit</MainButton>
        </div>
      </div>
    </>
  );
};
export const StepFourForm: FC<Form> = () => {
  const {
    setPageWizardNumber,
    experienceList,
    setExperienceList,
    data,
    inputValue,
    inputOnChangeHandler,
  } = useFormStore();
  const { register } = useFormContext();
  return (
    <>
      <header>
        <h1>Professional Experience</h1>
      </header>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Input
            placeholder="add professional experience"
            name="experienceInput"
            onChange={(e) => inputOnChangeHandler(e)}
          />
          <SecondaryButton
            type="button"
            onClick={() => setExperienceList(inputValue.experienceInput)}
          >
            +
          </SecondaryButton>
        </div>
        {experienceList.map((value) => (
          <Input
            {...register("experience." + value)}
            placeholder={"describe your experience" + ` '${value}'`}
            key={`${Math.random()} ${value}`}
            onChange={(e) => console.log(e.target.value, value)}
          />
        ))}
        <div className="grid grid-cols-2 gap-3">
          <SecondaryButton
            onClick={() => {
              setPageWizardNumber("-");
            }}
          >
            {"<"} prev
          </SecondaryButton>
          <MainButton type="submit">Submit</MainButton>
        </div>
      </div>
    </>
  );
};
