import React, { useState } from 'react';
import '../App.css';

export default function Note(){
    return(
        //this is the whole container in which the notebook and the toolbar exist 
        <div className="note-book">
            {/* this will have the notebook besides the toolbar in the side  */}
            <div className='note-container'>
                {/* inside this u need the border of the book... just for aethetic so   */}
                <div className='note-ring'>
                    {/* this is for the rings in which the spiral comes ... */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="ring" style={{ transform: `rotate(${i * 5}deg)` }}></div>
                    ))}
                </div>
            {/* the text are in which we need to enteer the diary entry */}
                <div className='main-note'>
                    <textarea className='text-area'
                    placeholder='start qriting ur taughts.... '
                    >

                    </textarea>

                </div>
            </div>
            {/* this is the toolbar through which the adjustments are done */}
            <div className='toolbar'>
                 {/* im creating this section by providing the buttons to trigger the fn related */}
                <button>A</button>
                <button>a</button>
                <button><strong>B</strong></button>
                <button><i>I</i></button>
                <button>U</button>
                <button>Font</button>
                <button>✨</button>

            </div>

        </div>
    );
}