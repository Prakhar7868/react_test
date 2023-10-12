import React, { useState } from 'react';
import './App.css';
import DataProcessor from './DataProcessor';
import Table from './Table';

function App(){
const [data, setData] = useState(null);
const [profit,setProfit] = useState(null);
const[error,setError] = useState(null);

const onDataProcessed = (processedData, errormessage, calculatedProfit)=>{
    if(processedData){
      setData(processedData);
      setProfit(calculatedProfit);
    } else if(errormessage){
      setError(errormessage);
    }
};

return(
  <div>
    <h1>Profit and loss Statement</h1>
    <DataProcessor onDataProcessed={onDataProcessed} />
    <Table data={data} profit={profit} error={error}/>
  </div>
);

}
export default App;