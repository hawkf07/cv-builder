import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Input } from "./components/Input";
import { MainButton } from "./components/Button";
import { useForm } from "react-hook-form";
import autoAnimate from "@formkit/auto-animate";

function App() {
  const [page, setPage] = useState(0);
  const [isNewInputFormRevealed, setIsNewInputFormRevealed] = useState(false);
  const [newInputValue, setNewInputValue] = useState("");
  const { watch, register, control, handleSubmit, formState } = useForm();
  const [personalInformationNameList, setPersonalInformationNameList] =
    useState(["address", "email", "phoneNumber"]);

  const personalInputFormParentRef = useRef();
  useEffect(() => {
    personalInputFormParentRef.current &&
      autoAnimate(personalInputFormParentRef.current);
  }, [personalInputFormParentRef]);
  const newInputFormHandler = () =>
    setIsNewInputFormRevealed(!isNewInputFormRevealed);
  const onSubmit = (data) => console.log(data);
  const inputOnChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    setValue: any
  ) => setValue(e.target.value);

  return (
    <>
      <main className="p-3">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <header>
              <h1>Summary</h1>
            </header>
            <textarea
              className="focus:outline-blue-400 p-2 px-4 w-full shadow rounded-xl bg-white"
              placeholder="write about the summary of the portofolio"
              {...register("summary")}
            />
          </div>
          <div>
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
              <div
                ref={personalInputFormParentRef}
                className="flex w-full flex-col"
              >
                <MainButton type="button" onClick={() => newInputFormHandler()}>
                  Add More Info <span className="text-xl">↓</span>
                </MainButton>
                {isNewInputFormRevealed && (
                  <>
                    <Input
                      onChange={(e) =>
                        inputOnChangeHandler(e, setNewInputValue)
                      }
                      placeholder="more contact information name"
                    />
                    <button
                      className="bg-yellow-400 p-1 px-2"
                      onClick={() => {
                        setPersonalInformationNameList((prevState) => [
                          ...prevState,
                          newInputValue,
                        ]);
                        setNewInputValue("");
                      }}
                    >
                      Add
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
