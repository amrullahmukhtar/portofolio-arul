export default function ProjectList() {
  const project = [
    {
      name: "OLX",
      img_url:
        "https://i.pinimg.com/236x/76/a0/55/76a0559e38785778f7204968d466a98b.jpg",
    },
    {
      name: "Mitra Sepulu",
      img_url:
        "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
    },
    {
      name: "Mitra Sepulu",
      img_url:
        "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
    },
    {
      name: "Mitra Sepulu",
      img_url:
        "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
    },
  ];
  return (
    <div className="flex overflow-x-auto w-full px-5">
      {project.map((val, key) => (
        <Project key={key} {...val} />
      ))}
    </div>
  );
}

export function Project({ name, img_url }) {
  return (
    <div className="mx-3 min-w-40 bg-white flex flex-col justify-center items-center overflow-hidden rounded-xl ">
      <img
        className="max-w-[160px] aspect-square object-cover"
        src={img_url}
        alt=""
      />

      <p className="project1 text-center font-bold w-[160px] border-t-4">{name}</p>
    </div>
  );
}
