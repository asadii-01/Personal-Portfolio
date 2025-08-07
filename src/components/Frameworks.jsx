import { OrbitingCircles } from "./OrbitingCircles";
export function Frameworks() {
  const skills = [
    "cplusplus",
    "csharp",
    "css3",
    "git",
    "github",
    "html5",
    "javascript",
    "react",
    "tailwindcss",
    "mysql",
    "mongodb",
    "threejs",
    "electron",
    "unity",
    "vitejs",
    "nextjs",
    "expressjs",
    "nodejs",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => {
  return <img src={src} className="rounded-sm duration-200 hover:scale-110" />;
};
