const prefersColorScheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const default_theme = (theme) =>
  theme === "dark"
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");

const handleTheme = (e, light, dark, system, setTheme) => {
  let lightBtn = e.target === light.current ? true : false;
  let darkBtn = e.target === dark.current ? true : false;
  let systemBtn = e.target === system.current ? true : false;

  if (darkBtn) {
    setTheme("dark");
    [light.current, dark.current, system.current].forEach((item) =>
      item.classList.remove("theme-btn-active")
    );
    dark.current.classList.add("theme-btn-active");
  } else if (systemBtn) {
    setTheme("dark");
    [light.current, dark.current, system.current].forEach((item) =>
      item.classList.remove("theme-btn-active")
    );
    system.current.classList.add("theme-btn-active");
  } else {
    setTheme("light");
    [light.current, dark.current, system.current].forEach((item) =>
      item.classList.remove("theme-btn-active")
    );
    light.current.classList.add("theme-btn-active");
  }
};

export { prefersColorScheme, default_theme, handleTheme };
