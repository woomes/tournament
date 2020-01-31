import React, {useEffect, useState} from 'react';
import "rbx/index.css"
import { Container, Card, Title, Column } from "rbx"
import Restaurant from "./components/Restaurant"
import RestaurantTournament from "./components/RestaurantTournament"



const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const restaurants = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/restaurants.json');
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    };
    fetchProducts();
   }, []);
  
  return (
    isLoading ?
    <Title> isLoading </Title>
    : 
    <Container>
      <Title>Pick-a-place</Title> 
      <RestaurantTournament 
      restaurantA={ restaurants[0] } 
      restaurantB={ restaurants[1] }/>
    </Container>
  );
};
export default App;
