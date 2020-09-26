import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
class App extends Component {
  state = {
    persons : [{name:'Pawan',age:18},
    {name:'Amsn',age:18},
    {name:'Jaye',age:18}
    ],
    userName:'Pawan'
  }
  
  changeState = (newName) => {
    this.setState({
    persons : [{name:newName,age:44},
    {name:'Amsnaa',age:33},
    {name:'Jayeaa',age:22}
    ]
  });
  }
  
  changeTextHandler = (event) =>{
      this.setState({
    persons : [
    {name:"Pawan",age:44},
    {name:event.target.value,age:33},
    {name:'Jayeaa',age:22}
    ]
  });
  }
  
  userNameChangeTextHandler = (event) => {
    this.setState({
      userName:event.target.value
    });
  }
  
  render() {
    const style = {
      backgroudColor:'white',
      font:'inherit',
      cursor:'pointer',
      padding:'8px',
      border:'1px solid blue'
      
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Person name={this.state.persons[0].name} Age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        Age={this.state.persons[1].age} 
        click={this.changeState.bind(this,"abc")}
        textChange={this.changeTextHandler}
        >Inside component tags</Person>
        <Person name={this.state.persons[2].name} Age={this.state.persons[2].age}/>
        <button style={style} onClick={this.changeState.bind(this,"xyz")}>Change State</button>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
        <UserInput userNameChanged={this.userNameChangeTextHandler} userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;

