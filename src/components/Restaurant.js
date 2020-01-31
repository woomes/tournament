import React from 'react';
import "rbx/index.css";
import { Card, Title } from 'rbx';

const Restaurant = ({ name, cuisine, price }) => (
    <Card>
      <Title>{name} </Title> {cuisine} {price }
    </Card>
  );

export default Restaurant;