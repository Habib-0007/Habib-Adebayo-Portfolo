import p from "./p";

const ProjectsList = () => {
	let projects = p();

	return (
		<section className="flex justify-center items-center flex-col">
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

			<div
				className="grid grid-cols-1 md:grid-cols-2 mx-2 mt-10
            place-content-center content-center  gap-6 md:gap-4 bg-white"
				data-aos="fade-up"
				data-aos-delay="200"
				data-aos-duration="1000"
				data-aos-easing="ease-in"
			>
				{projects.map((project, index) => (
					<div
						key={index}
						className="box-shad px-3 py-5 rounded h-full bg-white"
					>
						<div className="flex justify-between items-center">
							<a href={project.github}>
								<i className="fa fa-github text-4xl text-purple-500"></i>
							</a>
							<a href={project.url}>
								<i
									className="fa fa-arrow-right text-2xl text-purple-500
                     py-1 px-2 border-2 border-purple-500"
								></i>
							</a>
						</div>
						<h1 className="font-bold text-3xl my-4">{project.name}</h1>
						<p className="text-xl"></p>
						<div className="flex justify-start items-center flex-wrap mt-3 gap-3 w-9/12">
							<p className="text-xl text-white px-3 py-1 bg-black font-bold">
								HTML5
							</p>
							<p className="text-xl text-white px-3 py-1 bg-black font-bold">
								CSS3
							</p>
							<p className="text-xl text-white px-3 py-1 bg-black font-bold">
								JavaScript
							</p>
							<p className="text-xl text-white px-3 py-1 bg-black font-bold">
								Animate CSS
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectsList;
