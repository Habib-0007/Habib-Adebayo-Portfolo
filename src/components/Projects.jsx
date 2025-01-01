import ProjectsCard from "./ProjectsCard";

const Projects = () => {
	return (
		<section className="mt-16 px-2 mb-10" id="projects">
			<div className="flex justify-center items-center flex-col">
				<span
					className="block px-8 py-3 border-b-2 border-purple-500 text-black font-bold text-left text-[24px]"
					data-aos="fade-up"
					data-aos-delay="200"
					data-aos-duration="1000"
					data-aos-easing="ease-in"
				>
					Projects
				</span>

				<ProjectsCard />
			</div>
		</section>
	);
};

export default Projects;
