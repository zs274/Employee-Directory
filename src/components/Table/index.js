import React from "react";
import "./style.css";

function Table() {
    return (
        <div className ="table table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>[photo]</td>
                    <td>[name]</td>
                    <td>[phone]</td>
                    <td>[email]</td>
                </tr>
                <tr>
                <td>[photo]</td>
                    <td>[name]</td>
                    <td>[phone]</td>
                    <td>[email]</td>
                </tr>
                <tr>
                <td>[photo]</td>
                    <td>[name]</td>
                    <td>[phone]</td>
                    <td>[email]</td>
                </tr>
            </tbody>
        </div>
    )
}

export default Table;