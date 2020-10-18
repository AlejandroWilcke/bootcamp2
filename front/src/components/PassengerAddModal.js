import React from 'react';
import styled from 'styled-components';
import Button from './customized/Button.js';

const Container = styled.div`
    // position: absolute;
    // left: 29%;
    // top: 20%;
    margin: 0 auto;
    width:800px;
    height:170px;
    border: 5px solid rgba(222, 141, 0, 1);
    border-radius: 20px;
    background: rgb(205,184,125);
`;

const Label = styled.label`
    color: white;
    text-align: center;
    cursor: default;
    font-family: "Palatino Linotype";
    height: 10%;
    font-size: 25px;
    line-height: 30px;
    margin: 0;
    text-shadow: 1px 0 0 #000, 1px 0 0 #000, 0 1px 0 #000, 0 1px 0 #000, 1px 1px #000, 1px 1px 0 #000, 1px 1px 0 #000, 1px 1px 0 #000;
`;

const Input = styled.input`
    width: 20%;
    height: 30px;
    border-radius: 6px;
    outline: none;
    margin-left: 10px;
    margin-right: 18px;
`;

const Select = styled.select`
    width: 20%;
    height: 35px;
    border-radius: 6px;
    outline: none;
    margin-left: 10px;
    margin-right: 18px;
`;

const AddItemModal = props => {
    return(
        <Container>
            <form onSubmit={(e) => props.confirmModal(e)}>

                {/* <div style={{display: 'flex', margin: '8% 0px 15px 10%'}}>
                    <Label>Passenger name: </Label>
                    <Input name="passengerName" maxLength="30"/>
                    <Label>Flight number: </Label>
                    <Input name="flightNumber" maxLength="5"/>
                </div> */}

                <div style={{display: 'flex', margin: '5% 0px 15px 6%'}}>
                    <Label>{props.firstLabel}</Label>
                    <Input name={props.firstInputName} maxLength="30"/>
                    <Label>{props.secondLabel}</Label>
                    {
                        props.secondInputName === "flightNumber" ?
                            <Input name={props.secondInputName} maxLength="5"/>
                        :
                            <Select name={props.secondInputName} type="select" maxLength="10" width="100px">
                                <option value="SMALL">Small</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="BIG">Big</option>
                            </Select>
                    }

                </div>
                
                <div style={{display: 'flex', margin: '2% 0px 35px 35%'}}>
                    <Button type="submit">Add</Button>
                    <Button onClick={() => props.closeModal()}>Cancel</Button>
                </div>

            </form>
        </Container>
    )
}

export default AddItemModal;