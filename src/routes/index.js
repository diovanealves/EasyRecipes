import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { StackRoutes } from "./stackRoutes.js";
import { Favorites } from "../pages/Favorites";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#000" size={size} />;
            } else {
              return <Ionicons name="home-outline" color={color} size={size} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" color="#FF4141" size={size} />;
            } else {
              return (
                <Ionicons name="heart-outline" color={color} size={size} />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
