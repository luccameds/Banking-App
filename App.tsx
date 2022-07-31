import * as React from "react";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

import Route from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva["light"]}>
        <StatusBar />
        <Route />
      </ApplicationProvider>
    </NavigationContainer>
  );
}
