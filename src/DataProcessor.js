import React, {useState, useEffect } from 'react';

const DataProcessor = ({onDataProcessed})=>{
    useEffect(()=>{
        fetch('/data.json') // Fetch Data from Json
        .then((response)=> response.json())
        .then ((data)=>{
            console.log(data)
            //sort data by year and month
            data.sort((a,b)=>{
                const aDate = `${a.year}${a.month}`;
                const bDate = `${b.year}${b.month}`;
                return aDate.localeCompare(bDate)
            });
            // validate data
            if (data.some((entry)=> !isValidMonth(entry.month) || !isValidYear(entry.year))){
                onDataProcessed(null, "invalid month or year in the data");
            return;
            }
            //Calculate profit/loss
            let profit = 0;
            data.forEach((entry)=>{
                if (entry.type===1){
                    profit -= entry.amount;
                }else if (entry.type===2){
                    profit += entry.amount;
                }
            })
            onDataProcessed(data,null,profit)
        })
        .catch((error)=>{
            onDataProcessed(null,error.message)
        })
    }, [])
    // validation functions
    const isValidMonth = (month)=> /^[A-Za-z]{3}$/.test(month);
    const isValidYear = (year) => /^[0-9]{2}$/.test(year);

    return null;
}
export default DataProcessor;