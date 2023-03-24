import React from "react";

function DefaultLayout(props) {

    return (
        <html>
            <head>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav>
                    <a href="/flights/new">ADD FLIGHT</a>
                    <a href="/flights">ALL FLIGHTS</a>
                    <form action="/flights/clear?_method=DELETE" method="POST">
                    <button >CLEAR</button>
                </form>
                </nav>
                <div>
                    {/* <h1>DEFAULT LAYOUT</h1> */}
                    <div>{props.children}</div>
                </div>
            </body>
        </html>
    )
}

export default DefaultLayout