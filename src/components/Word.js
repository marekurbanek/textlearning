import React, { Component } from 'react';

class Word extends Component {

    state = {
        wasCliked: false,
        showHiddenWord: false,
        timesClicked: 0,
    }

    wordClicked = () => {
        this.setState({ wasCliked: true ,
                        timesClicked: this.state.timesClicked + 1})
    }

    showWord = () => {
        this.setState({ showHiddenWord: true })
    }
    hideWord = () => {
        this.setState({ showHiddenWord: false })
    }
    render() {
        let style = { backgroundColor: 'white' }


        if(this.state.timesClicked % 2 === 0 && this.state.timesClicked !== 0){
            style = { backgroundColor: '#2ecc71' }
        } else if (this.state.timesClicked === 0){
            style={ backgroundColor: 'white' }
        }else{
            style={ backgroundColor: 'black' }
        }

        if(this.state.showHiddenWord){
            style = { backgroundColor: 'white' }
        } 

        if (this.props.text) {
            return <p className="word"
                style={style}
                onClick={this.wordClicked}
                onMouseEnter={this.showWord}
                onMouseLeave={this.hideWord}>
                {this.props.text}
            </p>;
        } else {
            return null;
        }
    }

}

export default Word;