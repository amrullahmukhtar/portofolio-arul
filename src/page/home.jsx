import ProjectList from "../componen/project";
import PP from "../assets/pp.png";
function Home() {
  return (
    <>
      <div className="w-100 h-[400px] justify-center flex  bg-white border rounded-lg my-1">
        <div className="intro">
          <span className="text-xl mt-3 text-center">Hi 👋.. I'm Arul</span>
          <h1 className="text-5xl my-3 w-100 text-center">
            Welcome to my porto
          </h1>
          <h1 className="text-2xl my-3 w-100 text-center">
            I build thing for web..
          </h1>
        </div>

        {/* <img
          className="mr-5 my-2 max-w-20 max-h-25 object-cover rounded-lg "
          src={PP} // ini karena variabel
          alt=""
        /> */}
      </div>

      <center>
        <div className="caption">
          <span className="project my-5 text-5xl w-100 text-centerg font-bold">
            Project
          </span>
          <span className="text-2xl mb-10 w-100 text-center">
            Things I've build so far
          </span>
        </div>
      </center>

      <ProjectList />
      <div className="w-full h-10 flex justify-end items-center">
        <a className="text-lg text-zinc-500 pr-4" href="">
          Show More...
        </a>
      </div>
    </>
  );
}

export default Home;
