import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <Header />
      <h1 className="subtitle">How It Works</h1>
      <div className="paragraph">
        <p>
          This app is powered by the GPT-3 language model by OpenAI. More
          specifically, it uses a fine tuned GPT-3 model trained on a dataset of
          crowdsourced cover letters that were successful in landing the
          applicant a job offer. <br />
          <br />
          This app uses the GPT-3 completion engine to generate custom cover
          letters based on the input data. GPT-3 uses deep learning technology,
          meaning the larger the dataset used to train the language model, the
          better it will perform. As such, this fine-tuned model is regularly
          fed new data to improve performance.
        </p>
      </div>
    </div>
  );
}
