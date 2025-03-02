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
            - Full-stack developer
            <br />
            <br />
            I like to solve complex problems and turn ideas into reality.
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
              href="https://cassia-prod-client.vercel.app/"
              target="_blank"
              className="link project"
            >
              CASSIA
            </a>
          </div>
          <div className="project-wrapper">
            <p className="text">*</p>
            <p className="text stack">
              <span className="text-bold">Frontend:</span> Vite, React, TypeScript, HTML, CSS,
              Lenis, Framer-Motion.
            </p>
          </div>
          <div className="project-wrapper">
            <p className="text">*</p>
            <p className="text">
              <span className="text-bold">Backend:</span> NodeJS, Express, MongoDB, JsonWebToken,
              Nodemailer, Bcrypt.
            </p>
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
          <div className="project-wrapper">
            <p className="text">*</p>
            <p className="text stack">
              <span className="text-bold">Frontend:</span> HTML, SCSS, JavaScript.
            </p>
          </div>
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
          <div className="project-wrapper">
            <p className="text">*</p>
            <p className="text stack">
              <span className="text-bold">Frontend:</span> CSS, React, TypeScript, Framer-Motion.
            </p>
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
            I find inspiration in astrophysics, philosophy, computer-science and the simple act of
            learning something new.
            <br />
            <br />
            Outside of work, you'll usually find me studying, at the gym, at the piano, or pondering
            the things I learn, always curious to understand more.
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
