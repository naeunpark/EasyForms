import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from './Contact'
import About from './About'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/contact' component={Contact}/>
        <Route path='/about' component={About}/>
      </Switch>
    </main>
  )
  
  export default Main