import "./App.css";

function App() {
  return (
    <>
      <main id="main">
        <div className="container">
          <div className="title-container">
            <h1 className="title">{`<Beni Jaichenco/>`}</h1>
            <h1 className="title-mask">{`<Beni Jaichenco/>`}</h1>
          </div>
          <p className="text">
            <br />
            - Fullstack developer.
            <br />
            - Web designer.
            <br />
            <br />I like to build things that look and work good.
            <br />
            Always learning, always creating.
          </p>
          <br />
          <br />
          <a href="https://www.linkedin.com/in/beni-jaichenco/" target="_blank" className="link">
            - LinkedIn
          </a>
          <a href="mailto:benjaminjaichenco@gmail.com" className="link">
            - Email
          </a>
          <a href="https://github.com/benijaichenco" target="_blank" className="link">
            - GitHub
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
