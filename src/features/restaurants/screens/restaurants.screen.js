import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";

let RestaurantsScreenContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantsScreenSearch = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreenList = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <RestaurantsScreenContainer>
    <RestaurantsScreenSearch>
      <Searchbar />
    </RestaurantsScreenSearch>
    <RestaurantsScreenList>
      <RestaurantInfoCard />
    </RestaurantsScreenList>
  </RestaurantsScreenContainer>
);
