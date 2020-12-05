import { Table, DropdownItem, DropdownMenu, DropdownToggle, Dropdown, Button } from "reactstrap";
import React, { ChangeEvent, useState, useEffect, dropDownOpen } from "react";
import "../App.css";
import { actions as devicesActions } from "devices/redux/devices-actions";
import { actions as systemActions } from "../redux/system-actions";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "redux/root-reducer";
import {gWays} from "../Gateway/GatewaysForm";
import devicesService from "devices/services/devices-service";
import gatewaysService from "LocalView/services/Gateways-service";

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
         {gWays?.map((gWay) => {
                       return (
                           <tr key={gWay.ipAdd}>
                               <th scope="row">
                                   {gWay.nameOf}
                               </th>
                              <th scope="row">
                                   {gWay.macAdd}
                              </th>
                              <th scope="row">
                                   {gWay.ipAdd}
                              </th>
                              <th scope="row">
                             </th>
                           </tr>
                       );
                   })}
                 </tbody>
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
                          <tbody>
                                     {gateways?.map((Gateways) => {
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
             </Table>
    </div>
}