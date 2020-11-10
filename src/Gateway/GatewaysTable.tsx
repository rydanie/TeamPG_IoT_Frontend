import React from "react";

import {
    Table,
} from "reactstrap";
import { Gateways } from "./redux/Gateways-state";

//import{gWays} from "./GatewaysForm"

interface GatewaysTableProps {
    Gateways?: Gateways[];
}

export function GatewaysTable({ Gateways }: GatewaysTableProps): JSX.Element {
    /*to get a new coloumn put it in between tr and it needs a .map */
    return <Table className="align-items-center" responsive hover striped>
        <thead className="thead-light">
            <tr>
                {["Name", "Mac Address", "IP Address", "Delete Device"].map((name) => (
                {["Name", "Mac Address", "IP Address", "Delete Gateway"].map((name) => (
                    <th scope="col">{name}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {Gateways?.map((Gateways) => {
                return (
                    <tr key={Gateway.id}>
                        <th scope="row">
                            {Gateway.name}
                        </th>
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
                      </th>
                    </tr>
                );
            })}
        </tbody>
    </Table>;
}