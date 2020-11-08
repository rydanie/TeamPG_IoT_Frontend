import React from "react";
import { Table } from "reactstrap";
import Dropdown from "../bootstrap/js/bootstrap.js"

import "../App.css";

export default function Help(){

        return <div>
    <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Action
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item">Action</a>
            <a class="dropdown-item">Another action</a>
            <a class="dropdown-item">Something else here</a>
        </div>
    </div>
         <Table>
             <thread align="center">
                 <tr>
                     <h2 class="faq">Frequently Asked Questions</h2>
                 </tr>
             </thread>
             <tbody>
                 <tr>

                 </tr>
                 <tr class="bg_1">
                     <td><div class="question"><b>Q.</b> How do I add a device?</div>
                         <br></br><div class="answer"><b>A.</b> To add a device, you need to ...</div></td>
                 </tr>
                 <tr class="bg_2">
                     <td><div class="question"><b>Q.</b> How do I add a gateway?</div>
                         <br></br><div class="answer"><b>A.</b> To add a gateway, you need to ...</div></td>
                 </tr>
                 <tr class="bg_1">
                     <td><div class="question"><b>Q.</b> How do I ...</div>
                         <br></br><div class="answer"><b>A.</b> To ..., you need to ...</div></td>
                 </tr>
                 <tr class="bg_2">
                     <td><div class="question"><b>Q.</b> How do I ...</div>
                         <br></br><div class="answer"><b>A.</b> To ..., you need to ...</div></td>
                 </tr>
             </tbody>
         </Table>
    </div>
}