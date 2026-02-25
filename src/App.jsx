// src/App.jsx
import React from 'react';

const App = () => {
  return (


    <div>
      <div className='flex justify-center flex-col p-4 items-center'>
        <h1 className='text-5xl text-center'>Understand <span>Anything</span> </h1>
        <div className='flex justify-center items-center text-center w-full p-4'>
          <p className='text-gray-500 font-light'>Your research and thinking partner, grounded in the information you trust, built with the latest Gemini models.</p>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <button className='p-4 pr-8 pl-8 rounded-lg bg-black text-white'>Try NotebookLM</button>
          <a href="#" className='text-blue-700 underline'>Get the app</a>
        </div>
      </div>

      <div className='flex flex-col p-4 justify-center'>
        <h2 className='text-center text-3xl'>Your AI-Powered Research Partner</h2>
        <div className='flex flex-col gap-8 p-4'>
          <div className='flex flex-col gap-2' >
            <div className='flex flex-col gap-2'>
              <img src="#" alt="icon" />
              <h3 className='text-lg'>Upload your sources</h3>
              <p className='text-sm text-gray-700'>Upload PDFs, websites, YouTube videos, audio files, Google Docs, Google Slides and more, and NotebookLM will summarize them and make interesting connections between topics, all powered by the latest version of Gemini’s multimodal understanding capabilities.</p>
            </div>
            <img src="#" alt="" />
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <img src="#" alt="icon" />
              <h3 className='text-lg'>Instant insights</h3>
              <p className='text-sm text-gray-700'>With all of your sources in place, NotebookLM gets to work and becomes a personalized AI expert in the information that matters most to you.</p>
            </div>
            <img src="#" alt="" />
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <img src="#" alt="icon" />
              <h3 className='text-lg'>See the source, not just the answer</h3>
              <p className='text-sm text-gray-700'>Gain confidence in every response because NotebookLM provides clear citations for its work, showing you the exact quotes from your sources.</p>
            </div>
            <img src="#" alt="" />
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <img src="#" alt="icon" />
              <h3 className='text-lg'>Listen and learn on the go</h3>
              <p className='text-sm text-gray-700'>Our new Audio Overview feature can turn your sources into engaging “Deep Dive” discussions with one click</p>
            </div>
            <img src="#" alt="" />
          </div>


        </div>
      </div>



      



    </div>
    
  );
}

export default App;
