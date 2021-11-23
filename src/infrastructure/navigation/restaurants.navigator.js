import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerShown="false">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
