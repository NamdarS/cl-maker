import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <Header />
      <h1 className="subtitle">About</h1>
      <div className="paragraph">
        <p>
          It is not easy to apply to 50 jobs a day all while balancing
          school, work, and all other responsibilities. Tailoring your resume to
          each job application already takes too much effort, making it nearly
          impossible to write meaningful cover letters. This tool makes the job
          application process just a little bit easier for all job seekers.
          <br/><br/>
          It should be noted that this app uses AI to generate cover letters, and AI has 
          limitations. You should always proofread all generated content before
          using it in a job application.
        </p>
      </div>
    </div>
  );
}
