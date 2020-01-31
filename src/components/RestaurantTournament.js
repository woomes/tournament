import React from 'react';
import "rbx/index.css";
import { Column } from 'rbx';
import Restaurant from './Restaurant';

const RestaurantTournament = ({ restaurantA, restaurantB }) => (
    <Column.Group>
        <Column>
            <Restaurant
          name={restaurantA.name} 
          cuisine={restaurantA.cuisine}
          price={restaurantA.price}
          />
        </Column>
        <Column>
            <Restaurant
          name={restaurantB.name} 
          cuisine={restaurantB.cuisine}
          price={restaurantB.price}
          />
        </Column>
    </Column.Group>
  );

export default RestaurantTournament