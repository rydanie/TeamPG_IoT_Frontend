import React from "react";

import {
    Table,
} from "reactstrap";
import { Device } from "./redux/devices-state";

interface DevicesTableProps {
    devices?: Device[];
}

export function DevicesTable({ devices }: DevicesTableProps): JSX.Element {
    /*to get a new coloumn put it in between tr and it needs a .map */
    return <Table className="align-items-center" responsive hover striped>
        <thead className="thead-light">
            <tr>
                {["Name", "Mac Address", "Connected Gateway"].map((name) => (
                    <th scope="col">{name}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {devices?.map((device) => {
                return (
                    <tr key={device.id}>
                        <th scope="row">
                            {device.name}
                        </th>
                       <th scope="row">
                            {device.macAdd}
                       </th>
                       <th scope="row">
                            {device.conName}
                       </th>
                    </tr>
                );
            })}
        </tbody>
    </Table>;
}