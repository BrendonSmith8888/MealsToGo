import React from "react";
import { Card, Title } from "react-native-paper";

export const RestaurantInfo = ({restaurant = {}}) => {
    const {name = "Some Restaurant", 
    //icon="folder", 
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg", 
    address="100 random street", 
    //isOpenNow=true, 
    //rating=4, 
    //isClosedTemporarily=false
} = restaurant;
   return <Card>
       <Card.Title title={name} subtitle={address}/>
        <Card.Cover source={{uri: photos}}/>
       </Card>
       
};
