import React, { useContext } from "react";
import { Divider, List, ListItem, Text } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { ThemeContext } from "../../contexts/theme";

export const ListComponent = (props) => {
  const themeContextConsumed = useContext(ThemeContext);

  const renderItem = ({ item, index }) => (
    <ListItem
      title={(evaProps) => (
        <Text {...evaProps} category={"h3"} style={{ fontSize: 15 }}>
          {item.title}
        </Text>
      )}
      description={(evaProps) => (
        <Text {...evaProps} style={{ fontSize: 15, color: "#808080" }}>
          {item.description}
        </Text>
      )}
      accessoryLeft={
        <View style={{ marginHorizontal: 30 }}>
          <Ionicons
            name={item.icon}
            size={24}
            color={
              themeContextConsumed.theme === "light" ? "#1e1e1e" : "#FFFFFF"
            }
          />
        </View>
      }
    />
  );

  return (
    <List
      data={props.data}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};
