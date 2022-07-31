import * as React from "react";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ApplicationProvider } from "@ui-kitten/components";

import Route from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva["light"]}>
        <StatusBar />
        <Route />
      </ApplicationProvider>
    </NavigationContainer>
  );
}
