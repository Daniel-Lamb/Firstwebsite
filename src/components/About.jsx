import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a student at the University of Maryland, studying Computer Engineering.  I like to be involved in campus life - I am a part of the QUEST Honors Program, University Honors
          Program, and I play intramural sports with friends.  I am also on the board for QUESTech, where we get to plan events to get others more involved in exploring the world of tech!
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
