import "./App.css";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function App() {
  // const people = [
  //   'Creola Katherine Johnson: mathematician',
  //   'Mario José Molina-Pasquel Henríquez: chemist',
  //   'Mohammad Abdus Salam: physicist',
  //   'Percy Lavon Julian: chemist',
  //   'Subrahmanyan Chandrasekhar: astrophysicist'
  // ];

  // const people = [{
  //   id: 0,
  //   name: 'Creola Katherine Johnson',
  //   profession: 'mathematician',
  // }, {
  //   id: 1,
  //   name: 'Mario José Molina-Pasquel Henríquez',
  //   profession: 'chemist',
  // }, {
  //   id: 2,
  //   name: 'Mohammad Abdus Salam',
  //   profession: 'physicist',
  // }, {
  //   name: 'Percy Lavon Julian',
  //   profession: 'chemist',
  // }, {
  //   name: 'Subrahmanyan Chandrasekhar',
  //   profession: 'astrophysicist',
  // }];

  // const listItems = people.map(person => <li>{person}</li>);

  // const chemists = people.filter(person =>
  //   person.profession === 'chemist'
  // );

  // const listItems = chemists.map(person =>
  //   <li>
  //      <img
  //        alt={person.name}
  //      />
  //      <p>
  //        <b>{person.name}:</b>
  //        {' ' + person.profession + ' '}
  //        known for {person.accomplishment}
  //      </p>
  //   </li>
  // );
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person,index) => (
    <li key={index}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <>
      {
        people.length > 0 ? people.map((person,index) =>(
          <div key={person.id}>{person.name}</div>
        )) : null 
      } 
      <ul>{listItems}</ul>
    </>
  );
}

export default App;
