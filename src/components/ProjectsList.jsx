import p from "./p";

const ProjectsList = () => {
	let projects = p();

	return (
		<section className="flex justify-center items-center flex-col mt-[32px]">
			<span
				className="block px-8 py-3 border-b-2 border-purple-500 text-black font-bold text-left text-[24px]"
				data-aos="fade-up"
				data-aos-delay="200"
				data-aos-duration="1000"
				data-aos-easing="ease-in"
			>
				Projects
			</span>

			<div
				className="grid grid-cols-1 md:grid-cols-2 mx-2 mt-10 place-content-center content-center gap-[32px] md:gap-[60px] bg-white"
				data-aos="fade-up"
				data-aos-delay="200"
				data-aos-duration="1000"
				data-aos-easing="ease-in"
			>
				{projects.map((project, index) => (
					<div
						key={index}
						className="box-shad p-[20px] rounded h-full bg-white"
					>
						<div className="flex justify-between items-center">
							<a href={project.github} target="_blank">
								<i className="fab fa-github text-4xl text-purple-500"></i>
							</a>
							<a href={project.url} target="_blank">
								<i className="fa fa-link text-4xl text-purple-500"></i>
							</a>
						</div>
						<h1 className="font-bold text-3xl my-4">{project.name}</h1>
						<p className="text-xl"></p>
						<div className="flex justify-start items-center flex-wrap mt-3 gap-3 w-9/12">
							{project.language.map(lan => (
								<p className="text-xl text-white px-3 py-1 bg-black font-bold">{lan}</p>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectsList;
