const Showcase = () => {
	return (
		<section
			className="px-3 mt-10 flex flex-col md:flex-row md:justify-between md:items-center relative"
			data-aos="fade-up"
			data-aos-delay="200"
			data-aos-duration="1000"
			data-aos-easing="ease-in"
		>
			<div
				className="flex justify-between md:justify-center items-start flex-col text-left
         gap-y-2 md:w-1/2 order-2 md:order-1"
			>
				<p className="text-2xl">Hi, I'm</p>
				<h1 className="font-extrabold text-5xl"> Habib Opeyemi Adebayo </h1>
				<small className="text-purple-500 text-lg font-semibold">
					Frontend developer
				</small>
				<p className="text-[20px] leading-[1.6]">
					As a frontend developer, I'm specialize in creating the user
					interfaces and experiences that makes websites and web applications
					visually appealing and user-friendly. my skills include coding in
					HTML, CSS, and JavaScript to design responsive and interactive
					elements.
				</p>
				<button
					className="text-xl bg-purple-500 rounded px-6 py-2 text-white font-semibold hover:bg-purple-400"
				>
					<a href="mailto:adebayohabib7@gmail.com">Hire Me</a>
				</button>
			</div>
			<div className="w-1/2 block order-1 md:order-2 md:block">
				<img
					src="/Habib.jpg"
					load="lazy"
					alt="Habib's Image"
					className="img md:w-96 md:h-96 rounded-full object-cover md:ms-auto md:border-8 border-purple-500"
				/>
			</div>
		</section>
	);
};

export default Showcase;
