import { Table, DropdownItem, DropdownMenu, DropdownToggle, Dropdown, Button } from "reactstrap";
import React, { ChangeEvent, useState, useEffect, dropDownOpen } from "react";
import "../App.css";
import { actions as devicesActions } from "devices/redux/devices-actions";
import { actions as systemActions } from "../redux/system-actions";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "redux/root-reducer";
import {gWays} from "../Gateway/GatewaysForm";
import devicesService from "GlobalView/services/devices-service";
import gatewaysService from "GlobalView/services/Gateways-service";

export default function LocalView(){

        const [devices, setDevices] = useState([]);
        const [gateways, setGateways] = useState([]);
        const [selectedGateway, setSelectedGateway] = useState(null);

        useEffect(() => {
            devicesService.devices().then(devices => {setDevices(devices)});
            gatewaysService.Gateways().then(gateways => {setGateways(gateways)});
            //loadDevices();
        }, []);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => { setDropdownOpen(!dropdownOpen)}

    const handleGateway = (name) => {
        setSelectedGateway(name);
        setDropdownOpen(false);
    }

        return <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {selectedGateway?selectedGateway:"Selected Gateway"}
                </DropdownToggle>
                <DropdownMenu>
                    {gateways?.map(gateways=> {
                        return <DropdownItem onClick={()=>handleGateway(gateways.name)}> {gateways.name}
                        </DropdownItem>
                    })}
                </DropdownMenu>
            </Dropdown>
            <Table className="align-items-center" responsive hover striped>
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Gateway</th>
                        <th scope="col">Mac Address</th>
                        <th scope="col">IP Address</th>
                    </tr>
                </thead>
            <tbody>
                {devices?.filter(device=>device.conName===selectedGateway).map((device) => {
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
        </Table>
    </div>
}