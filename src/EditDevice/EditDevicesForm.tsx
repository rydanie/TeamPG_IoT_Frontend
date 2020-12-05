import React, { useEffect, useState, ChangeEvent, dropDOwnOpen } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "redux/root-reducer";
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { Device } from "../devices/redux/devices-state";
import { actions as devicesActions } from "./redux/devices-actions";
import { actions as systemActions } from "../redux/system-actions";
import devicesService from "devices/services/devices-service";

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

const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => { setDropdownOpen(!dropdownOpen) }

    let [myDevices, setMyDevices] = useState([]);

    useEffect(() => {
        devicesService.devices().then(devices => {console.log(devices)});
        loadDevices();
    }, []);
}

    //this is the class for what data is using to store name
    interface FormInput {
        name: string;
        macAdd: string;
        conName: string;
    }

    //this is where the onCreateDevice is created and varaibles should be added here
    interface DevicesFormProps {
        loading: boolean;
        onInfoEntered: (name: string, macAdd: string, conName: string) => void;
    }

    //this is where onSubmit is created and gets the data
    export default function DevicesForm({ loading, onCreateDevice }: DevicesFormProps): JSX.Element {
        const { register, errors, control, handleSubmit } = useForm<FormInput>();
        const onSubmit = (data: FormInput) => {
            onCreateDevice(data.name, data.macAdd, data.conName);
    };

    /*name is the devices name, id is mac address, required means it must be entered
    before it lets you move on, the handleSubmit forces all buttons to be submit buttons*/
    return <Card className="col-lg-6">
        <CardHeader>
            <h3 className="mb-0">EDIT DEVICE INFO</h3>
        </CardHeader>
        <CardBody>
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
                </FormGroup>
            </Form>
        </CardBody>
    </Card>;
}
