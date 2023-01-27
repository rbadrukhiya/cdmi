import logo from './logo.svg';
import './App.css';

const mydata={
  color:'blue'
}
function App() {
  return (

    <>



      <div class="main">

        <div class="container">
          <div class="info">
            <a herf="#" id="ia" style={{ color: "white" }}>info@cdmi.in</a>
            <a herf="#" id="ia">Verify Certificate</a>
            <a herf="#" id="it">HAVE ANY QUESTION ?+91 90333 16003</a>
          </div>

        </div>
        {/* main menu section start */}
        <div class="main_menu">
          <div class="container">
            <ul class="flex">
              <img src={require('./image/logo.png')}></img>

              <li id="mf" style={{ color: 'orange' }}><a herf="#" >HOME</a></li>
              <li class="mega">
                <a herf="#">COURCES</a>
                <div class="mega_menu">
                  <div class="mega_div">
                    <div class="mega_items">
                      <h4>MULTIMEDIA COURSES</h4>
                      <ul>
                        <li><a herf="#">Master In Web Design</a></li>
                        <li><a herf="#">Master in UI/UX Design</a></li>
                        <li><a herf="#">Master In 2D/3D Animation</a></li>
                        <li><a herf="#">Master In Android Development</a></li>
                        <li><a herf="#">Master In Flutter App Development</a></li>
                        <li><a herf="#">Master In Flutter Development</a></li>
                        <li><a herf="#">Master In Web Development</a></li>
                        <li><a herf="#">Master In Full Stack Development</a></li>
                        <li><a herf="#">Master In Game Development</a></li>
                        <li><a herf="#">Master In React Native <br></br>Development</a></li>
                        <li><a herf="#"><h4 class="mega1">CIVIL-MECH. ENGINEERING</h4></a></li>
                        <li><a herf="#">AutoCAD (Civil)</a></li>
                        <li><a herf="#">3Ds Max</a></li>
                        <li><a herf="#">Google SketchUp</a></li>
                        <li><a herf="#">Lumion</a></li>
                        <li><a herf="#">Revit Architecture</a></li>
                        <li><a herf="#">Interior & Exterior Design</a></li>
                        <li><a herf="#">AutoCAD(Mech.)</a></li>
                        <li><a herf="#">SolidWorks</a></li>
                        <li><a herf="#">Creo Parametrics 2.0</a></li>
                      </ul>
                    </div>
                    <div class="mega_items">
                      <h4>UI/UX & GRAPHICS DESIGN</h4>
                      <ul>
                        <li><a herf="#">Advance Graphics Design</a></li>
                        <li><a herf="#">Video Editing</a></li>
                        <li><a herf="#">Maya Pro</a></li>
                        <li><a herf="#">Blender 3D Design</a></li>
                        <li><a herf="#">2D/3D Game Design</a></li>
                        <li><a herf="#"><h4 class="mega2">BUSINESS DEVELOPMENT</h4></a></li>
                        <li><a>Digital Marketing</a></li>
                        <li><a>Personality Development</a></li>
                        <li><a>Entrepreneurship Development</a></li>
                        <li><a>Corporate English</a></li>
                        <li><a>Social Media Marketing</a></li>
                        <li><a>Master In Data Science</a></li>
                      </ul>

                    </div>
                    <div class="mega_items">
                      <h4><a herf="">PROGRAMMING IT</a></h4>
                      <ul>
                        <li><a herf="#">C Programming</a></li>
                        <li><a herf="#">C++ Programming</a></li>
                        <li><a herf="#">Java Programming</a></li>
                        <li><a herf="#">IOS</a></li>
                        <li><a herf="#">Advance PHP</a></li>
                        <li><a herf="#">Laravel</a></li>
                        <li><a herf="#">Wordpress</a></li>
                        <li><a herf="#"></a>CodeIgniter</li>
                        <li><a herf="#"><h4 class="mega3">SHORT TERM COURSES</h4></a></li>
                        <li><a>Adobe Illustrator</a></li>
                        <li><a>Adobe XD</a></li>
                        <li><a>Tally Accounting</a></li>
                        <li><a>CCC- Basic Computer Course</a></li>
                        <li><a>Photoshop</a></li>
                        <li><a>CorelDraw</a></li>

                      </ul>

                    </div>
                    <div class="mega_items">
                      <h4><a herf="#">TRENDY COURSES</a></h4>
                      <ul>
                        <li><a herf="#">Node js</a></li>
                        <li><a herf="#">Angular js</a></li>
                        <li><a herf="#"> React JS</a></li>
                        <li><a herf="#">Ethical Hacking</a></li>
                        <li><a herf="#">Unity 3D</a></li>
                        <li><a herf="#">Python  </a></li>
                        <li><a herf="#">React Native</a></li>
                        <li><a herf="#">Desktop App Development</a></li>
                        <li><a herf="#">Advanced ASP.net development</a></li>
                      </ul>

                    </div>
                  </div>
                </div>



              </li>
              <li><a herf="#">COLLEGE COURCES</a></li>
              <li><a herf="#">ACTIVITIES</a>
                <ul class="sub_menu">
                  <li><a herf="#">Gallery</a></li>
                  <li><a herf="#">Events</a></li>
                </ul>
              </li>
              <li><a herf="#">BLOG</a></li>
              <li><a herf="#">KNOW US</a>
                <ul class="sub_menu">
                  <li><a herf="#">About US</a></li>
                  <li><a herf="#">Success Stories</a></li>
                  <li><a herf="#">Placement Partners</a></li>
                </ul>
              </li>
              <li><a herf="#">GET IN TOUCH</a></li>
              <li><a herf="#">STUDENT ZONE</a>
                <ul class="sub_menu">
                  <li><a herf="#">Student Login</a></li>
                  <li><a herf="#">Showcase</a></li>

                </ul></li>
            </ul>
          </div>

        </div>
        {/* main menu section end */}
        {/* message section start */}
        <div class="message-box">

        </div>

        {/* message section end */}
        {/* slider section start */}

        <div class="slider_section">
          <img src={require("./image/sl.jpg")}></img>
        </div>
        {/* slider section end */}

      {/* offered cources section start */}
        <div class="offered">
          <div class="container">
            <p>CREATIVE COURCES</p>
            <h1><b>OFFERED COURCES</b></h1>
            <div class="flex">
              <div class="o-img1">
                <video autoPlay loop muted height="300px" width="100%" >
                  {/* <source src="./video/o-1.mp4" type="video/mp4"></source> */}
                  <source src="https://cdmi.in/course_category/multimedia-training-institute.mp4" type="video/mp4"></source>
                </video>

                <h2><b>Multimedia Courses</b></h2>
                <button>Know More..!</button>
              </div>
              <div class="o-img2">
                <video autoPlay loop muted height="300px" width="100%" >
                  {/* <source src="./video/o-2.mp4" type="video/mp4"></source> */}
                  <source src="https://cdmi.in/course_category/graphics-animation-course.mp4" type="video/mp4"></source>
                </video>
                <h2><b>Ui/Ux & Graphics Design</b></h2>
                <button>Know More..!</button>
              </div>
              <div class="o-img3">
                <video autoPlay muted loop height="300px" width="100%" >
                  {/* <source src="./video/o-3.mp4" type="video/mp4"></source> */}
                  <source src="https://cdmi.in/course_category/it-training-institute.mp4" type="video/mp4"></source>
                </video>
                <h2><b>Programming IT</b></h2>
                <button>Know More..!</button>
              </div>
            </div>
            <div class="flex">
              <div class="o-img4">
                <video autoPlay muted loop height="300px" width="100%" >
                  {/* <source src="./video/o-4.mp4" type="video/mp4"></source> */}
                  <source src="https://cdmi.in/course_category/letest-technology-course.mp4" type="video/mp4"></source>
                </video>

                <h2><b>Trendy Courses</b></h2>
                <button>Know More..!</button>
              </div>
              <div class="o-img5">
                <video autoPlay muted loop height="300px" width="100%" >
                  {/* <source src="./video/o-5.mp4" type="video/mp4"></source> */}
                  <source src="https://cdmi.in/course_category/civil-engineering-course.mp4" type="video/mp4"></source>
                </video>
                <h2><b>Civil-Mech. Engineering</b></h2>
                <button>Know More..!</button>
              </div> 
              <div class="o-img6">
                <video autoPlay loop muted height="300px" width="100%" >
                  {/* <source src="./video/o-6.mp4" type="video/mp4"></source> */}
                  <source src="https://cdmi.in/course_category/mechanical-engineering-course.mp4" type="video/mp4"></source>
                </video>
                <h2><b>Business Development</b></h2>
                <button>Know More..!</button>
              </div>
            </div>
            <div class="o-viewall" align="center">
              <button>View All Cources</button>
            </div>

          </div>
        </div>

        {/* offered cources section end */}


        {/* about section start */}

        <div class="about-section flex">
          <div class="about-content">

            <p class="about-heading"> ABOUT US</p>
            <b>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</b>
            <p class="about-content-p">Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design,<br></br> Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses <br></br>with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014<br></br> with the goal to help students, working professionals and other interested candidates get that dream<br></br> job or open that desired freelance business in some of the most popular Computer / IT fields. Our<br></br> aim is to ease the hiring process for businesses and organizations by providing work-ready <br></br>professionals who can contribute greatly to their success. Since then, we have worked hard to<br></br> achieve this goal and dedicated our time and resources to train students extensively.</p>
            <button class="about-button">Enroll Now..!</button>
          </div>
          <div>
            <div class="about-img">
        
              <img src={require("./image/about-us.jpg")}></img>
             
            </div>
          </div>


        </div>
        {/* about section end */}

        {/* static value section start */}

        <div class="static">

          <div class="container">
            <div class="flex">

              <img src={require("./image/s-1.png")} id="simg"></img>
              <img src={require("./image/s-2.png")} id="simg"></img>
              <img src={require("./image/s-3.png")} id="simg"></img>
              <img src={require("./image/s-4.png")}></img>
            </div>
            <div class="flex" id="s-content">

              <h1 id="sh1">8000+</h1>
              <h1 id="sh1">10+</h1>
              <h1 id="sh1">60+</h1>
              <h1 id="sh2">4000+</h1>
            </div>
            <div class="flex">
              <p id="s-c-1"><b>HAPPY STUDENTS</b></p>
              <p id="s-c-2">CERTIFICATION APPROVAL</p>
              <p id="s-c-3"><b>CERTIFIED TEACHERS</b></p>
              <p id="s-c-4"><b>STUDENTS PLACED</b></p>
            </div>
          </div>
          {/* <img src={require("./image/keyboard.jpg")}></img> */}

        </div>


        {/* static value section end */}

        {/* happy student section start */}

        <div class="h-student">
          <div class="container">
            <div class="flex">
              <div class="h-content">
                <p class="h-head1">
                  HAPPY STUDENTS
                </p>
                <h1 class="h-m-heading">
                  ALUMNI SPEAK
                </h1>
                <div class="flex">
                  <div class="h-icon1">
                  </div>
                  <div class="h-icon2"></div>
                  <div class="h-icon3"></div>
                </div>
                <div class="h-l-content">
                  <p>I’ve completed  my Web Design Course   Multimedia Technology from<br></br> Creative Design  & Multimedia Institute(CDMI). This Institute is a really<br></br> good place to learn a lot. The staff and faculty members are really<br></br> friendly and they try to help us in every way possible to grow and excel in<br></br> life.
                  </p>
                </div>
                <div class="flex">
                  <div class="h-l-img">
                    <img src={require("./image/jigar.jpeg")}></img></div>
                  <div class="h-name">Kansagara Jigar</div>
                  <p class="h-l-p"><i class="h-l-c">Web Designer</i><i> @ serverwala</i></p>
                </div>
              </div>
              <div class="h-img">
                <img src={require("./image/shape.png")}></img>

              </div>
            </div>cd cdmi
          </div>
        </div>

        {/* happy student section end */}

        {/* why choose creative section start */}
        <div class="w-choose">
          <div class="container">
            <p class="w-heading">READ OUR DIFFERENCE</p>
            <h1 class="w-m-heading"><b>
              WHY CHOOSE CREATIVE </b></h1>
            <div class="flex">
              <div class="w-first">
                <img src={require("./image/w-1.png")}></img>
                <h2>Industry Experts As Trainers</h2>
                <p>Our trainers have 5+ years of industry <br></br>experience coupled with extensive<br></br> research and analysis.</p>
              </div>
              <div class="w-second">
                <img src={require("./image/why-choose.png")}></img>

                <h2>Latest Curriculum</h2>
                <p>We Provides latest curriculum for all<br></br> courses which designed in such a way <br></br>that Students will get full knowledge<br></br> within a short time</p>

              </div>
              <div class="w-third">
                <img src={require("./image/w-3.png")}></img>
                <h2>Latest Technology</h2>
                <p>We strive to let you have a solid <br></br>foundational knowledge of technologies <br></br>shaping the IT World today.</p>
              </div>
            </div>
            <div class="flex">
              <div class="w-fourth">
                <img src={require("./image/w-4.png")}></img>
                <h2>Interview Assistance</h2>
                <p>At the end of each training,our training <br></br>instructor will go through the possible<br></br> technical questions you may be asked.</p>
              </div>
              <div class="w-fifth">
                <img src={require("./image/w-5.png")}></img>
                <h2>Free Upgradation
                </h2>
                <p>We will be provided free upgradation for <br></br>any newer version of the course you <br></br>have.</p>
              </div>
              <div class="w-six">
                <img src={require("./image/w-6.png")}></img>
                <h2>Lifetime Support</h2>
                <p>We will provide you lifetime support on <br></br>all the courses you learned from us.</p>
              </div>
            </div>
          </div>

        </div>
        {/* why choose creative section end */}

        {/* our partners section start */}
        <div class="our-partners">
          <div class="container">

            <p>STUDENT PLACEMENT </p>
            <h1>OUR RECRUITMENT PARTNERS</h1>
            <div class="flex">
              <div class="our-img1">
                <img src={require("./image/ou1.png")}></img>
              </div>
              <div class="our-img2">
                <img src={require("./image/our2.png")}></img>
              </div>
              <div class="our-img3">
                <img src={require("./image/our3.png")}></img>
              </div>
              <div class="our-img4">
                <img src={require("./image/our4.png")}></img>
              </div>
              <div class="our-img5">
                <img src={require("./image/our5.png")}></img>
              </div>
              <div class="our-img6">
                <img src={require("./image/our6.png")}></img>
              </div>
            </div>
            <h2 class="our-demand">Our Demanded Course -</h2>
            <div class="flex ">
              <button>Php Institute In Katargam</button>
              <button>Nodejs Training Course</button>
              <button> Advance Java Training Institute In Katargam </button>
              <button> Coreldraw Training Course</button>
              <button> Android Training In Varachha</button>
              <button> Advance Java Training Course</button>
            </div>
            <div class="flex">
              <button>Python Training Institute In Adajan</button>
              <button>Best Graphics Design Training Institute In Surat</button>
              <button> Google Sketchup Civil Training Course</button>
              <button> Latest Technology Course Training Institute In Varachha</button>
            </div>
            <div class="flex">
              <button>Computer Training Institute In Surat</button>
              <button> Computer Training Institute In Katargam</button>
              <button> Video Editing Training Institute In Surat </button>
              <button> Photoshop Training Institute</button>
              <button> Best C++ Programming Language Training Institute</button>
            </div>
            <h6 class="our-show">
              show more
            </h6>
          </div>
        </div>
      </div>


      {/* our partners section end */}

      {/* footer section start */}
      <div class="footer">
        <div class="container">
          <div class="flex">
            <div class="f1">
              <div class="footer-logo">
                <img src={require("./image/logo-removebg-preview.png")}></img>
                <p> Creative Design and Multimedia Institute<br></br> is leading computer training institute in<br></br> surat. We offers government approved<br></br> computer training courses in Surat.</p>
                <h4>FOLLOW US ON</h4>
              </div>
            </div>
            <div class="f2">
              <h3>FEATURE LINKS</h3>
              <li>About Us</li>
              <li>Blogs</li>
              <li>Join Us</li>
              <li>Company Login</li>
              <li>Certificate Verification</li>
            </div>
            <div class="f3">
              <h3>TRENDY COURSES</h3>
              <li>Python course training</li>
              <li>Node JS course training</li>
              <li>Angular JS course <br></br>training</li>
              <li>React JS course training</li>
              <li>Unity 3D course training</li>
              <li>Ethical Hacking course<br></br> training</li>
              <li>React Native course<br></br> training</li>
              <li>Desktop App <br></br>Development course <br></br>training</li>
              <li>Advanced ASP.net<br></br> development course<br></br>training</li>
            </div>
            <div class="f4">
              <h3>OUR BRANCHES</h3>
              <h4>HEAD OFFICE - YOGICHOWK</h4>
              <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk,<br></br> Varachha, Surat</p>
              <p>Mo: </p>  <p class="mobile">+91 90333 16003,</p>
              <h4>BRANCH 1 - KATARGAM</h4>
              <p>327-334, 3rd Floor, Laxmi Enclave, Opp. Gajera School, <br></br>Katargam, Surat</p>
              <p>Mo: </p>  <p class="mobile">+91 90 3333 5009</p>
              <h4>BRANCH 2 - MOTA VARACHHA</h4>
              <p>B 201-203, 2nd Floor, Aditya Complex, VIP Circle, Utran
                Mota Varachha,Surat</p>
              <p>Mo: </p>  <p class="mobile">+91 945 945 9673

              </p>
              <button><b><span>Get Virtual Tour</span></b></button>
            </div>
          </div>
        </div>
      </div>
      {/* footer section end */}


      {/* copyright section start */}

      <div class="copyright-section">
        <div class="container">
          <b>© 2022 All Rights Reserved by Creative Design & Multimedia Institute.</b>
        </div>
      </div>


      {/* copyright section end */}








    </>

  );
}

export default App;
