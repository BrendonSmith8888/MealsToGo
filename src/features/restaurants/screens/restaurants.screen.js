import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";

const RestaurantsScreenContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const RestaurantsScreenSearch = styled.View`
background-color: green;
padding: 20px;
`;

const RestaurantsScreenList = styled.View`
background-color: blue;
flex: 1;
padding: 20px;
`;

export const RestaurantsScreen = () => (
    <RestaurantsScreenContainer>
      <RestaurantsScreenSearch>
        <Searchbar />
      </RestaurantsScreenSearch>
      <RestaurantsScreenList>
        <RestaurantInfoCard/>
      </RestaurantsScreenList>
    </RestaurantsScreenContainer>
);

