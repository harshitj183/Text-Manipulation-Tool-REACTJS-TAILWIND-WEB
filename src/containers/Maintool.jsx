import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Custom Icon components using inline SVG
const Icons = {
  Type: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7"/>
      <line x1="9" y1="20" x2="15" y2="20"/>
      <line x1="12" y1="4" x2="12" y2="20"/>
    </svg>
  ),
  Copy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  ),
  Clipboard: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    </svg>
  ),
  Refresh: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v6h6"/>
      <path d="M3 8a9 9 0 0 1 9-3.6C17.5 5.3 21 10.1 21 15.8c0 6.2-5.2 11.2-11.6 11.2-5.5 0-10.1-3.6-11.4-8.4"/>
    </svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  Share: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  )
};

const Maintool = ({ headname, placeholdername, isDarkMode = false }) => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [copyStatus, setCopyStatus] = useState('Copy');

  // Update counts when text changes
  useEffect(() => {
    setCharCount(text.length);
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
  }, [text]);

  const styles = {
    container: {
      backgroundColor: isDarkMode ? '#17202d' : '#d7e8f9',
      transition: 'background-color 0.3s ease'
    },
    textarea: {
      backgroundColor: isDarkMode ? '#252f3d' : '#afdbf5',
      color: isDarkMode ? '#c1c8e4' : '#1f305e',
      borderColor: isDarkMode ? '#4285f4' : '#191970'
    },
    heading: {
      color: isDarkMode ? '#c1c8e4' : '#010614'
    },
    stats: {
      color: isDarkMode ? '#8c98b7' : '#4d598c'
    }
  };

  const buttonVariants = {
    primary: {
      bg: isDarkMode ? '#4285f4' : '#4285f4',
      text: isDarkMode ? '#fff' : '#fff'
    },
    success: {
      bg: isDarkMode ? '#2f8f3a' : '#47fa7e',
      text: isDarkMode ? '#e1faed' : '#021505'
    },
    info: {
      bg: isDarkMode ? '#394a5f' : '#dffffd',
      text: isDarkMode ? '#c0d4e9' : '#4d598c'
    },
    warning: {
      bg: isDarkMode ? '#d8a400' : '#ffbb00',
      text: isDarkMode ? '#fef2dc' : '#160d00'
    },
    error: {
      bg: isDarkMode ? '#b8455d' : '#ff7ca0',
      text: isDarkMode ? '#fae1e7' : '#160509'
    },
    accent: {
      bg: isDarkMode ? '#7645b9' : '#8a2be2',
      text: isDarkMode ? '#e6d9fd' : '#e6d9fd'
    }
  };

  // Text transformation functions
  const transformations = {
    toUpperCase: () => setText(text.toUpperCase()),
    toLowerCase: () => setText(text.toLowerCase()),
    capitalize: () => setText(text.replace(/\b\w/g, c => c.toUpperCase())),
    removeSpaces: () => setText(text.replace(/\s+/g, ' ').trim()),
    clear: () => setText(''),
    copyToClipboard: async () => {
      await navigator.clipboard.writeText(text);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy'), 2000);
    },
    pasteFromClipboard: async () => {
      try {
        const clipboardText = await navigator.clipboard.readText();
        setText(clipboardText);
      } catch (err) {
        console.error('Failed to read clipboard:', err);
      }
    }
  };

  const Button = ({ onClick, variant, icon: Icon, children }) => (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 hover:opacity-90 hover:shadow-md"
      style={{
        backgroundColor: buttonVariants[variant].bg,
        color: buttonVariants[variant].text
      }}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
  
  return (
    <div className="p-6 max-w-4xl mx-auto rounded-lg shadow-lg" style={styles.container}>
      <div className="mb-4 flex justify-between items-center">
        <label className="text-xl font-semibold" style={styles.heading}>
          {headname}
        </label>
        <div className="flex items-center gap-4" style={styles.stats}>
          <span>{wordCount} words</span>
          <span>{charCount} characters</span>
        </div>
      </div>

      <textarea
        id="inputBox"
        placeholder={placeholdername}
        rows="8"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
        style={styles.textarea}
      />

      <div className="mt-6 flex flex-wrap gap-3">
        <Button variant="primary" icon={Icons.Type} onClick={transformations.toUpperCase}>
          UPPERCASE
        </Button>
        <Button variant="success" icon={Icons.Type} onClick={transformations.toLowerCase}>
          lowercase
        </Button>
        <Button variant="info" icon={Icons.Copy} onClick={transformations.copyToClipboard}>
          {copyStatus}
        </Button>
        <Button variant="warning" icon={Icons.Clipboard} onClick={transformations.pasteFromClipboard}>
          Paste
        </Button>
        <Button variant="error" icon={Icons.Refresh} onClick={transformations.clear}>
          Clear
        </Button>
        <Button variant="accent" icon={Icons.Type} onClick={transformations.capitalize}>
          Capitalize
        </Button>
        <Button variant="primary" icon={Icons.Type} onClick={transformations.removeSpaces}>
          Remove Spaces
        </Button>
      </div>

      {text && (
        <div className="mt-6 flex flex-wrap gap-4 items-center" style={styles.stats}>
          <div className="flex items-center gap-2 cursor-pointer">
            <Icons.Download />
            <span>Download as TXT</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Icons.Share />
            <span>Share</span>
          </div>
        </div>
      )}
    </div>
  );
};

Maintool.propTypes = {
  headname: PropTypes.string.isRequired,
  placeholdername: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool
};

export default Maintool;