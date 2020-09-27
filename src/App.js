import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent'
class App extends Component {
  state = {
      enteredText:'SomeValue'
    }
  
  enteredTextHandler = (index) => {
    let charList = this.state.enteredText.split('');
    charList.splice(index,1);
    let newEnteredText = charList.join('');
    this.setState({
      enteredText:newEnteredText
    })
  }  
  
  inputHandler = (event) =>{
    this.setState({
      enteredText:event.target.value
    })
  }
  
  render() {
    let charList = this.state.enteredText.split('').map((chr,index) => {
      return <CharComponent clicked={this.enteredTextHandler.bind(this,index)} txt={chr} key={index}/>
    })
    
    return (
      <div className="App">
              <input type="text" onChange={this.inputHandler.bind(this)} value={this.state.enteredText}/>
              <p>Length of the text is : {this.state.enteredText.length}</p>
              <Validation textLen={this.state.enteredText.length}/>
              {charList}
      </div>
    );
  }
}

export default App;

