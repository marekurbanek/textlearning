import React from 'react';
import instructions1 from '../imgs/instructions1.png';
import instructions2 from '../imgs/instructions2.png';
import instructions3 from '../imgs/instructions3.png';

const Instructions = () => {
    return (
        <div className="instructions">
        <h2>Instructions:</h2><br />
            <ol>
                <li>Paste the text which you want to learn into the text area at the top.</li>
                <li>Click the 'Lets learn' button.</li>
                <li>Select words you're trying to remember, by clicking them. Words'll become unable to read.</li>
                <li>Hover on selected words to see them.</li>
                <li>Click on words which you allready know to highlight with green.</li>
            </ol>
            <div className="instructions-img">
                <img src={instructions1} alt="instructions-step-1" />
                <img src={instructions2} alt="instructions-step-2" />
                <img src={instructions3} alt="instructions-step-3" />
            </div>
        </div>
    );
};
export default Instructions;