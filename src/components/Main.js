import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'


function Main(props) {
  const [people, setPeople] = useState(null)

  const URL = "https://backend-samantha.herokuapp.com/people"
  // const URL = "http://localhost:3001/people/"

  // retrieve all the people
  const getPeople = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setPeople(data)
  }

  // run getPeople once when component is mounted
  useEffect(() => getPeople(), [])

  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Index people={people} />
        </Route>
        <Route path="/people/:id" render={(rp) => <Show {...rp}/>}/>
      </Switch>
    </main>
  )
}

export default Main;