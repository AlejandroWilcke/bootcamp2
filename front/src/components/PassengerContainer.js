import React from "react";
import styled from 'styled-components';
import Passenger from "./Passenger";
import Modal from "./PassengerAddModal";
import Button from './customized/Button.js';

const PassengerContainerBody = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export default class PassengerContainer extends React.Component {

    state = {
        passengers              : [],
        selectedPassenger       : {},
        showAddItemModal        : false,
        showAddPassengerModal   : false,
    }; 

    componentDidMount(){
        this.getAllPassengers();
    }

    getAllPassengers(){
        fetch("http://localhost:3000/passengers")
        .then( response => response.json() )
        .then( passengers => this.setState({ passengers }) );
    }

    deleteAllItems = id_passenger => {
        fetch(`http://localhost:3000/passengers/${id_passenger}`, { method: 'DELETE'})
        .then( response => this.getAllPassengers() );
    }

    openModalAddItem = passenger => {
        if( passenger.packages.length >= 3){
            alert('The passenger can have a maximum of 3 packages');
        }else{
            this.setState({ showAddItemModal: true, selectedPassenger: passenger})
        }
    }

    confirmAddItem = (ev) => {

        ev.preventDefault();

        const type                  = ev.target.type.value;
        const description           = ev.target.description.value;

        if(description && type){
            this.addItem(this.state.selectedPassenger.id, description, type)
        }else{
            alert("The package must have a description and a type");
        }

    }

    confirmAddPassenger = (ev) => {

        ev.preventDefault();

        const [ name, lastname ]    = ev.target.passengerName.value.split(" ");
        const flightNumber          = ev.target.flightNumber.value;

        if(name && lastname){
            if(flightNumber.length === 5){
                this.addPassenger(name, lastname, flightNumber);
            }else{
                alert("The flight number must be alphanumeric with 5 digits")
            }
        }else{
            alert("The passenger must have a name and a lastname");
        }

    }

    addPassenger(name, lastname, flightNumber){
        const data = { name, lastname, flightNumber }
        fetch("http://localhost:3000/passengers", {method: 'POST', body: JSON.stringify(data), headers:{'Content-Type': 'application/json'} })
        .then( response => {
            this.getAllPassengers();
            this.setState({showAddPassengerModal: false})
        })
    }

    addItem(id_passenger, desc, type){
        const data = { id_passenger, desc, type }
        fetch("http://localhost:3000/packages", {method: 'POST', body: JSON.stringify(data), headers:{'Content-Type': 'application/json'} })
        .then( response => {
            this.getAllPassengers();
            this.setState({showAddItemModal: false})
        })
    }

    closeModalAddItem       = () => this.setState({ showAddItemModal: false });

    closeModalAddPassenger  = () => this.setState({ showAddPassengerModal: false });
    
    render() {

        return (
            <>

                <Button onClick={() => this.setState({showAddPassengerModal: true})}>Add Passenger</Button>

                {
                    this.state.showAddPassengerModal ?
                        <Modal
                            firstLabel={"Passenger Name & Lastname: "}
                            firstInputName={"passengerName"}
                            secondLabel={"Flight Number: "}
                            secondInputName={"flightNumber"}
                            closeModal={this.closeModalAddPassenger}
                            confirmModal={this.confirmAddPassenger}
                        ></Modal>
                    :
                    null
                }

                <PassengerContainerBody>
                    {
                        this.state.passengers.map( passenger => {
                            return(
                                <Passenger 
                                    key={passenger.id}
                                    passenger={passenger}
                                    deleteAllItems={this.deleteAllItems}
                                    openModalAddItem={this.openModalAddItem}
                                />
                            )
                        })
                    }
                </PassengerContainerBody>

                {
                    this.state.showAddItemModal ? 
                        <Modal 
                            firstLabel={"Item description: "}
                            firstInputName={"description"}
                            secondLabel={"Item type: "}
                            secondInputName={"type"}
                            closeModal={this.closeModalAddItem}
                            confirmModal={this.confirmAddItem}
                        />
                    : 
                    null
                }

            </>
        );
    }
}