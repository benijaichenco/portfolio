import pfp from "./assets/images/pfp.png";
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
            <br />
            I like to solve problems and turn ideas into reality.
            <br />
            <br />
            Always learning, always creating.
          </p>
          <br />
          <br />
          <div className="title-container">
            <h1 className="title" style={{ fontSize: "1.5rem" }}>
              Links:
            </h1>
            <h1 className="title-mask" style={{ fontSize: "1.5rem" }}>
              Links:
            </h1>
          </div>
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
          <div className="link-wrapper">
            <div className="list-dash">-</div>
            <a
              href="https://benijaichenco.github.io/user-management-system/"
              target="_blank"
              className="link project"
            >
              User Management System
            </a>
          </div>
          <p className="text">* HTML, SCSS, Javascript.</p>
          <br />
          <div className="link-wrapper">
            <div className="list-dash">-</div>
            <a
              href="https://react-weather-app-one-ebon.vercel.app/"
              target="_blank"
              className="link project"
            >
              Weather App
            </a>
          </div>
          <p className="text">* CSS, React, TypeScript.</p>
          <br />
          <div className="link-wrapper">
            <div className="list-dash">-</div>
            <p className="link project">Cassia (under construction)</p>
          </div>
          <div className="project-wrapper">
            <p className="text">*</p>
            <p className="text">CSS, React, TypeScript, NodeJS, Express, MongoDB, JWT.</p>
          </div>
          <br />
          <br />
          <div className="title-container">
            <h1 className="title" style={{ fontSize: "1.5rem" }}>
              About me:
            </h1>
            <h1 className="title-mask" style={{ fontSize: "1.5rem" }}>
              About me:
            </h1>
          </div>
          <br />
          <img className="pfp" src={pfp} />
          <br />
          <br />
          <p className="text about">
            I'm Beni, a curious soul who loves creating - whether it's music, code, or new ways to
            think about the world.
            <br />
            <br />
            I find inspiration in astrophysics, philosophy, psychology and the simple act of
            learning something new.
            <br />
            <br />
            Outside of work, you'll usually catch me at the gym, at the piano, or lost in thought.
          </p>
          <br />
          <br />
          <br />

          <a href="/cv.pdf" target="_blank" className="cv-btn">
            {`<RESUME/>`}
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
