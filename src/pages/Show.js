import { useState } from 'react';

function Show(props) {
  const id = props.match.params.id; // it is params.id because in our route path we put :id // match gives us acess to url params
  const person = props.people.find(p => p._id === id);

  const [ editForm, setEditForm ] = useState(person); // this will populate the edit form with the person's info that we are trying to update. 

  const handleChange = (event) => {
    setEditForm({
      ...editForm, 
      [event.target.name]: event.target.value // computed property names sets the event target name to what the user input changed it to. in our case input tags use name so it's refering to that. this allows us to create one handleChange event rather than one for each name, image, and title
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePeople(editForm, id); // using the id variable we created to match the user id 
    props.history.push('/'); // this is going to redirect 
  }

  const handleClick = () => {
    props.deletePeople(id);
    props.history.push('/');
  }

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      {
        person.image &&
        <img src={person.image} alt={person.name} /> // if person.image is undefined, then it will not render an image. if person.image is a url string it will render an image
      }
      <button id="delete" onClick={handleClick}>Delete</button>
      <form style={{ marginTop: '3rem' }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={editForm.name}
          onChange={handleChange} // used to set our state based on what the user is typing
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={editForm.image}
          onChange={handleChange} // used to set our state based on what the user is typing
        />
        <br />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={editForm.title}
          onChange={handleChange} // used to set our state based on what the user is typing
        />
        <br />
        <input type="submit" value="Update Person"/>
      </form>
    </div>
  );
}

export default Show; 