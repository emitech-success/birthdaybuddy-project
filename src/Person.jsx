/* eslint-disable react/prop-types */


const Person = ({id,name, image, age, deleteBirthday}) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      <button type="button" className="btn alert-danger"
             onClick={() => deleteBirthday(id)}
           >❌</button>
    </article>
  )
}
export default Person