import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  left: 50%;
  position: absolute;
  top: 50%;  
`;

export const RestaurantsScreen = () => {
  const { error, isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animation={true} color={Colors.blue300} size={50}/>
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        contentContainerStyle={{ padding: 16 }}
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          <Spacer>
            return <RestaurantInfoCard restaurant={item} />;
          </Spacer>;
        }}
      />
    </SafeArea>
  );
};
