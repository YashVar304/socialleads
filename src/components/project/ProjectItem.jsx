import Button from "../Button";
function ProjectItem({ project, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse
          ? "md:flex-row-reverse md:bg-gradient-to-l md:from-[#fad02c] dark:md:via-[#14081e] md:via-[#f3f4f6] md:to-[#f3f4f6] dark:md:to-[#14081e] "
          : "md:bg-gradient-to-r md:from-[#fad02c] dark:md:via-[#14081e] dark:md:to-[#14081e] md:via-[#f3f4f6] md:to-[#f3f4f6]"
      } items-center w-full md:px-24 py-6 rounded-full `}
    >
      <div
        className={`w-full md:w-1/2 ${reverse ? "md:flex md:justify-end" : ""}`}
      >
        <img
          src={project.photo}
          alt={`${project.name} project`}
          className="w-full max-w-[300px] h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 md:p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-2 dark:text-[#f3f4f6]">
          {project.name}
        </h3>
        <p className="text-lg mb-4 text-gray-400">{project.description}</p>
        <Button text="View Project" />
      </div>
    </div>
  );
}

export default ProjectItem;
