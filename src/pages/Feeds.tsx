import React from "react";
import CreateCommunityForm from "../components/CreateCommunityForm";
import SideBar from "../components/Sidebar/Sidebar";
import CommunityCard from "../components/communityCard/CommunityCard";
const Feeds = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);
const communities = []
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="">
        <section className="flex flex-col">
          <h2 className="text-6xl mt-4 text-center">Join Our Communities</h2>
          <p className="text-2xl text-center text-gray-400 my-2.5">Discover and join amazing communities where you can connect, share, and grow together.</p>
          <div className="flex justify-center mt-8">
            <button onClick={handleOpen} className="bg-black text-white px-4 py-2 rounded mt-4 cursor-pointer">
              Create a Community
            </button>
          </div>
        </section>
        <section className="flex flex-wrap mt-8 gap-2">
          <div className="w-[30%]">
            <CommunityCard />
          </div>
          <div className="w-[30%]">
            <CommunityCard />
          </div>
          <div className="w-[30%]">
            <CommunityCard />
          </div>
        </section>

      </div>

      <CreateCommunityForm isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default Feeds;
