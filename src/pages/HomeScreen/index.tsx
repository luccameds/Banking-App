import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <Layout style={styles.container}>
      <Button onPress={() => navigation.navigate("BottomTabNavigator")} />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
