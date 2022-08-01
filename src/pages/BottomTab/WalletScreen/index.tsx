import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";

// import { Container } from './styles';

const WalletScreen: React.FC = () => {
  return <Layout style={styles.container} />;
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
