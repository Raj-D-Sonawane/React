import { useEffect, useState } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`)
            .then(res => res.json())
            .then(res => {
                setData(res.rates);
                console.log(res.rates);
            })
            .catch(err => console.error("Error:", err));
    }, [currency]);

    return data;
}

export default useCurrency;
