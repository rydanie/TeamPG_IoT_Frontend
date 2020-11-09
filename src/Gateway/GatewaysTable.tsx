import React from "react";

import {
    Table,
} from "reactstrap";
import { Gateways } from "./redux/Gateways-state";

interface GatewaysTableProps {
    Gateways?: Gateways[];
}

export function GatewaysTable({ Gateways }: GatewaysTableProps): JSX.Element {
    return <Table className="align-items-center" responsive hover striped>
        <thead className="thead-light">
            <tr>
                {["Name"].map((name) => (
                    <th scope="col">{name}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {Gateways?.map((Gateway) => {
                return (
                    <tr key={Gateway.macId}>
                        <th scope="row">
                            {Gateway.name}
                        </th>
                    </tr>
                );
            })}
        </tbody>
    </Table>;
}