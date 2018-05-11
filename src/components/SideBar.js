import React from 'react';

const SideBar = (props) =>{
    let instructionsText = 'Show';
    let textAreaText = 'Show';
    if(props.showingInstructions){
        instructionsText = 'Hide';
    }
    if(props.showingTextarea){
        textAreaText = 'Hide';
    }

    return(
        <div className="sidebar">
            <button className="btn btn-instructions" onClick={props.toggleInstructions}>{instructionsText} Instructions</button>
            <button className="btn btn-textarea" onClick={props.toggleTextarea}>{textAreaText} Textarea</button>
            <button className="btn btn-clear" onClick={props.clearEverything}>Clear everything</button>
        </div>
    );
}

export default SideBar;