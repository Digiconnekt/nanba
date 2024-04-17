/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-primary">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="my-4 text-gray-500">We can't find that page.</p>

          <Button variant="outline" asChild>
            <NavLink to={"/"}>Back To Home</NavLink>
          </Button>
        </div>
      </div>
    </>
  );
};

export default index;
