"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Quick-Notes",
    description: "QuickNotes, empowering users to effortlessly create and manage personal notes with titles and content,resembling Google Notes",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/P-ks/Quick-Notes",
    previewUrl: "https://pks-quick-notes.vercel.app/",
  },
  {
    id: 2,
    title: "To-Do-List",
    description: "Orchestrated a To-Do List app,users can chronicle tasks.Instant addition,click to delete, enhance productivity and task management",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/P-ks/To-Do-List",
    previewUrl: "https://pks-todo-list.vercel.app/",
  },
  {
    id: 3,
    title: "Simon-Classic-Game",
    description: "Test your memory and enjoy the fun! Give it a try and beat the high score!",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/P-ks/Simon-Game",
    previewUrl: "https://p-ks.github.io/Simon-Game/",
  },
  {
    id: 4,
    title: "Drum-to-Your-Own-Beat",
    description: "Dive into the rhythm with this interactive drum set instrument.",
    image: "/images/projects/22.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/P-ks/Drum-to-Your-Own-Beat",
    previewUrl: "https://p-ks.github.io/Drum-to-Your-Own-Beat/",
  },
 
  {
    id: 5,
    title: "Dice Game",
    description: "Challenge yourself or friends to see who can roll the highest number and claim victory.",
    image: "/images/projects/33.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/P-ks/Dice-Challenge-Game",
    previewUrl: "https://p-ks.github.io/Dice-Challenge-Game/",
  },
  {
    id: 6,
    title: "My-Portfolio",
    description: "Welcome to my Portfolio, Integrated features like exploring my background, projects, and updates. ",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/P-ks",
    previewUrl: "https://linktr.ee/pks07",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
