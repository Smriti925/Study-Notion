import React from "react";
import NotionImg from "../assets/NotionImg.png";

function About() {
  return (
    <div className="p-5 lg:p-40 flex flex-col md:flex-row">
      <img
        src={NotionImg}
        alt="Study Notion"
        className="md:w-1/2 h-auto bg-gray-600 rounded-3xl mb-2"
      />
      <div className="md:pl-8 flex items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">About Study Notion</h1>
          <p className="text-lg text-justify">
            Study Notion is an innovative learning platform that aims to
            revolutionize the way you study and organize your educational
            materials. Our mission is to provide students with a comprehensive
            set of tools and resources to enhance their learning experience and
            boost their academic success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
