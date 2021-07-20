import React from "react";

export default class App extends React.Component {
  componentDidMount() {
    const header = document.querySelector("header");

    header.insertAdjacentHTML("afterbegin", "<h1></h1>");

    const h1 = document.querySelector("h1");

    h1.textContent = "Hello world from JS";
    h1.style.textAlign = "center";
    h1.style.color = "blue";
  }

  render() {
    return (
      <React.Fragment>
        <header></header>

        <hr />

        <div className="box">
          <h2 className="box-title">Box title</h2>

          <p className="box-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            nesciunt deleniti, eius earum mollitia qui et natus officia sit
            quas, totam delectus nisi, excepturi beatae accusantium sapiente
            amet. Distinctio, modi?
          </p>
        </div>
      </React.Fragment>
    );
  }
}
