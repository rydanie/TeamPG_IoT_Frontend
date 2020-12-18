import React, {useState} from "react";
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
    onCreateGateway: (name: string, macAdd: string, ipAdd: string) => void;
}

export default function GatewaysForm({ loading, onCreateGateway }: GatewaysFormProps): JSX.Element {
    const { register, errors, control, handleSubmit } = useForm<FormInput>();

    const [error, setError] = useState<String | null>(null);

    const [error2, setError2] = useState<String | null>(null);

    const onSubmit = (data: FormInput) => {

        let regEx = new RegExp("^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$");
        let valid = regEx.test(data.macAdd);
        if(!valid){
            setError("Error at Mac Address (example: 00:10:5A:44:12:B5)");
        }
        else{
            setError(null);
        }

        let regEx2 = new RegExp("^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$");
        let valid2 = regEx2.test(data.ipAdd);
        if(!valid2){
            setError2("Error at IP Address (example: 172.16.0.9)");
        }
        else{
            setError2(null);
        }
        if(valid && valid2){
            onCreateGateway(data.name, data.macAdd, data.ipAdd);
        }
    };

    /*name is the devices name, id is mac address, required means it must be entered
    before it lets you move on*/
    return <Card className="col-lg-6">
        <CardHeader>
            <h3 className="mb-0">GATEWAY ENROLLEMENT</h3>
        </CardHeader>
        <CardBody>
            {error && <div style={{color:"red"}}>
                {error}
                </div>}
            {error2 && <div style={{color:"red"}}>
                {error2}
                </div>}
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
