import Head from 'next/head';
import Header from '../components/Header';
import Prompt from '../components/Prompt';

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Cover Letter Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Prompt
        level={props.level}
      />
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
