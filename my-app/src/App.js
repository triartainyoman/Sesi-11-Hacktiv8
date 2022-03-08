import React from "react";
import "./App.css";
import Counter from "./Counter";
import Example from "./Example";

function Header() {
  return (
    <header className="header">
      <h1>My First React App</h1>
    </header>
  );
}

function Content() {
  return (
    <div className="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        dignissimos cupiditate, odit dolorum eos quidem modi animi ullam,
        impedit pariatur minima saepe similique maxime natus delectus incidunt
        facilis iusto ipsa!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        molestias qui animi deserunt deleniti voluptatibus placeat sunt ipsum
        eos earum repellendus distinctio, exercitationem quae, architecto aut
        numquam! Reprehenderit, sunt iste!
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>&copy; My Self - 2022</p>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
        <hr />
        <Counter />
        <hr />
        <Example />
      </div>
    );
  }
}

export default App;
