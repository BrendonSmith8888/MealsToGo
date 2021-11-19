import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/Theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { RestaurantsScreenContainer } from "./src/components/utility/safe-area.component";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurants",
  Map: "md-map",
  Settings: "settings",
};

const Map = () => (
  <RestaurantsScreenContainer>
    <Text>Map</Text>
  </RestaurantsScreenContainer>
);
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
const Settings = () => (
  <RestaurantsScreenContainer>
    <Text>Settings</Text>
  </RestaurantsScreenContainer>
);
/* const tabBarIcon = (iconName) => ({}) => <Ionicons name={iconName} size={size} color={color} />; */

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

//SafeAreaView Only Supports IOS
//StatusBar.currentHeight Supports Android
