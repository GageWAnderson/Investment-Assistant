import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from 'uuid';

class StockList extends Component {
    state = {
        stocks: [
            //Hardcoding for testing purposes
            { id: uuid(), name: 'Apple' },
            { id: uuid(), name: 'Microsoft' },
            { id: uuid(), name: 'Alphabet' },
            { id: uuid(), name: 'Facebook' },
            { id: uuid(), name: 'Amazon' }
        ]
    }

    render() {
        const { stocks } = this.state;
        return (
            <Container 
            color="dark" 
            style={{marginBottom: '2rem'}} 
            >
                <Button
                onClick={() => {
                const name = prompt('Enter a Stock');
                if(name) {
                    this.setState(state => ({
                        stocks: [...state.stocks, { id: uuid(), name }]
                    }));
                }
                }}>Add Stock</Button>

                <ListGroup>
                    <TransitionGroup className="stock-list">
                        {stocks.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                            stocks: state.stocks.filter(stock => stock.id !== id)
                                        }));
                                    }}>&times;</Button>
                                {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        ); 
    }
}

export default StockList;