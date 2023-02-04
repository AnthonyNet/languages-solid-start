"use client";
import {Bpi} from "./interface";

interface Table {
  myData: Bpi;
}

const Table = ({myData}:any) => {
console.log(myData);

  
  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th>Currency</th>
          <th>Rate</th>
          
        </tr>
      </thead>
      <tbody>
    
      </tbody>
      
    </table>
  );
};

export default Table;