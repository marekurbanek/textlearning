import React, { Component } from 'react';
import './App.css';
import Word from './components/Word';
import Instructions from './components/Instructions';
import SideBar from './components/SideBar';
import Textarea from './components/Textarea';

class App extends Component {

  state = {
    inputText: '',
    textReadyToConvert: false,
    showingInstructions: false,
    showingTextarea: true
  }

  textChanged = (event) => {
    this.setState({ inputText: event.target.value });
  }

  transformTextIntoComponents = () => {
    this.setState({
      textReadyToConvert: true,
      showingTextarea: false,
    });
  }

  toggleInstructions = () => {
    this.setState({ showingInstructions: !this.state.showingInstructions })
  }

  toggleTextarea = () => {
    this.setState({ showingTextarea: !this.state.showingTextarea })
  }

  clearEverything = () =>{
    this.setState({   inputText: '',
      textReadyToConvert: false,
      showingInstructions: false,
      showingTextarea: true})
  }

  render() {

    let convertedText = null;
    if (this.state.textReadyToConvert) {
      const wordsArray = this.state.inputText.split(" ");
      convertedText = wordsArray.map((word, index) => {
        return <Word key={index} text={word + ' '} />;
      })
    }

    return (
      <div >
        <SideBar
          toggleInstructions={this.toggleInstructions}
          showingInstructions={this.state.showingInstructions}
          toggleTextarea={this.toggleTextarea}
          showingTextarea={this.state.showingTextarea}
          clearEverything={this.clearEverything}
        />
        <div className="container">
          {this.state.showingInstructions ? <Instructions /> : null}
          <Textarea showingTextarea={this.state.showingTextarea}
            onChange={this.textChanged}
            value={this.state.inputText}
            transformTextIntoComponents={this.transformTextIntoComponents} /><br />
          {convertedText ? <div className="text-container">
            {convertedText}
          </div> : null}
        </div>
      </div>
    );
  }
}

export default App;
