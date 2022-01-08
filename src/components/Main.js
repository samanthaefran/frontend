import { Route, Switch } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'


function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Index />
        </Route>
        <Route /> 
      </Switch>
    </main>
  )
}

export default Main;