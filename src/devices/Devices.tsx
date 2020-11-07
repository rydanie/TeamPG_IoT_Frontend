import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import deviceService from "./services/devices-service";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "redux/root-reducer";

import {
    Container,
    Row,
    Col,
    Table,
} from "reactstrap";
import { actions as devicesActions } from "./redux/devices-actions";
import { actions as systemActions } from "../redux/system-actions";
import DevicesForm from "./DevicesForm";
import { DevicesTable } from "./DevicesTable";

const mapState = (state: RootState) => ({
    loading: state.devices.loading,
    devices: state.devices.devices,
});

const mapDispatch = {
    loadDevices: devicesActions.loadDevices,
    createDevice: devicesActions.createDevice,
    notify: systemActions.notify
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function Devices({
    loading,
    devices,
    createDevice,
    loadDevices,
    notify,
}: Props) {

    useEffect(() => {
        loadDevices();
    }, []);

    return (
        <>
            <Container className="mt--6 d-flex justify-content-center" >
                <Col >
                    <Row className="justify-content-md-center">
                        <DevicesForm onCreateDevice={createDevice} loading={loading} />
                    </Row>

                    <Row className="mt-5 justify-content-md-center">
                        <DevicesTable devices={devices} />
                    </Row>
                </Col>

            </Container>
        </>
    );
}

export default connector(Devices);

/*
export default function Hello(){

    const [name, setName] = useState("Test");
    const [updatedName, setUpdatedName] = useState("");

    useEffect(() =>{
        /*fetch("http://localhost:8080/devices/get-name")
            .then(response => response.json())
            .then(data =>{
                setName(data);
            });*//*
        const result = deviceService.getName();
        result.then(theName => {
            setName(theName);
        })

    },[]);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newValue = event.target.value;
        setUpdatedName(newValue);
    }

    const handleNameSubmit = () => {
        const result = deviceService.changeName(updatedName);
        result.then(newName => {
            setName(newName);
        })
    }

    return <div>
        Hello {name}<br/>
        <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" onChange={handleNameChange} value={updatedName} placeholder="Please enter your name" />
            </FormGroup>
            <Button onClick={handleNameSubmit} color="danger">Submit</Button>{' '}
        </Form>
    </div>;
}*/