import React from "react";
import CreateCommunityForm from "../components/CreateCommunityForm";

const Feeds = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);

  return( 
  <div className="">
    {/* SideBar */}
    <section className="">
     <h2 className="text-6xl mt-4 text-center">Join Our Communities</h2>
     <p className="text-2xl text-center text-gray-400 my-2.5">Discover and join amazing communities where you can connect, share, and grow together.</p>
   <div className="flex justify-center mt-8">
     <button onClick={handleOpen} className="bg-black text-white px-4 py-2 rounded mt-4">
        Create a Community
      </button>
   </div>
    </section>
    
    <CreateCommunityForm isOpen={isOpen} onClose={handleClose} />
  </div>
  );
};

export default Feeds;
