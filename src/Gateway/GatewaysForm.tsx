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
import { Gateways } from "./redux/Gateways-state";


interface FormInput {
    name: string;
    macAdd: string;
    ipAdd: string;
}

interface GatewaysFormProps {
    loading: boolean;
    onCreateGateway: (name: string/*, macAdd: string, ipAdd: string*/) => void;
}

export default function GatewaysForm({ loading, onCreateGateway }: GatewaysFormProps): JSX.Element {
    const { register, errors, control, handleSubmit } = useForm<FormInput>();
    const onSubmit = (data: FormInput) => {
        onCreateGateway(data.name/*, data.macAdd, data.ipAdd*/);
    };

    /*name is the devices name, id is mac address, required means it must be entered
    before it lets you move on*/
    return <Card className="col-lg-6">
        <CardHeader>
            <h3 className="mb-0">GATEWAY ENROLLEMENT</h3>
        </CardHeader>
        <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label for="Gateway-name">Gateway Name:</Label>
                    <Controller
                        as={Input}
                        name="name"
                        control={control}
                        defaultValue=""
                        placeholder="Gateway Name"
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
                        defaultValue=""
                        placeholder="Gateway Mac Address"
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
                       defaultValue=""
                       placeholder="Gateway IP Address"
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
        </CardBody>
    </Card>;
}
