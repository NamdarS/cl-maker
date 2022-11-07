import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Prompt from '../components/Prompt';
import DisplayLetter from '../components/DisplayLetter';

export default function Home() {
  const [userData, setUserData] = useState('');
  const [letter, setLetter] = useState('');

  return (
    <div>
      <Head>
        <title>Cover Letter Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <hr className='line'/>
      <Prompt
        level={['entry', 'junior', 'mid', 'senior']}
        data={userData}
        pushData={setUserData}
        genLetter={setLetter}
      />
      {letter && <DisplayLetter letter={letter} />}
      {console.log(letter)}
    </div>
  );
}
