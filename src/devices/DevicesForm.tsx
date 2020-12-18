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

    const [error, setError] = useState<String | null>(null);

    const onSubmit = (data: FormInput) => {

        let regEx = new RegExp("^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$");
        let valid = regEx.test(data.macAdd);
        if(!valid){
            setError("Error at Mac Address (example: 00:10:5A:44:12:B5)");
        }
        else{
            setError(null);
        }
        onCreateDevice(data.name, data.macAdd, selectedGateway);
};

 const [dropdownOpen, setDropdownOpen] = useState(false);

 const toggle = () => { setDropdownOpen(!dropdownOpen) }

const [gateways, setGateways] = useState([]);
const [selectedGateway, setSelectedGateway] = useState(null);

useEffect(() => {
    gatewaysService.Gateways().then(gateways => {setGateways(gateways)});
}, []);

const handleGateway = (name) => {
    setSelectedGateway(name);
    setDropdownOpen(false);
}

/*name is the devices name, id is mac address, required means it must be entered
before it lets you move on, the handleSubmit forces all buttons to be submit buttons*/
return <Card className="col-lg-6">
    <CardHeader>
        <h3 className="mb-0">DEVICE ENROLLEMENT</h3>
    </CardHeader>
    <CardBody>
        {error && <div style={{color:"red"}}>
            {error}
            </div>}
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label for="device-name">Device Name:</Label>
                <Controller
                   as={Input}
                    name="name"
                   control={control}
                   defaultValue=""
                   placeholder="Device Name"
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
                    defaultValue=""
                    placeholder="Mac Address"
                    rules={{ required: true }}
                />
                {errors.name &&
                    <div className="alert alert-danger" role="alert">
                        <strong>Mac Address</strong> is required
                            </div>}
                <Label for="device-conName">Gateway Connected to:</Label>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle>
                    {selectedGateway?selectedGateway:"Selected Gateway"}
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
    </CardBody>
</Card>;
}
