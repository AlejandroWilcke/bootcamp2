import React from 'react';
import styled from 'styled-components';
import Button from './customized/Button.js';

const PassengerBody = styled.div`
    background: rgb(205,184,125);
    width: 300px;
    height: 304px;
    margin: 20px;
    border-radius: 15px;
    border: 2px solid rgba(70, 70, 70, 0.7);
`;

const PassengerHeader = styled.h2`
    color: white;
    text-align: center;
    cursor: default;
    background-color: rgba(222, 141, 0, 1);
    font-family: "Palatino Linotype";
    height: 70px;
    line-height: 70px;
    margin: 0;
    margin-bottom: -7px;
    border-radius: 12px 12px 0px 0px;
    text-shadow: 1px 0 0 #000, 1px 0 0 #000, 0 1px 0 #000, 0 1px 0 #000, 1px 1px #000, 1px 1px 0 #000, 1px 1px 0 #000, 1px 1px 0 #000;
`;

const Package = styled.div`
    border: 1px solid grey;
    cursor: default;
    font-family: "Lucida Sans Unicode";
    color: white;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 65%;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    text-align: center;
    transition-timing-function: linear;
    transition: 0.1s;
    background: rgb(230,141,38);
    background: linear-gradient(90deg, rgba(230,141,38,0.8463760504201681) 85%, rgba(230,141,38,0.8407738095238095) 100%, rgba(189,147,104,1) 100%);
    text-shadow: 1px 0 0 #000, 1px 0 0 #000, 0 1px 0 #000, 0 1px 0 #000, 1px 1px #000, 1px 1px 0 #000, 1px 1px 0 #000, 1px 1px 0 #000;

    &:hover {
        transition-timing-function: linear;
        transition: background 0.1s;
        background: rgba(30, 30, 30, 0.5);
    }
`;

const Passenger = props => {

    return (
            <PassengerBody>
                <PassengerHeader>{props.passenger.name} {props.passenger.lastname} #{props.passenger.flightnumber}</PassengerHeader>
                <hr/>
                <div style={{width: '100%',  height: '133px'}}>
                    {
                        Array.isArray( props.passenger.packages ) && props.passenger.packages.map( pack => {
                            return (
                                pack.id ? 
                                <Package key={pack.id}>{pack.type} - {pack.description}</Package>
                                :
                                <div style={{display: 'none'}} key={pack.id}></div>
                            )
                        })
                    }
                </div>
                <hr/>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: '50px'}}>
                    <Button onClick={() => props.deleteAllItems(props.passenger.id)}>Delete items</Button>
                    <Button onClick={() => props.openModalAddItem(props.passenger)}>Add item</Button>
                </div>
            </PassengerBody>

    );
}

export default Passenger;