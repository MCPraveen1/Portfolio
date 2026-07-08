import "./Journey.css";

function Journey() {
  return (
    <section className="journey">

      <h2>My Journey</h2>

      <div className="timeline">

        <div className="card">
          <h3>Medical Transcription</h3>
          <p>
            Built a strong foundation in healthcare documentation,
            quality, accuracy and client communication over 25+ years.
          </p>
        </div>

        <div className="card">
          <h3>Transition to AI</h3>
          <p>
            Learned SQL, Python, Machine Learning,
            NLP, Computer Vision and Generative AI.
          </p>
        </div>

        <div className="card">
          <h3>AI Engineer</h3>
          <p>
            Building AI-powered applications using
            LLMs, React, Python and modern AI tools.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Journey;