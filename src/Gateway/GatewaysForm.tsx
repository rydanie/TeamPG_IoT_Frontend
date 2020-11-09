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


export let gWays = new Array();

var gWay = {macAdd:"", nameOf:"", ipAdd:""};
var gWay2 = {macAdd:"", nameOf:"", ipAdd:""};

gWay.macAdd = "32:23:54:72:34";
gWay.nameOf = "Kevin's Van";
gWay.ipAdd = "123.45.322";

gWay2.macAdd = "32:23:54:72:34";
gWay2.nameOf = "Not Kevin's Van";
gWay2.ipAdd = "123.45.322";

gWays.push(gWay);
gWays.push(gWay2);



//export gWays;

interface GatewaysFormProps {
    loading: boolean;
    onCreateGateway: (name: string, macAdd: string, ipAdd: string) => void;
}

export default function GatewaysForm({ loading, onCreateGateway }: GatewaysFormProps): JSX.Element {
    const { register, errors, control, handleSubmit } = useForm<FormInput>();
    const onSubmit = (data: FormInput) => {
        onCreateGateway(data.name, data.macAdd, data.ipAdd);

    };

    const onGwaySubmit = (data: FormInput) => {
       var gWay = {macAdd:"", nameOf:"", ipAdd:""};
       gWay.macAdd = data.macAdd;
       gWay.nameOf = data.name;
       gWay.ipAdd = data.ipAdd;
       gWays.push(gWay);
       console.log("Handled Gateway")
       console.log(gWays)
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
                    <Label for="Gateway-name">Gateway Name</Label>
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
                            <strong>Gateway name</strong> is required
                                </div>}
                    <Label for="Mac-Address">Mac Address</Label>
                    <Controller
                            as={Input}
                    name="macAdd"
                    control={control}
                    defaultValue=""
                    placeholder="Mac Address"
                    id="MAC-Address"
                    rules={{ required: true }}
                    />
                    {errors.name &&
                    <div className="alert alert-danger" role="alert">
                        <strong>Mac Address</strong> is required
                    </div>}
                    <Label for="Gateway-name">IP Address</Label>
                    <Controller
                            as={Input}
                    name="ipAdd"
                    control={control}
                    defaultValue=""
                    placeholder="IP Address"
                    id="Gateway-name"
                    rules={{ required: true }}
                    />
                    {errors.name &&
                    <div className="alert alert-danger" role="alert">
                        <strong>IP Address</strong> is required
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
