import React, { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className="container d-flex vh-100">
      <div className="row">
        <div className="col-12 col-lg-4 align-self-center">
          <div id="welcome" className="text-center">
            <h1>Welcome</h1>
          </div>
        </div>
        <div className="col-12 col-lg-8 align-self-center">
          <span>Hey, I'm Christian. I am a computer science student at
            Arizona State University and will be graduating in december 2023.
            I orginially was going to school for civil engineering but decided to
            take CSE 100, Principles of Programming with C++, as an elective and knew immediatley that
            some kind of programming is what I wanted to do. I am currently enrolled in a full stack web development
            bootcamp through the University of Minnesota that will be completed in November 2023. The
            bootcamp has allowed me to greatly improve my skills in web development and has
            given me the oppurtunity to be proficcient in both the front end and back end of
            web development. I have learned skills such React, Handlebars, SQL, and MobgoDB .
          </span>
        </div>
      </div>
    </div>

  );
}