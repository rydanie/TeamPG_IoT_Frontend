import React from "react";

import {
    Table,
    Button
} from "reactstrap";
import { Device } from "./redux/devices-state";
import devicesService from "devices/services/devices-service";

interface DevicesTableProps {
    devices?: Device[];
}

export let devicesArray = new Array();

       var gWay = {id: "", macAdd:"", nameOf:"", conName:""};
       //gWay.macAdd = data.macAdd;
       //gWay.nameOf = data.name;
       //gWay.ipAdd = data.ipAdd;
       //devicesArray.push(gWay);

export function DevicesTable({ devices }: DevicesTableProps): JSX.Element {
    /*to get a new coloumn put it in between tr and it needs a .map */
    return <Table className="align-items-center" responsive hover striped>
        <thead className="thead-light">
            <tr>
                {["Name", "Mac Address", "Connected Gateway", "Delete Device", "Edit Device"].map((name) => (
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
                       <th scope="row">
                       <Button outline color="danger" onClick={ (e) =>
                           console.log(devicesService.delete(device.id),
                           window.location.reload()
                           ) }>Delete Device</Button>
                      </th>
                       <th scope="row">
                       <Button outline color="danger" onClick={ (e) =>
                          console.log(devicesService.editLink(device.id)

                          ) }>Edit Device</Button>
                      </th>
                    </tr>
                );
            })}
        </tbody>
    </Table>;
}