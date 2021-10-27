import './App.css';

import PersonCard from './Components/PersonCard';

var peoples = [
  {"firstName":"Ms.", "lastName":"Piggy", "age":47, "hairColor":"Blonde"},
  {"firstName":"Kermit The", "lastName":"Frog", "age":55, "hairColor":"Green"},
  {"firstName":"Fozzy", "lastName":"Bear", "age":42, "hairColor":"Brown"},
  {"firstName":"Animal", "lastName":"Anima", "age":73, "hairColor":"Pink"},
]

function App() {
  return (
    <div className="App">
      {peoples.map (person => {
        return <PersonCard firstName = {person.firstName} lastName = {person.lastName} age = {person.age} hairColor = {person.hairColor} />
      })}
    </div>
  );
}

export default App;
