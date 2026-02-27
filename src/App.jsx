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
            {/* <video controls width="100%" autoPlay muted loop>
              <source src={Aboutvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <img src="/image.png" alt="landingpage-image" />
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

      <div className='flex flex-col gap-6 p-4'>
        <h3 className='text-center text-3xl'>How people are using NotebookLM</h3>
        <div className='flex flex-col gap-4 p-6'>
          <div className='flex flex-col gap-6'>
            <img src="#" alt="icons" />
            <h4 className='text-lg'>Power study</h4>
            <p className='text-sm text-gray-600'>Upload lecture recordings, textbook chapters, and research papers. Ask NotebookLM to explain complex concepts in simple terms, provide real-world examples, and reinforce your understanding.</p>
            <h4 className='text-sm text-gray-600 italic'>Learn faster and deeper.</h4>
          </div>
          <div className='flex flex-col gap-6'>
            <img src="#" alt="icons" />
            <h4 className='text-lg'>Organize your thinking</h4>
            <p className='text-sm text-gray-600'>Upload your source material and let NotebookLM create a polished presentation outline, complete with key talking points and supporting evidence.</p>
            <h4 className='text-sm text-gray-600 italic'>Present with confidence.</h4>
          </div>
          <div className='flex flex-col gap-6'>
            <img src="#" alt="icons" />
            <h4 className='text-lg'>Spark new ideas</h4>
            <p className='text-sm text-gray-600'>Upload brainstorming notes, market research, and competitor research. Ask NotebookLM to identify trends, generate new product ideas, and uncover hidden opportunities.</p>
            <h4 className='text-sm text-gray-600 italic'>Unlock your creative potential.</h4>
          </div>
          {/* <div>
            <img src="#" alt="icons" />
            <h4>Power study</h4>
            <p>Upload lecture recordings, textbook chapters, and research papers. Ask NotebookLM to explain complex concepts in simple terms, provide real-world examples, and reinforce your understanding.</p>
            <h4>Learn faster and deeper.</h4>
          </div> */}
          {/* <div>
            <img src="#" alt="icons" />
            <h4>Power study</h4>
            <p>Upload lecture recordings, textbook chapters, and research papers. Ask NotebookLM to explain complex concepts in simple terms, provide real-world examples, and reinforce your understanding.</p>
            <h4>Learn faster and deeper.</h4>
          </div> */}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center p-6 bg-gray-100'>
        <h3 className='text-3xl text-center p-4'>We value your privacy and never use your organization's data to train NotebookLM</h3>
        <p className='text-center text-gray-700'>As an organization or school, your data will stay private to you. As an individual, your data is not used for training unless you share feedback, see more details <a href="#" className='text-blue-700 underline'>here.</a> </p>
      </div>

      <div>
        <h3>Want to learn more?</h3>
        <p>Here are some answers to common questions.</p>
        <div>
          
        </div>
      </div>

      <footer className='flex p-4'>
        <div className='flex flex-row gap-8 py-8 pb-8 justify-center items-center'>
          <h6 className='text-lg font-normal'>Google</h6>
          <a href="#" className='text-xs'>Privacy & Terms</a>
        </div>
      </footer>



      



    </div>
    
  );
}

export default App;
