import React from "react";
import ProjectPhoto1 from "../../profile.png";
import ProjectPhoto2 from "../../profile.png";
import ProjectItem from "./ProjectItem";

function ProjectsSection() {
  // Sample project data
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: ProjectPhoto1,
    },
    {
      id: 2,
      name: "Project 2",
      description:
        "Sed tincidunt convallis leo, eu vestibulum mi molestie ac. Cras eget luctus nulla. Duis varius justo non velit finibus, quis condimentum est vulputate.",
      photo: ProjectPhoto2,
    },
    {
      id: 3,
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: ProjectPhoto1,
    },
    // Add more projects as needed
  ];

  return (
    <section className="w-full flex flex-col items-center px-20 py-16 ">
      <div className="w-full text-start mb-12">
        <h2 className="text-3xl font-bold inline-block text-transparent bg-gradient-to-r from-[#c31b5f] to-[#fad02c] bg-clip-text  font-sans sm:text-4xl md:text-3xl">
          Showcase
        </h2>
      </div>
      <div className="flex flex-col  ">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
export default ProjectsSection;
