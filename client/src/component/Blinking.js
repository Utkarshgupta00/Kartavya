import React from 'react';

function BlinkingMessage({ text, url }) {
  return (
    <div className="text-center mt-5">
      <a
        href={url}
        className="inline-block animate-running-link text-blue-500 text-2xl font-bold hover:text-red-600"
      >
        {text}
      </a> 
    </div>
  );
}

export default BlinkingMessage;
