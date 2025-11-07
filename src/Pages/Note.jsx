import React, { useState } from 'react';
import '../App.css';
import rose from '../assets/rose.png';

export default function Note() {
  const [fontSize, setFontSize] = useState(20);
  const [fontStyle, setFontStyle] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [showFontOptions, setShowFontOptions] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [title, setTitle] = useState('');
  const [saveMessage, setSaveMessage] = useState('');

  const fontFamilies = [
    'Arial, sans-serif',
    'Verdana, sans-serif',
    'Georgia, serif',
    'Courier New, monospace',
    'Inter, sans-serif',
    'Times New Roman, serif',
    'monospace'
  ];

  // 🔤 Font controls
  const increasefs = () => setFontSize(prev => prev + 2);
  const decreasefs = () => setFontSize(prev => Math.max(prev - 2, 10));

  const toggleFontStyle = (style) => {
    setFontStyle(prev => ({
      ...prev,
      [style]: !prev[style],
    }));
  };

  const selectFontFamily = (newFont) => {
    setFontFamily(newFont);
    setShowFontOptions(false);
  };

  const toolbarButtonStyle = {
    margin: '4px',
    padding: '6px 10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f3f3f3',
    cursor: 'pointer',
  };

  // 💾 Save note to backend
  const saveNote = async () => {
    const noteData = {
      title: title.trim() || 'Untitled',
      content: noteText.trim(),
      date: new Date().toISOString().split('T')[0],
    };

    try {
      const res = await fetch('http://localhost:8080/api/diary/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noteData),
      });

      if (!res.ok) {
        const errText = await res.text();
        setSaveMessage('❌ Failed to save note: ' + errText);
        return;
      }

      const data = await res.json().catch(() => null);
      console.log('Note saved response:', data);

      setSaveMessage('✅ Note saved successfully!');
      setTitle('');
      setNoteText('');
    } catch (error) {
      console.error('Save error:', error);
      setSaveMessage('⚠️ Error occurred while saving note.');
    }

    // Clear message after 3 seconds
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="note-book">
      {/* Left rose image */}
      <img src={rose} alt="rose" />

      {/* Notebook container */}
      <div className="note-container">
        <div className="note-ring">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="ring" style={{ transform: `rotate(${i * 5}deg)` }}></div>
          ))}
        </div>

        <div className="main-note">
          <input
            type="text"
            className="note-title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              fontSize: `${fontSize + 2}px`,
              fontWeight: fontStyle.bold ? 'bold' : 'normal',
              fontStyle: fontStyle.italic ? 'italic' : 'normal',
              textDecoration: fontStyle.underline ? 'underline' : 'none',
              fontFamily,
              width: '100%',
              marginBottom: '10px',
              border: 'none',
              borderBottom: '1px solid #ccc',
              outline: 'none',
            }}
          />

          <textarea
            className="text-area"
            placeholder="Start writing your thoughts..."
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: fontStyle.bold ? 'bold' : 'normal',
              fontStyle: fontStyle.italic ? 'italic' : 'normal',
              textDecoration: fontStyle.underline ? 'underline' : 'none',
              fontFamily,
            }}
            onChange={(e) => setNoteText(e.target.value)}
            value={noteText}
          />

          <button
            onClick={saveNote}
            style={{ ...toolbarButtonStyle, marginTop: '10px', backgroundColor: '#ffe8e8' }}
          >
            💾 Save
          </button>

          {saveMessage && (
            <p style={{ marginTop: '10px', color: saveMessage.includes('✅') ? 'green' : 'red' }}>
              {saveMessage}
            </p>
          )}
        </div>
      </div>

      {/* Toolbar */}
      <div className="toolbar">
        <button onClick={increasefs} style={toolbarButtonStyle}>+</button>
        <button onClick={decreasefs} style={toolbarButtonStyle}>-</button>
        <button
          onClick={() => toggleFontStyle('bold')}
          style={{ ...toolbarButtonStyle, fontWeight: fontStyle.bold ? 'bold' : 'normal' }}
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => toggleFontStyle('italic')}
          style={{ ...toolbarButtonStyle, fontStyle: fontStyle.italic ? 'italic' : 'normal' }}
        >
          <i>I</i>
        </button>
        <button
          onClick={() => toggleFontStyle('underline')}
          style={{ ...toolbarButtonStyle, textDecoration: fontStyle.underline ? 'underline' : 'none' }}
        >
          U
        </button>
        <button onClick={() => setShowFontOptions(!showFontOptions)} style={toolbarButtonStyle}>
          Font
        </button>
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

      {/* Right rose image */}
      <img src={rose} alt="rose" />
    </div>
  );
}
