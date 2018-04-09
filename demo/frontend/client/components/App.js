import React from 'react';
import Recipes from './Recipes.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      box: []
    }
  }
  
  componentDidMount(){
    fetch(`http://${window.location.hostname}:31025`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState(prevState => {
        return { box: myJson.box }
      })
    });
  }
  
  render(){
    return (
      <div>
        <div className="header">
        </div>
        <div>
          {this.state.box.map((section) => (
            <div key={section._id}>
              <h4>{section.category}</h4>
              <Recipes 
                recipes={section.recipes}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
