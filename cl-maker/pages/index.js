import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Prompt from '../components/Prompt';

export default function Home(props) {
  const [userData, setUserData] = useState([]);


  return (
    <div>
      <Head>
        <title>Cover Letter Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Prompt level={props.level} data={userData} pushData={setUserData} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      level: ['entry', 'junior', 'mid', 'senior'],
    },
  };
}
