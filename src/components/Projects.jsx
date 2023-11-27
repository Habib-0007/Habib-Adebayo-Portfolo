import ProjectsCard from "./ProjectsCard";

let Projects = () => {
	return (
		<section className="mt-16 px-2 mb-10" id="projects">
			<div className="flex justify-center items-center flex-col">
				<span
					className="block px-8 py-3 border-2 border-purple-500
            text-purple-500 font-bold text-center text-2xl"
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
