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
import { Device } from "./redux/devices-state";
import devicesService from "LocalView/services/devices-service";
import gatewaysService from "devices/services/Gateways-service";

//this is the class for what data is using to store name
interface FormInput {
    name: string;
    macAdd: string;
    conName: string;
}

//this is where the onCreateDevice is created and varaibles should be added here
interface DevicesFormProps {
    loading: boolean;
    onCreateDevice: (name: string, macAdd: string, conName: string) => void;
}

//this is where onSubmit is created and gets the data
export default function DevicesForm({ loading, onCreateDevice }: DevicesFormProps): JSX.Element {
    const { register, errors, control, handleSubmit } = useForm<FormInput>();
    const onSubmit = (data: FormInput) => {
        onCreateDevice(data.name, data.macAdd, selectedGateway);
};

var url = window.location.pathname;
var passedID = url.substring(url.lastIndexOf('/') + 1);

const [dropdownOpen, setDropdownOpen] = useState(false);

const toggle = () => { setDropdownOpen(!dropdownOpen) }

const [gateways, setGateways] = useState([]);
const [devices, setDevices] = useState([]);
const [selectedGateway, setSelectedGateway] = useState(null);
const [selectedDevice, setSelectedDevice] = useState(null);

useEffect(() => {
    devicesService.devices().then(devices => {setDevices(devices)});
    gatewaysService.Gateways().then(gateways => {setGateways(gateways)});
}, []);

const handleGateway = (name) => {
    setSelectedGateway(name);
    setDropdownOpen(false);
}

//this should search for the right device
/*function findDevice(){
    console.log("It ran");
    devices?.filter(device=>device.id===passedID).map((device));
}*/

/*name is the devices name, id is mac address, required means it must be entered
before it lets you move on, the handleSubmit forces all buttons to be submit buttons*/
return <Card className="col-lg-6">
    <CardHeader>
        <h3 className="mb-0">DEVICE ENROLLEMENT</h3>
    </CardHeader>
    <CardBody>
        {devices?.filter(device=>device.id==passedID).map((device) => {
            return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label for="device-name">Device Name:</Label>
                <Controller
                   as={Input}
                    name="name"
                   control={control}
                   defaultValue={device.name}
                   rules={{ required: true }}
                />
                {errors.name &&
                    <div className="alert alert-danger" role="alert">
                        <strong>Device Name Required</strong> is required
                            </div>}
                <Label for="device-macAdd">Mac Address:</Label>
                <Controller
                    as={Input}
                    name="macAdd"
                    control={control}
                    defaultValue={device.macAdd}
                    rules={{ required: true }}
                />
                {errors.name &&
                    <div className="alert alert-danger" role="alert">
                        <strong>Mac Address</strong> is required
                            </div>}
                <Label for="device-conName">Gateway Connected to:</Label>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {selectedGateway?selectedGateway:device.conName}
                </DropdownToggle>
                    <DropdownMenu>
                        {gateways?.map(gateways=> {
                            return <DropdownItem onClick={()=>handleGateway(gateways.name)}> {gateways.name}
                                </DropdownItem>
                        })}
                    </DropdownMenu>
                </Dropdown>
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
