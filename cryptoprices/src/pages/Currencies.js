import { Link } from "react-router-dom";

function Currencies(){
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
      ];
    return (
        <div>
            Currencies Page
            {currencies.map(coin => 
                <Link key={coin.symbol} to={`/price/${coin.symbol}`}>
                    <h2>{coin.name}</h2>
                </Link>)}
        </div>
    )
    ;
}

export default Currencies