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
    return this.state.contactsDisplayed.map((eachContact, index) => {
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
            <td>
              <button
                onClick={() => {
                  this.deleteContact(index);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        </div>
      );
    });
  };

  deleteContact = (theOneToDelete) => {
    const clonedList = [...this.state.contactsDisplayed];

    clonedList.splice(theOneToDelete, 1);

    this.setState({ contactsDisplayed: clonedList });
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

  //ideally I merge the two I might do when there is time

  sortByName = () => {
    const clonedList = [...this.state.contactsDisplayed];

    clonedList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (b.name > a.name) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      contactsDisplayed: clonedList,
    });
  };

  sortByPopularity = () => {
    const clonedList = [...this.state.contactsDisplayed];

    clonedList.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (b.popularity > a.popularity) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({
      contactsDisplayed: clonedList,
    });
  };

  render() {
    return (
      <div>
        <h1 className="ListOfContacts">IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>

        <table>
          <tr>
            <thead>
              <th>
                <b>Picture</b>
              </th>
              <th>
                <b>Name</b>
              </th>
              <th>
                <b>Popularity</b>
              </th>
              <th>
                <b>Action</b>
              </th>
            </thead>
          </tr>
          <tr>
            <tbody>
              <th>{this.showContacts()}</th>
            </tbody>
          </tr>
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
