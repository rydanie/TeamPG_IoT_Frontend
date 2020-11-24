import { Table, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from "reactstrap";
import React, { ChangeEvent, useState, useEffect, dropDownOpen } from "react";
import "../App.css";

import {gWays} from "../Gateway/GatewaysForm";
import devicesService from "LocalView/services/devices-service";


export default function LocalView(){

        useEffect(() => {
        devicesService.devices().then(devices => {console.log(devices)});
        //loadDevices();
        }, []);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => { setDropdownOpen(!dropDownOpen)}

        return <div>

            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Dropdown
                </DropdownToggle>
                <DropdownMenu>
                 <DropdownItem header>Header</DropdownItem>
                 <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem text>Dropdown Item Text</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
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
             </Table>
    </div>
}