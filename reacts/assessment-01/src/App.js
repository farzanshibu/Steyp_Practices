import ListCard from "./components/ListCard";
import profile1 from "./assets/images/Ellipse -1.png";
import profile2 from "./assets/images/Ellipse -2.png";
import profile3 from "./assets/images/Ellipse -3.png";
import profile4 from "./assets/images/Ellipse -4.png";
import profile5 from "./assets/images/Ellipse 1.png";
import "./App.css";

let DETAILS = [
  {
    id: 1,
    name: "Griffin Wooldridge",
    age: "20 yearzs",
    image: profile1,
  },
  {
    id: 2,
    name: "Griffin Wooldridge",
    age: "20 yearzs",
    image: profile2,
  },
  {
    id: 3,
    name: "Griffin Wooldridge",
    age: "20 yearzs",
    image: profile3,
  },
  {
    id: 4,
    name: "Griffin Wooldridge",
    age: "20 yearzs",
    image: profile4,
  },
  {
    id: 5,
    name: "Griffin Wooldridge",
    age: "20 yearzs",
    image: profile5,
  },
];

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>5 birthdays today</h1>
        <ul>
          {DETAILS.map((person) => (
            <ListCard
              key={person.id}
              image={person.image}
              name={person.name}
              age={person.age}
            />
          ))}
          <button className="pinkButton">Clear All</button>
        </ul>
      </div>
    </div>
  );
}

export default App;
