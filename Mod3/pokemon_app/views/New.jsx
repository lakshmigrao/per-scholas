import React from 'react'

function New(props) {
    //can't use hooks or state
    //cant use event listeners in the same way
    const myStyle = {
        color: 'blue',
        backgroundColor: 'pink',
    };
  
    return (
        <div>
            <h1 style={myStyle}>New Pokemon</h1>
            <div style={{backgroundColor:"aquamarine",border: "1px solid blue",width: "50%"}}>
            <form action="/pokemon" method="POST">
                
                <label htmlFor="nme">Name : </label> <br />
                <input type="text" id="nme" name="name" /><br /><br /><br />

                <label htmlFor="image">Image : </label><br />
                <input type="text" id="image" name="img" /><br /><br /><br />

                <button>Submit</button>
                <br /><br /> <br />
                <a href="/pokemon">BACK</a>
                {/* input type button is same idea tooo  */}
            </form>

            {/* <form action="/pokemon" method='POST'>
                <label>Name:  </label>
                <input type="text" name="name"></input><br /><br />
                <label>Image:  </label>
                <input type="text" name="img"></input><br /><br />
                <button>Submit</button>
            </form> */ }
            </div>
      </div>
    )
}

export default New