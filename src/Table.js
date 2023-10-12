import React from "react";
import './Table.css';

const Table = ({data, profit,error})=>{
   if(error){
        return<div className="error">Error: {error}</div>
    }
    if (data){
        return(
            <div className="table-container">
                <h1 className="profit-loss">Profit/Loss: {profit}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry, index)=>(
                            <tr key={index}>
                                <td>{entry.month}</td>
                                <td>{entry.year}</td>
                                <td>{entry.type === 1 ? 'Buy' :'Sell'}</td>
                                <td>{entry.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
} else{
    return <div>Loading.........</div>
}

};
export default Table;