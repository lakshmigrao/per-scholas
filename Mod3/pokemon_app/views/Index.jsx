import React from "react";

function Index(props) {

    const myStyle = {
        color: 'blue',
        backgroundColor: 'pink',
    };

    const uTagStyle = {
        backgroundColor: "aquamarine",
        border: "1px solid blue",
        width: "50%",
        margin: "0 auto"

    }
    const containerStyle = {
        display: "block"
    }
    return (
        <div className="container" style={containerStyle}>
            <div className="containerLeft" style={{ display: "flex", justifyContent: "space-evenly" }}>
                <a href={`/`}>HOME</a>
                <br /><br /><br />
                <a href={`/pokemon/new`}>ADD</a>
                <br /><br /><br />
                <form action="/pokemon/seed" method="POST">
                    <button>SEED</button>
                </form>
                <br /><br /><br />
                <form action="/pokemon/clear?_method=DELETE" method="POST">
                    <button>CLEAR</button>

                </form>
            </div>
            <h1 style={myStyle}><strong>See All The Pokemon!</strong></h1>
            <div className="containerRight">
                <ul style={uTagStyle}>
                    {props.pokemon.map((item, index) =>
                        <h4><li key={index}>
                            <a href={`/pokemon/${item._id}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>

                        </li></h4>
                    )
                    }</ul>
            </div>

        </div>
        // <div style={myStyle}>
        //     <h1 style={{ textAlign: 'center' }}>See All The Pokemon!</h1>
        //     <ul>
        //         {props.pokemon.map(item =>
        //             <a href={`/pokemon/${item._id}`} >
        //                 <li>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</li>
        //             </a>
        //         )}
        //     </ul>
        //     <a href="/pokemon/new">Add Pokemon</a>
        //     <br/><br/>
        // </div>
    )
}


export default Index;