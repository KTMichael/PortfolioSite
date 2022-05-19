import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import resumePDF from "../Gill_Kaitlyn_Resume.pdf";

const ResumeElements = () => {
  return (
    <div id="resumeSections">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div id="techSkills" className="resumeSection">
            <h2>Technical Skills</h2>
            <hr />
            <div className="techSkill">
              <span className="title accent">FRONT END</span> | JavaScript (ES5
              and ES6), React, React Hooks, HTML5, Vanilla CSS, jQuery, Redux,
              Axios
            </div>
            <div className="techSkill">
              <span className="title accent">BACK END</span> | Node.js, Express,
              PostgreSQL, MySQL, RESTful API Development, PHP
            </div>
            <div className="techSkill">
              <span className="title accent">TESTING/DEPLOYMENT</span> | Jest,
              Mocha, Chai, React Testing Library, k6, loader.io, AWS: EC2/AWI
            </div>
            <div className="techSkill">
              <span className="title accent">DEVELOPERS TOOLS</span> | Vim, Git,
              GitHub, npm, Webpack, Babel, Agile Methodology, TDD, scrum
            </div>
            <div className="techSkill">
              <span className="title accent">LIBRARIES/FRAMEWORKS</span> |
              React.js, Material-UI, Font Awesome, Underscore.js, ESLint,
              fast-csv
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="softEngApp" className="resumeSection">
            <h2>Software Engineering Applications 1/3</h2>
            <hr />
            <div>
              <div>
                <span className="title">
                  <br />
                  <span className="accent">ATELIER FRONT-END </span> | React,
                  Express, Node.js, Axios, Fast-csv, AWS:EC2, CSS |{" "}
                  <span className="accent"> Oct 2021 - Nov 2021</span>
                </span>
              </div>
              <br />
              Full UI & UX redesign of an eCommerce clothing site.
              <br />
              <br />
              <ul>
                <li>
                  <span>
                    Worked as a part of a 4 person team to develop a dynamically
                    rendering ecommerce site.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Wrote unit tests using Jest and React Testing Library to
                    ensure customer business requirements had been met.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Created axios requests to obtain data from API and formatted
                    data to populate the ratings and reviews section.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="softEngApp" className="resumeSection">
            <h2>Software Engineering Applications 2/3</h2>
            <hr />
            <div>
              <div>
                <span className="title">
                  <br />
                  <span className="accent">ATELIER BACK-END </span> | Node.js,
                  Express, PostgreSQL, Axios, AWS:EC2/AMI, k6, loader.io |{" "}
                  <span className="accent"> Nov 2021 - Dec 2021 </span>
                </span>
              </div>
              <br />
              <span id="overview">
                A database and server for Atelier eCommerce site.
              </span>
              <br />
              <br />
              <ul>
                <li>
                  <span>
                    Utilized B-Tree indexing and PostgreSQL JSONs creation and
                    processing functions to create organized query responses,
                    tested queries using k6 and loader.io; with an average of a
                    12 ms response time when obtaining the 1,000,010 product.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Deployed both server and database on separate instances to
                    allow for ease of load balancing and modularization.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Implemented a master-worker load balancing schema with least
                    outstanding requests distribution and scaled via AWSs AMIs,
                    Load Balancers, and Target Groups; capable of handling over
                    1300 requests per second with 60ms latency and less than 1%
                    error rate amongst the 4 deployed servers.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="softEngApp" className="resumeSection">
            <h2>Software Engineering Applications 3/3</h2>
            <hr />
            <div>
              <div>
                <span className="title">
                  <br />
                  <span className="accent">CULTIVATE </span>| React, Node.js,
                  Passport.js, Express, PostgreSQL, Axios, Google Cloud
                  Platform, Docker | <span className="accent">Dec 2021</span>
                </span>
              </div>
              <br />
              Developed a full-stack web app bringing fitness enthusiasts and
              professional coaches together.
              <br />
              <br />
              <ul>
                <li>
                  <span>
                    Implemented Git Feature Branch Workflow and Agile
                    methodology with a team of 9 developers.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Crafted a dynamic UI and UX; deployed microservices inside
                    Kubernetes cluster, thus allowing an initial load of 10,000
                    users.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Used Passport.js with OAuth2 to provide user authentication
                    and login via Google.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="profExp" className="resumeSection">
            <h2>Professional Experience 1/2</h2>
            <hr />
            <div>
              <div>
                <span className="title">
                  <br />
                  <span className="accent">RESEARCH COORDINATOR </span>|
                  University of Washingtons Neurology Department |{" "}
                  <span className="accent">Jan 2020 - Nov 2020</span>
                </span>
              </div>
              <br />
              Obtained and fostered relationships with patients involved in our
              clinical trials.
              <br />
              <br />
              <ul>
                <li>
                  <span>
                    Created and maintained study documents per IRB and FDA
                    guidelines to uphold patient safety and ensure accurate
                    trial data.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Oversaw seven clinical trials simultaneously, including both
                    observational and drug trials to further research on various
                    Neuromuscular diseases.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Developed and implemented a trial setup and maintenance
                    process to maintain organized and thorough trial documents
                    and notes to ensure seamless study handoff.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Became a full-time research coordinator that oversaw and
                    maintained studies at two different Hospitals after one
                    month of starting a temporary position.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="profExp" className="resumeSection">
            <h2>Professional Experience 2/2</h2>
            <hr />
            <div>
              <div>
                <span className="title">
                  <br />
                  <span className="accent">
                    INSURANCE VERIFICATION & MED. RECEPTIONIST{" "}
                  </span>{" "}
                  | Evergreen Heart and Vascular Clinics |{" "}
                  <span className="accent"> Feb 2016 - Mar 2018 </span>
                </span>
              </div>
              <br />
              Maintained patient records and verified patient insurance
              <br />
              <br />
              <ul>
                <li>
                  <span>
                    Wrote departmental training manual for insurance
                    verification. Aided in developing Cerner training manual for
                    hospital-wide use.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Assisted and restored workflow in several areas by training
                    in new skills and offering assistance when I saw
                    opportunities.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    Became a trainer after a month of employment for patient
                    check-in, insurance verification, and medical record
                    maintenance in both the heart and vascular clinics.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="education" className="resumeSection">
            <h2>Education</h2>
            <hr />
            <div className="containerIntroEdu">
              <span className="title">
                <br />
                <span className="accent">Hack Reactor </span> | Advanced
                Software Engineering Immersive Program |
                <span className="accent"> Dec 2021 </span>
              </span>
            </div>
            <div className="containerIntroEdu">
              <span className="title">
                <span className="accent">Bellevue College </span> | Capstone
                completed via University of Washington | BAS Molecular
                Biosciences | <span className="accent"> Jun 2019</span>
              </span>
            </div>
            <div className="containerIntroEdu">
              <span className="title">
                <span className="accent">Bellevue College </span> | A.S
                Molecular Technologies |{" "}
                <span className="accent"> Aug 2017</span>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="downloadCV">
            If you would like to download print my CV, please click the icon
            below!
            <br />
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              <FaDownload
                id="download"
                className="icons"
                title="Download/Print"
              />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ResumeElements;
