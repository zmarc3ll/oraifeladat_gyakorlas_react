import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return <>
            <ul>
                <li><Link to={'/'}>Főoldal</Link></li>
                <li><Link to={'/bemutatkozas'}>Bemutatkozás</Link></li>
                <li><Link to={'/kapcsolat'}>Kapcsolat</Link></li>
            </ul>
        </>
    }
}