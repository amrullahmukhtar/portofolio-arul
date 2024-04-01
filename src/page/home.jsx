import ProjectList from "../componen/project";
import PP from "../assets/pp.png";
function Home() {
  return (
    <>
      <div className="w-100 justify-between flex  bg-white border rounded-lg my-1">
        <div className="intro">
          <span>Hi 👋..</span>
          <p>Welcome to my porto..</p>
          <p>I'm Arul..</p>
          <p>I build thing for web..</p>
        </div>

        <img
          className="mr-5 my-2 max-w-20 max-h-25 object-cover rounded-lg "
          src={PP} // ini karena variabel
          alt=""
        />
      </div>

      <center>
        <div className="caption">
          <span className="my-5 text-lg font-bold">Project</span>
          <span className="text-sm my-2">Things I've build so far</span>
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
