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

    //this is the class for what data is using to store name
    interface FormInput {
        name: string;
        macAdd: string;
        ipAdd: string;
    }

    //this is where the onCreateGateway is created and varaibles should be added here
    interface GatewaysFormProps {
        loading: boolean;
        onCreateGateway: (name: string, macAdd: string, ipAdd: string) => void;
    }

//this is where onSubmit is created and gets the data
    export default function GatewaysForm({ loading, onCreateGateway }: GatewaysFormProps): JSX.Element {
        const { register, errors, control, handleSubmit } = useForm<FormInput>();
        const onSubmit = (data: FormInput) => {
            onCreateGateway(data.name, data.macAdd, data.ipAdd);
        };

    /*name is the gateway name, id is mac address, required means it must be entered
    before it lets you move on*/
    return <Card className="col-lg-6">
        <CardHeader>
            <h3 className="mb-0">GATEWAY ENROLLEMENT</h3>
        </CardHeader>
        <CardBody>
           <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label for="gateway-name">Gateway Name:</Label>
                   <Controller
                      as={Input}
                       name="name"
                      control={control}
                      defaultValue=""
                      placeholder="Gateway Name"
                      rules={{ required: true }}
                   />
                   {errors.name &&
                       <div className="alert alert-danger" role="alert">
                           <strong>Gateway Name</strong> is required
                               </div>}
                   <Label for="gateway-macAdd">Mac Address:</Label>
                   <Controller
                       as={Input}
                       name="macAdd"
                       control={control}
                       defaultValue=""
                       placeholder="Mac Address"
                       rules={{ required: false }}
                   />
                   {errors.name &&
                       <div className="alert alert-danger" role="alert">
                           <strong>Mac Address</strong> is required
                               </div>}
                   <Label for="gateway-ipAdd">Gateway IP Address:</Label>
                   <Controller
                       as={Input}
                       name="ipAdd"
                       control={control}
                       defaultValue=""
                       placeholder="IP Address"
                       id="gateway-name"
                       rules={{ required: false }}
                   />
                   {errors.name &&
                       <div className="alert alert-danger" role="alert">
                           <strong>Gateway Name</strong> is required
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
