import React from 'react';

const Instructions = () => {
    return (
        <div className="instructions">
        <h2>Instructions:</h2><br />
            <ol>
                <li>Paste the text which you want to learn into the text area at the top.</li>
                <li>Click the button</li>
                <li>Select words you're trying to remember, by clicking them. Words'll become unable to read</li>
                <li>Hover on selected words to see them</li>
                <li>Click on words which you allready know to highlight with green.</li>
            </ol>
        
        </div>
    );
};
export default Instructions;