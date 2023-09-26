let Contact = () => {
   return (
      <section className="mt-16 px-3 mb-8" id="contact" data-aos="fade-up"
         data-aos-delay="200"
         data-aos-duration="1000"
         data-aos-easing="ease-in">
         <div className="flex justify-center items-start flex-col">
            <span
               className="block px-8 py-3 border-2 border-purple-500
            text-purple-500 font-bold text-center text-2xl mx-auto"
            >
               Contact Me
            </span>
            <div className="mt-4">
               <h4 className="font-bold text-xl text-left">Let's Connect</h4>
               <p className="text-lg">
                  Let's connect and collaborate on your next project for a
                  successful partnership!
               </p>
               <div className="flex flex-col gap-4 mt-2">
                  <p className="text-md">
                     <i className="fa fa-envelope-o mr-3 text-xl"></i>
                     adebayohabib7@gmail.com
                  </p>
                  <p className="text-md">
                     <i className="fa fa-phone mr-3 text-xl"></i>
                     +234 916 840 3177
                  </p>
                  <p className="text-md">
                     <i className="fa fa-whatsapp mr-3 text-xl"></i>
                     +234 901 916 6356
                  </p>
               </div>
            </div>
         </div>
         <div className="mt-8 flex justify-start items-center gap-5">
            <a
               href="https://www.facebook.com/habibopeyemi.adebayo"
               className="text-3xl"
            >
               <i className="fa fa-facebook"></i>
            </a>

            <a href="https://twitter.com/Habib__001" className="text-3xl">
               <i className="fa fa-twitter"></i>
            </a>

            <a href="https://www.github.com/Habib-0007" className="text-3xl">
               <i className="fa fa-github"></i>
            </a>

            <a href="https://wa.me/+2349019166356" className="text-3xl">
               <i className="fa fa-whatsapp"></i>
            </a>
         </div>
      </section>
   );
};

export default Contact;
