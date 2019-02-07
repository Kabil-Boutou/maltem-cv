import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CvMaltem from './contents/CvMaltem'
import CvForm from './contents/CvForm'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={CvForm} />
          <Route path='/cv-maltem' exact component={CvMaltem} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
