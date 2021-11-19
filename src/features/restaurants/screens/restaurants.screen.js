import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;


export const RestaurantsScreen = () => {
  const { error, isLoading, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeArea>
          <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        contentContainerStyle={{ padding: 16 }}
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          <Spacer>
            return <RestaurantInfoCard restaurant={item}/>;
          </Spacer>          
        }}
      />
    </SafeArea>
  );
};
