import React from "react";
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
import { Device } from "./redux/devices-state";

interface FormInput {
    name: string;
}

interface DevicesFormProps {
    loading: boolean;
    onCreateDevice: (name: string) => void;
}

export default function DevicesForm({ loading, onCreateDevice }: DevicesFormProps): JSX.Element {
    const { register, errors, control, handleSubmit } = useForm<FormInput>();
    const onSubmit = (data: FormInput) => {
        onCreateDevice(data.name);
    };

    /*name is the devices name, id is mac address, required means it must be entered
    before it lets you move on*/
    return <Card className="col-lg-6">
        <CardHeader>
            <h3 className="mb-0">DEVICE ENROLLEMENT</h3>
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
                            <strong>Device name</strong> is required
                                </div>}
                    <Label for="device-name">Mac Address:</Label>
                    <Controller
                        as={Input}
                        name="name"
                        control={control}
                        defaultValue=""
                        placeholder="Mac Address"
                        id="device-name"
                        rules={{ required: false }}
                    />
                    {errors.name &&
                        <div className="alert alert-danger" role="alert">
                            <strong>Device name</strong> is required
                                </div>}
                    <Label for="device-name">Gateway Connected ti:</Label>
                        <Controller
                            as={Input}
                            name="name"
                            control={control}
                            defaultValue=""
                            placeholder="Gateway Name"
                            id="device-name"
                            rules={{ required: false }}
                    />
                    {errors.name &&
                        <div className="alert alert-danger" role="alert">
                            <strong>Device name</strong> is required
                                </div>}
                </FormGroup>
                <Button
                    type="submit"
                    color="success"
                    disabled={loading}
                >
                    Submit
                </Button>
                <Button
                    type="submit"
                    color="success"
                    disabled={loading}
                >
                    Delete
                </Button>
            </Form>
        </CardBody>
    </Card>;
}
