import { useRef, useState } from "react";
import { prefersColorScheme, default_theme, handleTheme } from "./lib/theme";
const App = () => {
  const lightBtn = useRef();
  const darkBtn = useRef();
  const systemBtn = useRef();
  const [theme, setTheme] = useState(prefersColorScheme());
  //console.log(useRef());
  default_theme(theme);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 dark:bg-slate-700">
      <span className="border border-dashed bg-slate-50 p-5 dark:bg-slate-800 dark:text-white">
        react-starter-template
      </span>
      <div className="absolute top-0 right-0 grid grid-cols-3 border border-dashed border-slate-700 dark:border-white dark:bg-slate-600 dark:text-white">
        <button
          className=" bg-red-400 px-10 py-4"
          onClick={(e) =>
            handleTheme(e, lightBtn, darkBtn, systemBtn, setTheme)
          }
          ref={lightBtn}
        >
          light
        </button>
        <button
          className="px-10 py-4"
          onClick={(e) =>
            handleTheme(e, lightBtn, darkBtn, systemBtn, setTheme)
          }
          ref={darkBtn}
        >
          dark
        </button>
        <button
          className="theme-btn-active px-10 py-4"
          onClick={(e) =>
            handleTheme(e, lightBtn, darkBtn, systemBtn, setTheme)
          }
          ref={systemBtn}
        >
          system
        </button>
      </div>
    </div>
  );
};

export default App;
