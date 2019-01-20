import React, { Component } from 'react';
import Footer from './Footer'
import Display from './Display'
const API = 'https://api.github.com/users';

class App extends Component {

  constructor()
  {
    super()
    this.state = {
      username:"",
      character:"",
      displayData:"",
      error:false

    }
    //binding is requires to call setState method
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  display(data)
  {
    this.setState(
      { displayData:true,
        character:data,
       }

      )
  }
  /*
  fetch is used to get data from an API, it returns a promise.
  if no error occurs, data is displayed.
  */
    getData(username)
    {
       let url = `${API}/${username}`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
               this.display(data)
            }).catch(() => this.setState({error:true}) )
  }

  //this is called whenever input is changed, it sets displayData to false, which earses any previously displayed data.
  handleChange(event) {
        this.setState({
            username: event.target.value,
            displayData:false
            
        })
    }

    //this is called when submit button is clicked or enter key is pressed.
     handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.username)
        this.getData(this.state.username)
        
    }

  //one of the lifeCycle methods, called whenever the state values are changed
  render() {
    return (
      <div >
          <form  className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
                <input 
                type="text" 
                className="form-control"
                placeholder="Enter the UserName" 
                value={this.state.username} 
                name="username"
                onChange={this.handleChange} 
                />
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                </div>
          </form>

          {(this.state.displayData && this.state.character.login) ?
            
                <div>
                    <Display data={this.state.character}/>
                  </div>
              

                : <div> {(this.state.error) ? "Error, Try again Later" : 
                                                <h3><small>enter valid username</small></h3> 
                        }
                  </div>

            }
             
      </div>
    );
  }
}
export default App;
