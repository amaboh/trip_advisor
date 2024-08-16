
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className=" font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">Discover the world hinden Gems:</span>{" "}
        Ai Personalized Travel plans just for U:
        <p className="text-xl text-gray-500">
        
          Get personalized travel plans like a celebrity visiting a country with
          your interests and budget.
        </p>
      </h1>
      <Link to={'/create-trip'}>
       
        <Button>Get started. Its free!</Button>
      </Link>
    </div>
  );
};
