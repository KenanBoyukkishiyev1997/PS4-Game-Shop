import React from 'react';
import Header from './component/Header/Header';
import Section from './component/Section/Section';
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './component/Context/Context'

class App extends React.Component {
  render() {
    return (
      <DataProvider >
        <div className='app'>
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    )
  }
}



export default App;
