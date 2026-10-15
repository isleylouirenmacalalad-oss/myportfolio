import './style.css';
import isley from './assets/isley.jpg';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <h2>
          LOUI <span></span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#connect">Connect</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-container">
          <div className="home-image">
            <img src={isley} alt="Isley Louiren Macalalad" />
          </div>

          <div className="home-content">
          
            <h1>
              I'm <span>Isley Louiren D. Macalalad</span>
            </h1>

            <h3>IT Student | Business Analytics</h3>

            <p className="description">
              I am a hardworking and determined IT student who is passionate about 
              learning new things and improving my skills. As a working student, 
              I have learned the importance of responsibility, patience, and time management.
              I am eager to gain more knowledge and experience to achieve my goals and become a 
              successful IT professional.
            </p>

            <a href="#about" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>
          About <span>Me</span>
        </h2>

        <div className="info-box">
          <p>
            <strong>Name:</strong> Isley Louiren D. Macalalad
          </p>

          <p>
            <strong>Age:</strong> 20 years old
          </p>

          <p>
            <strong>Birthdate:</strong> March 08, 2006
          </p>
        </div>
      </section>

      {/* Projects Section */}
<section id="project" className="section">
  <h2>
    My <span>Projects</span>
  </h2>

  <p className="project-description">
    Here are some of the projects I have worked on during
    my studies and personal development.
  </p>
    
  <div className="project-list">
    <a href="https://github.com/isleylouirenmacalalad-oss/BACKEND_.git">Backend Development System</a>

    <a href="https://github.com/isleylouirenmacalalad-oss/AdvanceComprog.git">Advanced Computer Programming Project</a>

    <a href="https://github.com/isleylouirenmacalalad-oss/Dynamic-User-Interface.git">Dynamic User Interface System</a>

    <a href="https://github.com/isleylouirenmacalalad-oss/Responsive-Design.git">Responsive Design Project Project</a>
  </div>
</section>

      {/* Connect Section */}
      <section id="connect" className="section">
        <h2>
          Connect <span>With Me</span>
        </h2>

        <div className="info-box">
          <p>
            <strong>Number:</strong> 0955-390-4035
          </p>

          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:isleylouirenmacalalad@gmail.com">
              isleylouirenmacalalad@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Isley Portfolio | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;