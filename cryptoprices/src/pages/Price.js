import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Price(props){
    let key = process.env.REACT_APP_KEY

    // let params = useParams() // -> {symbol : ''}
    // console.log(params)
    // let symbol = params.symbol;
    let { symbol } = useParams()

    let navigate = useNavigate()// -> function

    let [coin, setCoin] = useState()

    let url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${key}`

    const getCoin = async() => { //async function getCoin() {}, function hoisting
        try{
            const response = await fetch(url)
            const data = await response.json()
            setCoin(data)
        }catch(error){
            console.error(error)
        }
        
    }
    //fetch('...')
    //  .then(res => res.json())
    //  .then(data => setCoin(data))
    //  .catch()
    console.log(coin);
    

    useEffect(() => {
        getCoin()
    }, [])
    

    function goBack(){
        navigate('/')//-1 to go back to previous page
    }

    
  
    const loaded = () => {
        return (
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h2>{coin.rate}</h2>
                <button onClick={goBack}>Back</button>
            </div>
        )
    }    

    const loading = () => {
        return(
            <div>Loading...</div>
        )
    }

    return coin ? loaded() : loading()
}

export default Price