import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('localhubToken');

const headers = {
  'Content-Type': 'application/json',
  Authorization: token
};


const getCommunities = async () => {
   try{
     const res = await axios.get(`${baseURL}/community`, {headers})    
     return res.data
  } catch (error) {
    console.error('Error fetching communities:', error);
    throw error;
  }
  }
interface CommunityData {
  name: string;
  description: string;
  image: string;
  isPublic: boolean;
}

const createCommunity = async (communityData: CommunityData) => {

  try {
    return await axios.post(`${baseURL}/community`, communityData, { headers})

  } catch (error) {
    console.error('Error fetching communities:', error);
    throw error;
  }

}






export { getCommunities, createCommunity };

