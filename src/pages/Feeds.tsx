import React from "react";
import CreateCommunityForm from "../components/CreateCommunityForm";
import CommunityCard from "../components/communityCard/CommunityCard";
import { getCommunities } from "../services/community";
import { useQuery } from "@tanstack/react-query";
import type { ICommuntity } from "../types";

const Feeds = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ['communities'],
    queryFn: getCommunities,
  });

  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);


  if (isLoading) {
    return <div>Fetching communities...</div>
  }


  const communities = data.data || [];

  return (
    <>
      <div className="w-full max-w-7xl p-4 mx-auto my-6 ">
        <section className="flex flex-col ">
          <h2 className="text-6xl mt-4 text-center">Join Our Communities</h2>
          <p className="text-2xl text-center text-gray-400 my-2.5">Discover and join amazing communities where you can connect, share, and grow together.</p>
          <div className="flex justify-center mt-8">
            <button onClick={handleOpen} className="bg-black text-white px-4 py-2 rounded mt-4 cursor-pointer">
              Create a Community
            </button>
          </div>
        </section>
        <section className="flex flex-wrap mt-8 gap-2 ">
          {communities.map((community: ICommuntity) => (
            <div className="w-[32%]" key={community._id}>
              <CommunityCard community={community} />
            </div>
          )
          )}
        </section>

      </div>

      <CreateCommunityForm isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default Feeds;
