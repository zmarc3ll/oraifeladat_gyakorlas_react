import { Component } from "react";

export default class Bemutatkozas extends Component {
    render() {
        return <>
            <h2>Történet</h2>
            <p id="valasztas">A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.
            <br />
            2022-ben multinacionális céggé nőtte ki magát a kezdetben önkéntesekből álló szervezet.</p>
            <br />
            <h2>Jelenlegi tagjaink</h2>
            <br />
            <img src={'profile.svg'} alt="Fotó a főnökről" title="Fotó a főnökről" />    
            
           <p id="valasztas">
            * Erdős Ildikó<br />
            * Jónás Viola<br />
            * Kató Anna<br />
            * Pintér Koppány<br />
            * Sas Gizi<br />
            </p>
        </>
    }
}