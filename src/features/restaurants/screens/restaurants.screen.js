import React from "react";
import { FlatList} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";
import { RestaurantsScreenContainer } from "../../../components/utility/safe-area.component";

const RestaurantsScreenSearch = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

/* const RestaurantsScreenList = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`; */

/* const RestaurantsScreenList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`
margin-bottom: ${(props) => props.theme.space[5]};
`; */

export const RestaurantsScreen = () => (
  <RestaurantsScreenContainer>
    <RestaurantsScreenSearch>
      <Searchbar />
    </RestaurantsScreenSearch>
    <FlatList 
      contentContainerStyle={{padding: 16}}
      data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8}, {name: 9}, {name: 10}]}
      keyExtractor={(item) => item.name}
      renderItem={() => <RestaurantInfoCard/>}
    />
{/*   
    <SafeArea
    <RestaurantsScreenContainer>
      <RestaurantsScreenSearch>
        <Searchbar />
      </RestaurantsScreenSearch>   
      <RestaurantScreenList  
      <FlatList 
      contentContainerStyle={{padding: 16}}
      data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8}, {name: 9}, {name: 10}]}
      keyExtractor={(item) => item.name}
      renderItem={() => <Spacer position="bottom" size="large"><RestaurantInfoCard/></Spacer>}
    /> 
    />*/}
  </RestaurantsScreenContainer>
);
