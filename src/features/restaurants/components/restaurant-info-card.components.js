import React from "react";
import { Text, Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
background-color: white;
elevation: 5;
`

const RestaurantCardCover = styled(Card.Cover)`
background-color: black;
padding: 20px;
`

const Title = styled(Text)`
color: red;
padding: 16px;
`

export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {name = "Some Restaurant", 
    icon="folder", 
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"], 
    address="100 random street", 
    isOpenNow=true, 
    rating=4, 
    isClosedTemporarily=false
} = restaurant;

    return (
    <RestaurantCard>
        <RestaurantCardCover key={name} source={{uri:photos[0]}} />
        <Title>{name}</Title>
    </RestaurantCard>  
    ); 
};


