import React from "react";
import { Table } from "reactstrap";
import Dropdown from "../bootstrap/js/bootstrap.js";

import "../App.css";

import {gWays} from "../Gateway/GatewaysForm";



export default function LocalView(){

        return <div>

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