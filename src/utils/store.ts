import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";
import { create, useStore } from "zustand";
import { SubmitHandler, FieldValues } from "react-hook-form";
export type page = string;

import { data } from "./types";
type formStore = {
  inputOnChangeHandler: (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputValue: {
    [x: string]: string;
  };
  data: data | null;
  setData: (data: data) => void;
  personalInformationNameList: string[];
  wizardPageNumber: number;
  setPageWizardNumber: (page: number) => void;
  skillsList: string[];
  setSkillsList: (skill: string) => void;
  page: page;
  setPage: (page: page) => void;
  experienceList: string[];
  setExperienceList: (experience: string) => void;
};

export const useFormStore = create<formStore>((set, get) => ({
  experienceList: [],
  setExperienceList(experience) {
    const { experienceList } = get();
    set({ experienceList: [...experienceList, experience] });
  },
  page: "editor",
  setPage(page) {
    set({ page: page });
  },
  inputOnChangeHandler(e) {
    const { inputValue } = get();
    set({
      inputValue: {
        ...inputValue,
        [e.currentTarget.name]: e.target.value,
      },
    });
  },

  inputValue: {},
  data: null,
  setData(data) {
    set({ data: data });
  },
  personalInformationNameList: ["address", "phone number", "email", "linkedin"],
  wizardPageNumber: 1,
  setPageWizardNumber(page) {
    set({ wizardPageNumber: page });
  },
  skillsList: [],
  setSkillsList(skill) {
    const { skillsList } = get();
    set({ skillsList: [...skillsList, skill] });
  },
}));
