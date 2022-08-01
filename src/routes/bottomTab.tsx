import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

import BottomHomeScreen from "../pages/BottomTab/HomeScreen";
import WalletScreen from "../pages/BottomTab/WalletScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = <Icon name="home-outline" />;
const CardIcon = <Icon name="credit-card-outline" />;

const BottomTabBar = ({ navigation, state }: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={HomeIcon} />
    <BottomNavigationTab icon={CardIcon} />
  </BottomNavigation>
);

export default function BottomTabNavigator() {
  return (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Screen
        name="BottomHomeScreen"
        component={BottomHomeScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
