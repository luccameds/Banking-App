import * as React from "react";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

import { default as CustomTheme } from "./src/theme/theme.json";

import Route from "./src/routes";
import { ThemeContext } from "./src/contexts/theme";

export default function App() {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={{ ...eva[theme], ...CustomTheme }}>
          <StatusBar style={theme === "light" ? "dark" : "light"} />
          <Route />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}
