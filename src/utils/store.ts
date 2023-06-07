import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";
import { create, useStore } from "zustand";
import { SubmitHandler, FieldValues } from "react-hook-form";
export type page = string;

import { data } from "./types";
type formStore = {
  inputOnChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: {
    [x: string]: string;
  };
  data: data | null;
  setData: (data: data) => void;
  personalInformationNameList: string[];
  wizardPageNumber: number;
  setPageWizardNumber: (page: string) => void;
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

    experienceList !== null &&
      set({ experienceList: [...experienceList, experience] });
  },
  page: "editor",
  setPage(page) {
    set({ page: page });
  },
  inputOnChangeHandler(e) {
    if (e === null) null;
    set({
      inputValue: {
        [e.target.name]: e.target.value,
      },
    });
  },

  inputValue: {},
  data: null,
  setData(data) {
    set({ data: data });
  },
  personalInformationNameList: [
    "fullName",
    "address",
    "phoneNumber",
    "email",
    "linkedin",
  ],
  wizardPageNumber: 1,
  setPageWizardNumber(type) {
    const { wizardPageNumber } = get();
    console.log(wizardPageNumber);
    type === "+"
      ? set({
        wizardPageNumber: wizardPageNumber === 4 ? 4 : wizardPageNumber + 1,
      })
      : type == "-"
        ? set({
          wizardPageNumber: wizardPageNumber === 1 ? 1 : wizardPageNumber - 1,
        })
        : null;
  },
  skillsList: [],
  setSkillsList(skill) {
    const { skillsList } = get();
    set({ skillsList: [...skillsList, skill] });
  },
}));
