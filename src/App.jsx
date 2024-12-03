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
          <br />
          <br />
          <div className="title-container">
            <h1 className="title" style={{ fontSize: "1.5rem" }}>
              Projects:
            </h1>
            <h1 className="title-mask" style={{ fontSize: "1.5rem" }}>
              Projects:
            </h1>
          </div>
          <br />
          <a
            href="https://benijaichenco.github.io/user-management-system/"
            target="_blank"
            className="link project"
          >
            - User-Management-System
          </a>
          <p className="text">* HTML, SCSS, Javascript.</p>
          <br />
          <a
            href="https://react-weather-app-one-ebon.vercel.app/"
            target="_blank"
            className="link project"
          >
            - Weather-App
          </a>
          <p className="text">* CSS, Vite, React, TypeScript.</p>
          <br />
          <p className="link project disabled">- CASSIA (under construction)</p>
          <p className="text">* CSS, Vite, React, TypeScript, NodeJS, Express, MongoDB, JWT.</p>
        </div>
      </main>
    </>
  );
}

export default App;
