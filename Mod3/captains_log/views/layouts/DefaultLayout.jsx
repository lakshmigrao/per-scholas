import React from "react";


function DefaultLayout(props) {

    return (
        <html>
            <head>
                <link rel="stylesheet" href="/css/styles.css" />
            </head>
            <body>
                <nav>
                <a href="/"><h4>Home</h4></a>
                    <a href="/logs"><h4>Logs</h4></a>
                    <a href="/foodlogs"><h4>FoodLogs</h4></a>

                </nav>
                <div>
                    {/* <h1>DEFAULT LAYOUT!</h1> */}
                    <div>
                        {props.children}
                    </div>
                </div>
            </body>
        </html>
    )
}


export default DefaultLayout