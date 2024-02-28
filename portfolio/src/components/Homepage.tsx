import Links from "./SocialLink";

const Home = () => {


    return (
        <section className='main pt-10 px-4'>

          <article className="text-center md:text-left p-5">
            <div className="w-full md:w-1/2 p-3">
               <h1 className='text-white text-3xl font-extrabold sm:lg p-3'>Fullstack Web/<br />
               Machine learning developer</h1>
               <h4 className="pl-3"> I am  Kelechi, a passionate and reliable software developer, navigating the ever-evolving landscape of web development and machine learning </h4>
               <br/>
               <h3 className="p-3 font-bold text-lg">Connect with me &gt; </h3>
               
              <div className="grid place-items-center md:flex md:justify-start">

               <Links/>

              </div>

              <div className="my-5">
                
             </div>

            </div>

          </article>
         
        </section>
      );
}
 
export default Home;