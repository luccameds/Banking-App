import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
  Text,
} from "@ui-kitten/components";

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = <Icon name="person-outline" />;

const BellIcon = <Icon name="bell-outline" />;

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="USERS" icon={PersonIcon} />
    <BottomNavigationTab title="ORDERS" icon={BellIcon} />
  </BottomNavigation>
);

export default function BottomTabNavigator() {
  return (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Screen name="Users" component={UsersScreen} />
      <Screen name="Orders" component={OrdersScreen} />
    </Navigator>
  );
}
