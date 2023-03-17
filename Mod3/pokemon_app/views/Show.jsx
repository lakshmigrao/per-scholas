import React from "react";

function Show(props){

    const myStyle = {
        color: 'blue',
        backgroundColor: 'pink',
        };
        
    return(
        <>
        <h1 style={myStyle}><strong>Gotta Catch 'Em All!</strong></h1>
        <h2>{props.singlePokemon.name}</h2>
        <img src={`${props.singlePokemon.img}`+'.jpg'}/>
        <a href="/pokemon">Back</a>
        {/* <ul>
        {props.pokemon.map((item,index)=>
            <li key={index}>
                <a href={`/pokemon/${index}`}>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</a>
            </li>
        )
        }</ul> */}
        <form action={`/pokemon/${props.singlePokemon._id}?_method=DELETE`} method="POST"> 
            {/* Only GET and POST methods can be used inside HTML, we are overriding the default method here , run npm i method-override on terminal*/}
            <button>Delete</button> < br/>
            </form>
        </>
    )
}


export default Show;