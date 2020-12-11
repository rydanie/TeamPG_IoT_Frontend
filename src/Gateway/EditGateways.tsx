import React, { ChangeEvent, useState, useEffect, dropDownOpen }  from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Dropdown,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { Gateways } from "./redux/devices-state";
import devicesService from "Gateway/services/devices-service";
import gatewaysService from "Gateway/services/Gateways-service";

//this is the class for what data is using to store name
interface FormInput {
    name: string;
    macAdd: string;
    ipAdd: string;
}

//this is where the onCreateDevice is created and varaibles should be added here
interface GatewaysFormProps {
    loading: boolean;
}

//this is where onSubmit is created and gets the data
export default function GatewaysForm({ loading,  }: GatewaysFormProps): JSX.Element {
    const { register, errors, control, handleSubmit } = useForm<FormInput>();
    const onSubmit = (data: FormInput) => {
        gatewaysService.edit(passedID, data.name, data.macAdd, data.ipAdd);
        window.location.replace("http://localhost:3000/gateways");
};

var url = window.location.pathname;
var passedID = url.substring(url.lastIndexOf('/') + 1);

const [gateways, setGateways] = useState([]);
const [devices, setDevices] = useState([]);
const [selectedGateway, setSelectedGateway] = useState(null);
const [selectedDevice, setSelectedDevice] = useState(null);

useEffect(() => {
    devicesService.devices().then(devices => {setDevices(devices)});
    gatewaysService.Gateways().then(gateways => {setGateways(gateways)});
}, []);

/*name is the devices name, id is mac address, required means it must be entered
    before it lets you move on*/
    return <Card className="col-lg-6">
        <CardHeader>
            <h3 className="mb-0">GATEWAY ENROLLEMENT</h3>
        </CardHeader>
        <CardBody>
        {gateways?.filter(gateways=>gateways.id==passedID).map((gateways) => {
            return(
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label for="Gateway-name">Gateway Name:</Label>
                    <Controller
                        as={Input}
                        name="name"
                        control={control}
                        defaultValue={gateways.name}
                        id="Gateway-name"
                        rules={{ required: true }}
                    />
                    {errors.name &&
                        <div className="alert alert-danger" role="alert">
                            <strong>Gateway Name Required</strong> is required
                                </div>}
                    <Label for="Gateway-macAdd">Gateway Mac Address:</Label>
                     <Controller
                        as={Input}
                        name="macAdd"
                        control={control}
                        defaultValue={gateways.macAdd}
                        id="Gateway-macAdd"
                        rules={{ required: true }}
                    />
                    {errors.name &&
                        <div className="alert alert-danger" role="alert">
                            <strong>Gateway Mac Address Required</strong> is required
                                </div>}
                    <Label for="Gateway-ipAdd">Gateway IP Address:</Label>
                    <Controller
                       as={Input}
                       name="ipAdd"
                       control={control}
                       defaultValue= {gateways.ipAdd}
                       id="Gateway-ipAdd"
                       rules={{ required: true }}
                    />
                    {errors.name &&
                        <div className="alert alert-danger" role="alert">
                            <strong>Gateway IP Address Required</strong> is required
                                </div>}
                </FormGroup>
                <Button
                    type="submit"
                    color="success"
                    disabled={loading}
                >
                    Submit
                </Button>
            </Form>
             );
                            })}
        </CardBody>
    </Card>;
}
