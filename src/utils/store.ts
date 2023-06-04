import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { create, useStore } from "zustand";
import { SubmitHandler, FieldValues } from "react-hook-form";

import { contactInformation } from "./types";
type formStore = {
  inputOnChangeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputValue: {
    [x: string]: string;
  };
  contactInformation: contactInformation | null;
  setContactInformation: (data: contactInformation) => void;
  personalInformationNameList: string[];
  wizardPageNumber: number;
  setPageWizardNumber: (page: number) => void;
  skillsList: string[];
  setSkillsList: (skill: string) => void;
};

export const useFormStore = create<formStore>((set, get) => ({
  inputOnChangeHandler(e) {
    set({
      inputValue: {
        [e.target.name]: e.target.value,
      },
    });
  },

  inputValue: {},
  contactInformation: null,
  setContactInformation(data) {
    console.log(data);
    set({ contactInformation: data });
  },
  personalInformationNameList: ["address", "phone number", "email"],
  wizardPageNumber: 1,
  setPageWizardNumber(page) {
    set({ wizardPageNumber: page });
  },
  skillsList: [],
  setSkillsList(skill) {
    const { skillsList } = get();
    set({ skillsList: [...skillsList, skill] });
    console.log(skill);
  },
}));
