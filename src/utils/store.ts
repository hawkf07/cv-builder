import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { create, useStore } from "zustand";
import { contactInformation } from "./types";
type formStore = {
  inputOnChangeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputValue: string;
  contactInformation: contactInformation | null;
  setContactInformation: (data: contactInformation) => void;
  personalInformationNameList: string[];
  wizardPageNumber: number;
  setPageWizardNumber: (page: number) => void;
};

export const useFormStore = create<formStore>((set, get) => ({
  inputOnChangeHandler(e) {
    set({ inputValue: e.target.value });
  },

  inputValue: "",
  contactInformation: null,
  setContactInformation(data) {
    console.log(data);
    set({ contactInformation: data });
  },
  personalInformationNameList: ["address", "contact"],
  wizardPageNumber: 1,
  setPageWizardNumber(page) {
    set({ wizardPageNumber: page });
  },
}));
