"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><b><u>Languages:</u></b>         JavaScript, Python, Node.js, SQL(Postgre), C/C++, HTML/CSS </li>
        <li><b><u>Frameworks:</u></b>        React, Next.js, TailwindCSS, Express.js, EJS, jQuery, Bootstrap</li>
        {/* <li><b>Design Libraries:</b> Tailwind CSS, Material-UI, Bootstrap</li> */}
        <li><b><u>Developer Tools:</u></b>   Git, GitHub, Vercel, VS Code, Visual Studio, Postman, Jupyter</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>B.Tech</b> in Computer Science and Technology <b>(8.8 GPA)</b></li>
        <p>University of Engineering and Management, Kolkata</p> 
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Strengthening technical proficiency with <b>Full Stack Development</b> certification on Udemy.</li>
        <li>Udemy certified <b>Python Developer.</b></li>
        <li>Exhibited at <b>Kolkata’s Smart Maker Festival</b>, showcasing innovative contributions.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={900} />
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a web developer, I'm constantly driven by the evolving landscape of technology.
          My expertise spans across multiple languages and frameworks and a range of front-end technologies.
          With a keen interest in venturing into full-stack development and system design,
          I'm committed to harnessing these skills to craft comprehensive solutions tailored to real-world challenges.
          Eager to collaborate, innovate, and deliver, I'm always on the lookout for opportunities to merge my technical proficiency with creative problem-solving. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
