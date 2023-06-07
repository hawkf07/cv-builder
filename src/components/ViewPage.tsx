import { useFormStore } from "../utils/store";

export const ViewPage = () => {
  const { data } = useFormStore();
  const skills = Object.entries(data?.skills);
  return (
    <>
      <div className=" grid h-screen" id="cv">
        <main className="shadow-lg mt-2 bg-white p-3 mx-3">
          <div>
            <header>
              <h1>Summary</h1>
            </header>
            <div>
              <p>{data?.summary}</p>
            </div>
          </div>
          <div>
            <header>
              <h1>Skills</h1>
            </header>
            {skills.flatMap((item) => (
              <>
                {" "}
                <div className="flex gap-5 mx-3">
                  <p className="font-bold">{item[0]}</p>
                  <p> {item[1]}</p>
                </div>
              </>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};
