import React, { Component } from 'react';
import Footer from './Footer'
const API = 'https://api.github.com/users';

class App extends Component {

  constructor()
  {
    super()
    this.state = {
      username:"",
      image:"",
      rep:"",
      followers:"",
      following:"",
      character:""

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  display(data)
  {
    this.setState(
      {username:data.login ,
        url:data.url,
        followers:data.followers,
        following:data.following,
        rep:data.public_repos}

      )
  }
    getData(username)
    {
       let url = `${API}/${username}`;
        console.log(url);
        this.setState({loading: true})
        fetch(url)
            .then(response => response.json())
            .then(data => {
               this.display(data)
              
            })

    }

  handleChange(event) {
        this.setState({
            username: event.target.value
            
        })
    }

     handleSubmit(event) {
        event.preventDefault()
        this.setState({
            display:true
        })
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
          <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                placeholder="Enter the User Name" 
                value={this.state.username} 
                name="username"
                onChange={this.handleChange} 
                />
                <button>Search</button>
          </form>
          <br /><br /><br /><br />
          {this.state.username}
          {this.state.followers}
          {this.state.following}
          {this.state.rep}
          <img src="{this.state.image}"/>          
          
    
        
      </div>
    );
  }
}

export default App;
