import React from "react";
import osv from "../assets/portfolio/osv.png";
import oasis from "../assets/portfolio/oasisgear.png";
import athletics from "../assets/portfolio/UMDAC.png";
import backpack from "../assets/portfolio/backpack.png";
import datathon from "../assets/portfolio/datathon.png";
import vhdl from "../assets/portfolio/vhdl.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: datathon,
      learnMoreLink: "https://github.com/Daniel-Lamb/QUESTech-Datathon",
    },
    {
      id: 2,
      src: athletics,
      learnMoreLink: "https://portfolium.com/entry/process-improvement-for-client",
    },
    {
      id: 3,
      src: vhdl,
      learnMoreLink: "https://github.com/Daniel-Lamb/VerilogDesign",
    },
    {
      id: 4,
      src: oasis,
      learnMoreLink: "https://portfolium.com/entry/quest190-oasis-gear",
    },
    {
      id: 5,
      src: osv,
      learnMoreLink: "https://portfolium.com/entry/osv-design",
    },
    {
      id: 6,
      src: backpack,
      learnMoreLink: "https://portfolium.com/entry/pltw-design-and-development-capstone",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, learnMoreLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                style={{ height: "200px", width: "100%" }}
              />
              <div className="flex items-center justify-center">
                <a href={learnMoreLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" style={{ whiteSpace: "nowrap" }}>
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
