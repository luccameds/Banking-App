import React from "react";
import { StatusBar } from "expo-status-bar";
import { ApplicationProvider, Layout } from "@ui-kitten/components";

import * as eva from "@eva-design/eva";

import OnboardingScreen from "./src/pages/OnboardingScreen";

export default () => (
  <ApplicationProvider {...eva} theme={eva["light"]}>
    <StatusBar />
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <OnboardingScreen />
    </Layout>
  </ApplicationProvider>
);
