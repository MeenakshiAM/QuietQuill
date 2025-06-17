import React, { useState } from 'react';
import '../App.css';

export default function Note(){
    const [notebook, setNotebook] = React.useState('');
    const [fontSize, setFontSize] = React.useState(16);
    const [FontStyle, setFontStyle] = React.useState({

        bold:false,
        italic:false,
        underline:false,

    });
    const [fontFamily, setFontFamily] = React.useState('san-serif');
    const [showFontOptions, setShowFontOptions] = useState(false);
    const [noteText, setNoteText] = useState(''); // added missing state

    const fontFamilies =[
         'Arial, sans-serif',
        'Verdana, sans-serif',
        'Georgia, serif',
        'Courier New, monospace',
        'Inter, sans-serif',
        'Times New Roman, serif',
        'monospace'
    ];

    //here we need to make use of these usestates.. dynamically
    // so we need to create the fns required
    // we can create the arrow fns

    const increasefs=()=>setFontSize(prevSize=>prevSize+2);
    const decreasefs=()=>setFontSize(prevSize=>prevSize-2);

    //now for the bold itallic and underline
    const toggleFontStyle = (style) => {
        setFontStyle(prev => ({
            ...prev,
            [style]: !prev[style]
        }));
    }

    const selectFontFamily = (newFont) =>{
        setFontFamily(newFont);
        setShowFontOptions(false);
    }

    const toolbarButtonStyle = {
        margin: '4px',
        padding: '6px 10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f3f3f3',
        cursor: 'pointer',
    };

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
                    placeholder='start writing ur taughts.... '
                    style={{
                        fontSize:`${fontSize}px`,
                        fontWeight: FontStyle.bold?'bold':'normal',
                        fontStyle: FontStyle.italic?'italic':'normal',
                        textDecoration: FontStyle.underline?'underline':'none',
                        fontFamily:fontFamily
                    }}
                    onChange={(e) => setNoteText(e.target.value)}
                    value={noteText}
                    >

                    </textarea>

                </div>
            </div>
            {/* this is the toolbar through which the adjustments are done */}
            <div className='toolbar'>
                {/* im creating this section by providing the buttons to trigger the fn related */}
                <button onClick={increasefs} style={toolbarButtonStyle}>+</button>
                <button onClick={decreasefs} style={toolbarButtonStyle}>-</button>
                <button onClick={() => toggleFontStyle('bold')} style={{ ...toolbarButtonStyle, fontWeight: FontStyle.bold ? 'bold' : 'normal' }}>
                    <strong>B</strong></button>

                <button onClick={() => toggleFontStyle('italic')} style={{ ...toolbarButtonStyle, fontStyle: FontStyle.italic? 'italic' : 'normal' }}><i>I</i></button>

                <button onClick={() => toggleFontStyle('underline')} style={{...toolbarButtonStyle, textDecoration: FontStyle.underline? 'underline' : 'none'}}>U</button>

                <button onClick={() => setShowFontOptions(!showFontOptions)} style={toolbarButtonStyle}>Font</button>
                <button style={toolbarButtonStyle}>✨</button>

                {showFontOptions && (
                    <div className="font-dropdown">
                        {fontFamilies.map((font, idx) => (
                            <div
                                key={idx}
                                onClick={() => selectFontFamily(font)}
                                style={{ fontFamily: font, cursor: 'pointer', padding: '4px' }}
                            >
                                {font.split(',')[0]}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
