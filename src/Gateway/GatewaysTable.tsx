import React from "react";

import {
    Table,
} from "reactstrap";
import { Gateways } from "./redux/Gateways-state";

interface GatewaysTableProps {
    Gateways?: Gateways[];
}

let gWays = new Array(10);

var gWay = {macAdd:"", nameOf:"", ipAdd:""};

gWay.macAdd = "32:23:54:72:34";
gWay.nameOf = "Kevin's Van";
gWay.ipAdd = "123.45.322";

gWays[0] = gWay;

export function GatewaysTable({ Gateways }: GatewaysTableProps): JSX.Element {
    return <Table className="align-items-center" responsive hover striped>

    <thead className="thead-light">
            <tr>
                <th scope="col">Gateway</th>
                <th scope="col">Mac Address</th>
                <th scope="col">IP Address</th>

            </tr>
        </thead>
        <tbody>
                    <tr>
                        <th scope="col">{gWays[0].nameOf}</th>
                        <th scope="col">{gWays[0].macAdd}</th>
                        <th scope="row">{gWays[0].ipAdd}</th>
                    </tr>
        </tbody>
    </Table>
}