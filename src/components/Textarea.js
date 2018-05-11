import React from 'react';
import Wrapper from './Wrapper';

const Textarea = (props) => {
    let textarea = null;
    if (props.showingTextarea) {
        textarea =
            <Wrapper>
                <textarea className="text-area"
                    onChange={props.onChange} value={props.value}>
                </textarea>
                <button className="btn btn-learn" onClick={props.transformTextIntoComponents}>Lets learn!</button><br />
            </Wrapper>
    }
    return textarea;
}

export default Textarea;