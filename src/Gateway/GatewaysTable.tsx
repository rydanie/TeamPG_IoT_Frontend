import React from "react";

import {
    Table,
    Button
} from "reactstrap";
import { Gateways } from "./redux/Gateways-state";
import GatewaysService from "Gateway/services/Gateways-service";

//import{gWays} from "./GatewaysForm"

interface GatewaysTableProps {
    Gateways?: Gateways[];
}

export function GatewaysTable({ Gateways }: GatewaysTableProps): JSX.Element {
    /*to get a new coloumn put it in between tr and it needs a .map */
    return <Table className="align-items-center" responsive hover striped>
        <thead className="thead-light">
            <tr>
                {["Name", "Mac Address", "IP Address", "Delete Gateway",
                "Edit Gateway"].map((name) => (
                    <th scope="col">{name}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {Gateways?.map((Gateways) => {
                return (
                    <tr key={Gateways.id}>
                        <th scope="row">
                            {Gateways.name}
                        </th>
                       <th scope="row">
                            {Gateways.macAdd}
                       </th>
                       <th scope="row">
                            {Gateways.ipAdd}
                       </th>
                       <th scope="row">
                       <Button outline color="danger" onClick={ (e) =>
                        console.log(GatewaysService.delete(Gateways.id),
                        window.location.reload()
                        ) }>Delete Gateway</Button>
                      </th>
                       <th scope="row">
                         <Button

                           >Edit Gateway</Button>
                        </th>
                    </tr>
                );
            })}
        </tbody>
    </Table>;
}