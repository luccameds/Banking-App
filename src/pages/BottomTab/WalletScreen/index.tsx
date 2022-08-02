import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Card, Icon, Layout, Text } from "@ui-kitten/components";
import { ListComponent } from "../../../components/List";
import { ThemeContext } from "../../../contexts/theme";

// import { Container } from './styles';

const data = [
  { icon: "ios-logo-amazon", title: "Amazon", description: "Vendas On-line" },
  { icon: "ios-logo-playstation", title: "PlayStation", description: "Jogos" },
  {
    icon: "ios-logo-facebook",
    title: "Facebook",
    description: "Redes Sociais",
  },
  { icon: "ios-logo-apple", title: "Apple", description: "Tecnologia" },
  { icon: "ios-logo-github", title: "GitHub", description: "Tecnologia" },
];

const WalletScreen: React.FC = () => {
  const themeContextConsumed = useContext(ThemeContext);

  return (
    <Layout style={styles.container}>
      <Card
        style={[
          styles.card,
          themeContextConsumed.theme === "light"
            ? { borderColor: "#1e1e1e" }
            : { borderColor: "#FFFFFF" },
        ]}
      >
        <Text category={"s1"} status={"info"}>
          Balanço Total
        </Text>
        <Text category={"h1"}>R$3.500,00</Text>
        <Layout style={{ flexDirection: "row" }}>
          <Icon
            style={{ height: 30, width: 30 }}
            fill="#4daa00"
            name="trending-up-outline"
          />
          <Text category={"s1"} style={styles.porcentageText}>
            +4,5% hoje
          </Text>
        </Layout>
      </Card>
      <Layout style={styles.walletLayout}>
        <Text category={"h5"}>Carteira</Text>
        <Icon
          style={{ height: 30, width: 30 }}
          fill={themeContextConsumed.theme === "light" ? "#1e1e1e" : "#FFFFFF"}
          name="plus-circle"
        />
      </Layout>
      <ListComponent data={data} />
    </Layout>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 90 },
  card: { width: "90%", alignSelf: "center" },
  walletLayout: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
    width: "90%",
  },
  porcentageText: { color: "#4daa00" },
});
