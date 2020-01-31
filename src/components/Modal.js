import React, {useState, useEffect} from 'react';
import "rbx/index.css";
import { Button, Card, Modal, Column } from 'rbx';

const ModalButton = () => {
    return (
        
            <Modal>
                <Modal.Background></Modal.Background>
                <Modal.Card>
                    <Modal.Card.Title>
                        Winner
                    </Modal.Card.Title>
                    <Modal.Card.Content></Modal.Card.Content>
                </Modal.Card>
            </Modal> 
    )
};

export default ModalButton;