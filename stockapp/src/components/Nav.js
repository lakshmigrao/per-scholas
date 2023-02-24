import { Link } from "react-router-dom";

function Nav(props){

        return(
            <div className="nav">
                <Link to="/stocks">
                    HOME
                </Link>
                <Link to="/about">
                    ABOUT 
                </Link>
            </div>
        )
}

export default Nav