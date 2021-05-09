import React, {useContext } from "react";
import DataBody from "../DataBody";
import "./style.css";
import DataAreaContext from "../../utils/DataAreaContext";


const DataTable = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className ="table table-bordered table-hover">
            <thead>
                <tr>
                    {context.developerState.headings.map(({ name, width }) => {
                        return (
                            <th 
                            className="col"
                            key={name}
                            style={{ width }}
                            onClick={() => {
                                context.headingSort(name.toLowerCase());
                            }}
                            >
                                {name}
                                <span className="pointer"></span>
                            </th>
                        );
                    })}
                </tr>
            </thead>

            <DataBody />
        </div>
    );
}

export default DataTable;