let About = () => {
   return (
      <section className="mt-16 px-3" id="about"data-aos="fade-up"
         data-aos-delay="200"
         data-aos-duration="1000"
         data-aos-easing="ease-in">
         <div className="flex justify-center items-center flex-col">
            <span
               className="block px-8 py-3 border-2 border-purple-500
            text-purple-500 font-bold text-center text-2xl"
            >
               About Me
            </span>
            <p className="text-xl mt-4 font-medium text-left">
               I'm <span className="text-purple-500 text-center">Habib</span>, a
               Junior Frontend Developer with a passion for crafting engaging
               web experiences. Proficient in{" "}
               <span
                  className="text-purple-500
               text-center"
               >
                  HTML
               </span>
               ,{" "}
               <span
                  className="text-purple-500
               text-center"
               >
                  CSS
               </span>
               ,{" "}
               <span
                  className="text-purple-500
               text-center"
               >
                  JavaScript
               </span>
               ,{" "}
               <span
                  className="text-purple-500
               text-center"
               >
                  React
               </span>
               , and{" "}
               <span className="text-purple-500 text-center">TailwindCSS</span>,
               I thrive on the intersection of creativity and technology. My
               journey into web development was driven by a fascination with the
               digital world's potential. With a solid foundation in HTML and
               CSS, I ensure elegant and accessible user interfaces. JavaScript
               fuels my desire for interactivity, enabling me to create dynamic
               web solutions. React, with its component-based architecture, is
               my playground for building seamless, fast, and user-friendly web
               applications. Tailwind CSS streamlines my design process,
               allowing me to craft visually appealing layouts efficiently. I
               bridge the gap between aesthetics and functionality. As a
               continuous learner, I embrace challenges and stay updated with
               industry trends. I'm excited to contribute my skills to
               innovative projects and engage with the vibrant web development
               community. Let's connect and explore the endless possibilities of
               the web together
            </p>
         </div>
      </section>
   );
};

export default About;
