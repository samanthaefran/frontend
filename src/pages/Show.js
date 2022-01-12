function Show(props) {
  const id = props.match.params.id; // it is params.id because in our route path we put :id // match gives us acess to url params
  const person = props.people.find(p => p._id === id);

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      {
        person.image &&
        <img src={person.image} alt={person.name}/> // if person.image is undefined, then it will not render an image. if person.image is a url string it will render an image
      }
    </div>
  );
}

export default Show; 