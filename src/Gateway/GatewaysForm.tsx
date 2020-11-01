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
<<<<<<< HEAD:src/Gateway/GatewaysForm.tsx
import { Gateways } from "./redux/Gateways-state";
=======
import { Gateway } from "./redux/Gateways-state";
>>>>>>> 53aecffd151c6e871747f41b4c65ce6d99cee5b7:src/Gateway/DevicesForm.tsx

interface FormInput {
    name: string;
}

interface GatewaysFormProps {
    loading: boolean;
    onCreateGateway: (name: string) => void;
}

<<<<<<< HEAD:src/Gateway/GatewaysForm.tsx
export default function GatewaysForm({ loading, onCreateDevice }: GatewaysFormProps): JSX.Element {
=======
export default function GatewaysForm({ loading, onCreateGateway }: GatewaysFormProps): JSX.Element {
>>>>>>> 53aecffd151c6e871747f41b4c65ce6d99cee5b7:src/Gateway/DevicesForm.tsx
    const { register, errors, control, handleSubmit } = useForm<FormInput>();
    const onSubmit = (data: FormInput) => {
        onCreateGateway(data.name);
    };

    return <Card className="col-lg-6">
        <CardHeader>
            <h3 className="mb-0">GATEWAY ENROLLEMENT</h3>
        </CardHeader>
        <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label for="Gateway-name">Name</Label>
                    <Controller
                        as={Input}
                        name="name"
                        control={control}
                        defaultValue=""
                        placeholder="Name"
                        id="Gateway-name"
                        rules={{ required: true }}
                    />
                    {errors.name &&
                        <div className="alert alert-danger" role="alert">
                            <strong>Gateway name</strong> is required
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
