import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import { ThemeContext } from "../../../contexts/theme";

export default function HomeScreen({ navigation }) {
  const themeContext = React.useContext(ThemeContext);

  const navigateDetails = () => {
    navigation.navigate("WalletScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button style={{ marginVertical: 4 }} onPress={navigateDetails}>
          ABRIR DETALHES
        </Button>
        <Button
          style={{ marginVertical: 4 }}
          onPress={themeContext.toggleTheme}
        >
          MUDAR TEMA
        </Button>
      </Layout>
    </SafeAreaView>
  );
}
