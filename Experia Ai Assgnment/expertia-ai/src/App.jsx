import logo from './logo.svg';
import './App.css';
    

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="navbar-logo"> <a href="#">Find My Job</a></h2>
        <div className='navbar-menu'>
          <a href="#jobs">Jobs</a>
          <a href="#companies">Companies</a>
          <a href="#testimoni">Testimonial</a>
          <a href="#blog">Blogs</a>
          <a href="#">Sign In</a>
        </div>
        <div className='menu-toggle'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
      <header>
        <h1 className='header-title'>
        Find the best <br/> <span>  job for you</span> <br /> Easily 
        </h1>
      </header>
      <div className='search-wrapper'>
        <div className='search-container'>
          <div className='search-card'>
            <input className='search-input' type='text' placeholder='Search for a job' />
            <button className='search-button'>Search</button>
          </div>
        </div>
      </div>
      <div className='filter-box'>
        <div className='filter-dropdown'>
          <select className='filter-select' id='job-level' name='j0b-level'>
            <option value='0'>Job Level</option>
            <option value='1'>Junior</option>
            <option value='2'>Senior</option>
            <option value='3'>Mid-Level</option>
            <option value='4'>Entry-Level</option>
          </select>
          <select name="job-function"  id="job-function" className='filter-select'>
            <option value='0'>Job Function</option>
            <option value='1'>Accounting</option>
            <option value='2'>IT</option>
            <option value='3'>Advertising</option>
            <option value='4'>Education</option>
          </select>
          <select name="Job Employment" id="job-employment" className='filter-select'>
            <option value='0'>Employment</option>
            <option value='1'>Full-Time</option>
            <option value='2'>Part-Time</option>
            <option value='3'>Contract</option>
            <option value='4'>Internship</option>
          </select>
          <select name="Job-location" className='filter-select' id="job-location">
            <option value='0'>Location</option>
            <option value='1'>US</option>
            <option value='2'>India</option>
            <option value='3'>UK</option>
            <option value='4'>Landon</option>
          </select>
          <select name="Education" className='filter-select' id="education">
            <option value='0'>Education</option>
            <option value='1'>Bachelor</option>
            <option value='2'>Master</option>
            <option value='3'>PhD</option>
            <option value='4'>High School</option>
          </select>
        </div>
        <div className='filter-chosen'>
          <div className='chosen-card'>
            Remote <i className='fas fa-times-circle'></i>
          </div>
          <div className='chosen-card'>
            Full-Time <i className='fas fa-times-circle'></i>
          </div>
          <div className='chosen-card'>
            Mid-Level <i className='fas fa-times-circle'></i>
          </div>
          <div className='chosen-card'>
            Entry-Level <i className='fas fa-times-circle'></i>
          </div>
        </div>
      </div>
      <section  className='job-list' id='jobs'>
        <div className='job-card'>
          <div className='job-name'>
            <img src="https://www.expertia.ai/logo-expertia.png" alt="" className='job-profile' />
            <div className='job-detail'>
              <h4>Expertia</h4>
              <h3>Software Engineer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='job-lable'>
            <a href="#" className='lable-1'>HTML</a>
            <a href="#" className='lable-2'>CSS</a>
            <a href="#" className='lable-3'>JavaScript</a>
            <a href="#" className='lable-4'>React</a>
          </div>
          <div className='job-posted'>
            <p>Posted: <span>1 day ago</span></p>
            <p>Location: <span>Noida</span></p>
          </div>
        </div>
        <div className='job-card'>
          <div className='job-name'>
            <img src="https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg" alt="" className='job-profile' />
            <div className='job-detail'>
              <h4>MicroSoft</h4>
              <h3>Software Developer Engineer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='job-lable'>
            <a href="#" className='lable-1'>HTML</a>
            <a href="#" className='lable-2'>CSS</a>
            <a href="#" className='lable-3'>JavaScript</a>
            <a href="#" className='lable-4'>React</a>
          </div>
          <div className='job-posted'>
            <p>Posted: <span>2 day ago</span></p>
            <p>Location: <span>Banglore</span></p>
          </div>
        </div>
        <div className='job-card'>
          <div className='job-name'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png" alt="" className='job-profile' />
            <div className='job-detail'>
              <h4>Infosys</h4>
              <h3>System Engineer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='job-lable'>
            <a href="#" className='lable-1'>HTML</a>
            <a href="#" className='lable-2'>CSS</a>
            <a href="#" className='lable-3'>JavaScript</a>
            <a href="#" className='lable-4'>React</a>
          </div>
          <div className='job-posted'>
            <p>Posted: <span>5 min ago</span></p>
            <p>Location: <span>Pune</span></p>
          </div>
        </div>
        <div className='job-card'>
          <div className='job-name'>
            <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" className='job-profile' />
            <div className='job-detail'>
              <h4>Amazon</h4>
              <h3>Software Engineer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='job-lable'>
            <a href="#" className='lable-1'>HTML</a>
            <a href="#" className='lable-2'>CSS</a>
            <a href="#" className='lable-3'>JavaScript</a>
            <a href="#" className='lable-4'>React</a>
          </div>
          <div className='job-posted'>
            <p>Posted: <span>an hour ago</span></p>
            <p>Location: <span>Noida</span></p>
          </div>
        </div>
        <button className='job-more'>More Job List</button>
      </section>
      <section className='join'>
        <div className='section-title'>
          <h2>Join the community</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <button className='join-button'>Join Now</button>
      </section>
      <section className='feacture' id='companies'>
        <h1 className='section-title'>
          Companies
        </h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <div className='feacture-wrapper'>
          <div className='feacture-card'>
            <img src="https://www.expertia.ai/logo-expertia.png" alt="" className='feacture-profile' />
            <p>Expertia</p>
            <button className='feacture-button'>View 2 jobs</button>
          </div>
          <div className='feacture-card'>
            <img src="https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg" alt="" className='feacture-profile' />
            <p>MicroSoft</p>
            <button className='feacture-button'>View 3 jobs</button>
          </div>
          <div className='feacture-card'>
            <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" className='feacture-profile' />
            <p>Amazon</p>
            <button className='feacture-button'>View 2 jobs</button>
          </div>
          <div className='feacture-card'>
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="" className='feacture-profile' />
            <p>Apple</p>
            <button className='feacture-button'>View 3 jobs</button>
          </div>
        </div>
      </section>






    </div>
  );
}

export default App;
