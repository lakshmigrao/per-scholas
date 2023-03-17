import React from "react";

function Welcome(){
    const myStyle = {
        color: 'blue',
        backgroundColor: 'pink',
    };
    return(
        <>
            <h1 style={myStyle}>Welcome to the Pokemon App!</h1>
            <a href="/pokemon"><h1>Lets goooooooooooooo</h1></a>
        </>
    )

}

export default Welcome