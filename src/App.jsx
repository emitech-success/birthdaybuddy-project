import { useState } from "react";
import data from "./data";
import List from "./List";

function App () {
  const [people, setPeople] = useState(data)
  console.log(people)

  const updateBirthdayNo =()=>{
    setPeople([])
  }

  const deleteBirthday = (id) =>{
    const newItems = people.filter((item) => item.id !== id)
    setPeople(newItems)
  }

  return <main >
    <section className="container">
    <h3 className="title">{people.length} birthdays today</h3>
    <List  people={people} deleteBirthday= {deleteBirthday} />
    <button className="btn  btn-block" onClick={() => updateBirthdayNo()}>
      Clear All
    </button>
    </section>
    
  </main>;
};
export default App;
