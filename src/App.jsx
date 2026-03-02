// src/App.jsx
// import React from 'react';
import React, { useState, useRef } from 'react';
import firstImage from './assets/privacy.png';
// import secondImage from '/assets/video_placeholder_1.jpg';
import { FaReact, FaSass } from 'react-icons/fa';


import { FiAlertOctagon } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const App = () => {
  const data = [
    {
      question:
        "What makes NotebookLM different from other AI-powered note-taking apps?",
      answer:
        "As a research assistant, NotebookLM's advantage is being source-grounded. This helps deliver more accurate answers and insights based on your actual material — reducing the likelihood of AI errors and hallucinations.",
    },
    {
      question: "How will the integration with Gemini AI improve NotebookLM?",
      answer: "Built with the latest Gemini model, NotebookLM gains a more nuanced understanding of your sources. This delivers more insightful summaries, helps identify deeper connections across documents, and provides more accurate answers to your questions.",
    },
    {
      question: "What are the main advantages of NotebookLM compared to other AI learning apps?",
      answer: "",
    },
    {
      question: "Can I use NotebookLM for creative projects like making a podcast?",
      answer: "Yes, NotebookLM can create a podcast-style Audio Overview of your materials. NotebookLM is a great tool for creative projects. It helps you organize research, summarize sources, and then brainstorm, draft, and refine your script with AI suggestions.",
    },
    {
      question: "What are the most effective ways to integrate NotebookLM into a daily productivity workflow?",
      answer: "",
    },
    {
      question: "Is my data privacy at risk with NotebookLM?",
      answer: "NotebookLM is built with robust security measures. Google does not access or use your content in NotebookLM for generative AI foundational model training unless you share feedback, see more details here.",
    },
    {
      question: "Who has access to the notes and data I store in NotebookLM?",
      answer: "NotebookLM does not share your data with third parties. Learn how NotebookLM protects your data.",
    },
    {
      question: "What is Google's policy on data retention for my deleted notebooks in NotebookLM?",
      answer: "There is currently no recovery option for deleted notes",
    },
    {
      question: "How do I report a result in NotebookLM that I believe creates a safety concern or is inappropriate?",
      answer: "",
    },
    {
      question: "If I find a bug or have a feature idea, how can I submit my feedback?",
      answer: "Please share your questions and support requests on Discord or follow instructions on NotebookLM help center to report a problem.",
    },
  ];

  function AccordionItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
  
    return (
      <div className="border-b">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-700 cursor-pointer p-6 w-full text-left text-base"
        >
          {question}
        </button>
  
        <div
          ref={contentRef}
          className="px-4 overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isOpen
              ? contentRef.current?.scrollHeight + "px"
              : "0px",
          }}
        >
          <p className="pb-4 text-gray-600 text-xs">{answer}</p>
        </div>
      </div>
    );
  }

return(

    <div>
      <div className='flex justify-center flex-col p-4 items-center'>
        <h1 className='text-5xl text-center'>Understand <span className='text-5xl font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600'>Anything</span> </h1>
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
              {/* <FaReact /> */}
              {/* <FiAlertOctagon /> */}
              <FiUser />
              <h3 className='text-lg'>Upload your sources</h3>
              <p className='text-sm text-gray-700'>Upload PDFs, websites, YouTube videos, audio files, Google Docs, Google Slides and more, and NotebookLM will summarize them and make interesting connections between topics, all powered by the latest version of Gemini’s multimodal understanding capabilities.</p>
            </div>
            {/* <video controls width="100%" autoPlay muted loop>
              <source src={Aboutvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            {/* <img src={secondImage} alt="landingpage-image" /> */}
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
        <p className='text-center text-gray-600 font-light'>As an organization or school, your data will stay private to you. As an individual, your data is not used for training unless you share feedback, see more details <a href="#" className='text-blue-700 underline'>here.</a> </p>
        <img src={firstImage} alt="" />
      </div>

      <div className='p-6 flex flex-col justify-center'>
        <div className='flex gap-4 flex-col'>
          <h3 className='text-3xl font-light text-left'>Want to learn more?</h3>
          <p className='text-left text-sm text-gray-500'>Here are some answers to common questions.</p>
        </div>
        <div className="flex flex-col">
        {data.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        {/* <button className='text-blue-700 cursor-pointer p-8 w-full rounded-none text-left outline-0 outline-offset-0 text-base'>What makes NotebookLM different from other AI-powered note-taking apps?</button>
        <div className='p-0 px-4 max-h-0 overflow-hidden'>
          <p>As a research assistant, NotebookLM's advantage is being source-grounded. This helps deliver more accurate answers and insights based on your actual material — reducing the likelihood of AI errors and hallucinations.</p>
        </div> */}
        {/* <div class="w-96 h-48 rounded-md bg-gradient-to-tr from-indigo-600  to-purple-500 p-0.5"></div> */}
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
