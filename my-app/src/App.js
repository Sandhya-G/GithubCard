import React, { Component } from 'react';
import Footer from './Footer'
const API = 'https://api.github.com/users';

class App extends Component {

  constructor()
  {
    super()
    this.state = {
      username:"",
      character:"",
      image:"",
      rep:"",
      followers:"",
      following:"",
      character:"",
      displayData:"",
      error:false

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  display(data)
  {
    this.setState(
      { displayData:true,
        character:data,
        username:data.login ,
        url:data.url,
        followers:data.followers,
        following:data.following,
        image:data.avatar_url,
        rep:data.public_repos}

      )
  }
    getData(username)
    {
       let url = `${API}/${username}`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
               this.display(data)
            }).catch((error) => this.setState({error:true}) )
  }


  handleChange(event) {
        this.setState({
            username: event.target.value,
            displayData:false
            
        })
    }

     handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.username)
        this.getData(this.state.username)
        
    }

   /*componentDidMount() {
        let url = `${API}/${this.username}`;
        console.log(url);
        this.setState({loading: true})
        fetch(url)
            .then(response => response.json())
            .then(data => {
               this.setState({ character : data  })
              
            })*/


  render() {
    return (
      <div >
          <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group">
                <input 
                type="text" 
                className="form-control"
                placeholder="User Name and Press Enter" 
                value={this.state.username} 
                name="username"
                onChange={this.handleChange} 
                />
                <button type="button" className="btn btn-primary">Search</button>
                </div>
          </form>

  

          {(this.state.displayData && this.state.character.login) ?
            
                <div className="border">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-sm-4">
                            <div><img src={this.state.image}/></div>
                        </div>
                         <div className="col-sm-8">
                            <div>UserName: {this.state.username}</div>
                            <div>Repositories:{this.state.rep}</div>
                            <div>Followers:{this.state.followers}</div>
                            <div>Following:{this.state.following}</div>
                            {console.log(this.state.image)}

                         </div>
                      </div>
                    </div>
                  </div>
              

                : <div> {(this.state.error) ? "Error, Try again Later" : 
                                                <h3><small>enter valid username</small></h3> 
                        }
                  </div>

            }
             {console.log(this.state.character)}

                  
          
    
        
      </div>
    );
  }
}

export default App;
