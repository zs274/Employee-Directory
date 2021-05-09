import React, {useState, useEffect} from "react";
import DataTable from "../DataTable";
import Navbar from "../Navbar";
import API from "../../utils/API";
import "./style.css";
import DataAreaContext from "../../utils/DataAreaContext"

const DataArea = () => {
      const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
          { name: "Image", width: "10%", },
          { name: "Name", width: "10%", },
          { name: "Phone", width: "20%", },
          { name: "Email", width: "20%", }
        ]
      });
    
      const headingSort = heading => {
        if (developerState.order === "descend") {
            setDeveloperState({
                order:"ascend"
            })
        } else{
            setDeveloperState({
                order:"descend"
            })
        }
    
        const compareValue = (a, b) => {
          if (developerState.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
// LocaleCompare will compare the current item to the previous item and place it above or below it accordingly,
// meaning it will eventually put it into an order 
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
          } else {
        if (a[heading] === undefined){
            return 1;
        } else if (b[heading] === undefined){
            return -1;
        } else if (heading ==="name"){
            return b[heading].first.localeCompare(a[heading].first);
        } else {
return b[heading]-  a[heading];
        }
    }
    }
        const sortedUsers = developerState.filteredUsers.sort(compareValue);

        setDeveloperState({
          ...developerState,
          filteredUsers: sortedUsers
});

 };
   
      const headingSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
          let values = item.name.first.toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
    
        setDeveloperState({ 
        ...developerState, 
        filteredUsers: filteredList });
      };

      useEffect(() => {
        API.getUsers().then(results => {
          setDeveloperState({
            ...developerState,
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }, []);
    
      return (
        <DataAreaContext.Provider
          value={{ developerState, headingSearchChange, headingSort }}
        >
          <Navbar />
          <div className="data-area">
            {developerState.filteredUsers.length > 0 
    ? <DataTable />
     : <div></div>
     }
          </div>
        </DataAreaContext.Provider>
      );
    }
    
    export default DataArea;