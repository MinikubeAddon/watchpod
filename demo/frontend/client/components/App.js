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
        <div className="border-top">
          <header>
            <div className="">
              <div className="header-content border">
                  <h1>My Recipe Box</h1>
              </div>
            </div>
          </header>
        </div>
        <div className="main">
          {this.state.box.map((section) => (
            <div key={section._id}>
              <button className="btn btn-outline-danger btn-block" 
                data-toggle="collapse" 
                data-target={`#${section.category}`} 
                aria-expanded="true" 
                aria-controls={section.category}
              >
                <p>{section.category}</p>
              </button>
              <div id={section.category} className="collapse">
                <Recipes 
                  recipes={section.recipes}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
