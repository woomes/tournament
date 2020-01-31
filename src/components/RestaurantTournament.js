import React, {useState, useEffect} from 'react';
import "rbx/index.css";
import { Button, Card, Modal, Column } from 'rbx';
import Restaurant from './Restaurant';

const RestaurantTournament = ({ restaurantA, restaurantB }) => {
    const [show, setShow] = useState(false);

    console.log(show)
    return(
    <Column.Group>
        <Column>
            <Card>
            <Card.Header>
                <Restaurant name={restaurantA.name}/>
            </Card.Header>
            <Card.Content>
                <Restaurant
                    cuisine={restaurantA.cuisine}
                    price={restaurantA.price} />
                <Button variant = "primary" onClick = {() => setShow(true)}>
                    Pick
                </Button>
                <Modal active={show} closeOnEsc={true}>
                    <Modal.Card>
                     <Modal.Card.Title>
                        Based on your preferences
                     </Modal.Card.Title>
                     <Modal.Content>
                        Time / Novelty / Rating / Freind Recommendation
                     </Modal.Content>
                    </Modal.Card>
                </Modal>
                
            </Card.Content>
            </Card>
        </Column>

        <Column>
            <Card>
            <Card.Header>
                <Restaurant name={restaurantB.name} />
            </Card.Header>
            <Card.Content>
                <Restaurant
                    cuisine={restaurantB.cuisine}
                    price={restaurantB.price} />
                <Button variant = "secondary" onClick = {() => setShow(true)}>
                    Pick
                </Button>
                <Modal active={show} closeOnEsc={true}>
                    <Modal.Card>
                     <Modal.Card.Title>
                        Based on your preferences
                     </Modal.Card.Title>
                     <Modal.Content>
                        Time / Novelty / Rating / Freind Recommendation
                     </Modal.Content>
                    </Modal.Card>
                </Modal>
            </Card.Content>
            </Card>
        </Column>
        </Column.Group>
  );
            };


export default RestaurantTournament