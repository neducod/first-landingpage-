// src/App.jsx
import React from 'react';

const App = () => {
  return (
    <div className='flex justify-center flex-col p-4 items-center'>
      <h1 className='text-5xl text-center'>Understand <span>Anything</span> </h1>
      <div className='flex justify-center items-center text-center w-full p-4'>
        <p className='text-gray-500 font-light'>Your research and thinking partner, grounded in the information you trust, built with the latest Gemini models.</p>
      </div>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <button className='p-4 rounded-lg bg-black text-white'>Try NotebookLM</button>
        <a href="#" className='text-blue-700 underline'>Get the app</a>
      </div>
    </div>
    
  );
}

export default App;
