import React from "react";
import * as eva from "@eva-design/eva";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { PasswordInputAccessoriesShowcase } from "../../components/PasswordInput";

import { default as theme } from "../../../src/theme/theme.json"; // <-- Import app theme

const LoginScreen: React.FC = ({ navigation }: any) => {
  const [value, setValue] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <Image
          source={require("../../../assets/favicon.png")}
          style={styles.logo}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Text category={"h2"} style={{ width: 300 }}>
            Entre agora em sua conta
          </Text>

          <Layout>
            <Layout style={styles.inputsContainer}>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite o seu E-mail"
                label={"E-mail"}
                value={value}
                onChangeText={(nextValue) => setValue(nextValue)}
              />
              <PasswordInputAccessoriesShowcase
                label="Senha"
                placeholder="Digite a sua Senha"
              />
            </Layout>

            <Text
              category={"label"}
              style={{
                alignSelf: "flex-end",
                color: theme["color-primary-500"],
              }}
              onPress={() => {}}
            >
              Esqueceu sua senha?
            </Text>
          </Layout>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("BottomTabNavigator")}
            style={styles.button}
          >
            Conectar-se
          </Button>
        </KeyboardAvoidingView>
        <Layout style={styles.footerContainer}>
          <Text category={"c2"}>Não tem uma conta?</Text>
          <Text
            category={"label"}
            onPress={() => {}}
            style={{ color: theme["color-primary-500"] }}
          >
            Criar conta
          </Text>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { marginVertical: 30 },
  inputsContainer: {
    height: 180,
    width: 330,
    marginVertical: 30,
    justifyContent: "space-around",
  },
  forgetText: {
    alignSelf: "flex-end",
    color: eva.dark["color-primary-500"],
  },
  button: { marginVertical: 60 },
  footerContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 30,
  },
});
