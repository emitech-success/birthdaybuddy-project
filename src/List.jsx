/* eslint-disable react/prop-types */
 
// import Person from "./Person"

import Person from "./Person"


const List = ({people, deleteBirthday}) => {
  
  return (
    <section >
      {people.map((person) =>{
        const {id} = person
        return <Person key={id} {...person} deleteBirthday={deleteBirthday} />
      })}
      
    </section>
  )
}


export default List
