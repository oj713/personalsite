import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import useLocalStorageState from "use-local-storage-state";
// https://blog.logrocket.com/dark-mode-react-in-depth-guide/

// Stores user color scheme pref in local storage

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const [isDarkMode, setIsDarkMode] = useLocalStorageState("colorScheme", {
    defaultValue: null, 
  });

  const value = useMemo(
    () => (isDarkMode === undefined ? !!systemPrefersDark : isDarkMode),
    [isDarkMode, systemPrefersDark]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [value]);

  return {
    isDarkMode: value,
    setIsDarkMode,
  };
}