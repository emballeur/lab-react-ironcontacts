import React, { Component } from "react";
import allCelebs from "../contacts.json";

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactsDisplayed: allCelebs.slice(0, 5),
      allContacts: allCelebs.slice(5),
    };
  }

  showContacts = () => {
    return this.state.contactsDisplayed.map((eachContact) => {
      return (
        <div>
          <tr>
            <td>
              {" "}
              <img
                style={{ width: "200px" }}
                src={eachContact.pictureUrl}
              />{" "}
            </td>
            <td>{eachContact.name}</td>
            <td>{eachContact.popularity}</td>
          </tr>
        </div>
      );
    });
  };

  addRandom = () => {
    const firstFiveContacts = [...this.state.contactsDisplayed];
    const allContacts = [...this.state.allContacts];

    const randomContact = Math.floor(Math.random() * allContacts.length);

    firstFiveContacts.push(...allContacts.splice(randomContact, 1));

    this.setState({
      contactsDisplayed: firstFiveContacts,
      allContacts: allContacts,
    });
  };

  render() {
    return (
      <div>
        <h1 className="ListOfContacts">IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>

        <table>
          <tbody>
            <tr>
              <th>
                <b>Picture</b>
              </th>
              <th>
                <b>Name</b>
              </th>
              <th>
                <b>Popularity</b>
              </th>
            </tr>
            {this.showContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

/* const Contacts = (props) => (
  <tr>
    <td>
      <img
        src={props.pictureUrl}
        alt="Here should be a picture of a famous person"
      />
    </td>
    <td>{props.name}</td>
    <td>{props.popularity}</td>
  </tr>
); */

export default Contacts;
