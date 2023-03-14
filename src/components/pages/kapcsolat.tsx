import { Component } from "react";

export default class Rolunk extends Component {

    handleSubmit(event: { preventDefault: () => void; }) {
        alert('Sikeres beküldés, köszönjük! ');
        event.preventDefault();
      }
    render() {
        return <>
            <form id="form" onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" placeholder="example@gmail.com" required/><br />
                <label htmlFor="message">Üzenet: </label><br />
                <textarea name="message" form="form" id="message" placeholder="Irja ide az üzenetet..." required></textarea><br />
                <input type="submit" value="Elküld" />
            </form>
           
        </>
    }
}