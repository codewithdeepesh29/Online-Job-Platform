import { UserButton } from "@clerk/nextjs";

const HomePage = () =>{
  return ( 
    <div>
      <button className="bg-black text-white rounded-custom px-4 py-2 hover:bg-black/80 font-sans">
          Click Me
      </button>

      <UserButton />
    </div>
  ) ;
};

export default HomePage