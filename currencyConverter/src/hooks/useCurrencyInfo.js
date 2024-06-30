import { useEffect, useState } from "react";

function useCurrenyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)//API Call
        .then((res)=>{res.json()}) //convert the string format into the JSON format
        .then((res)=>{setData(res[currency])})
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrenyInfo //custom hooks return the data and we will catch the data using this line