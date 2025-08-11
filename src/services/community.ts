import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const getHeaders = () => {
  const token = localStorage.getItem('localhubToken');
  return {
    'Content-Type': 'application/json',
    Authorization: token,
  };
};


const getCommunities = async () => {
  try {
    const res = await axios.get(`${baseURL}/community`, { headers: getHeaders() });
    return res.data;
  } catch (error) {
    console.error('Error fetching communities:', error);
    throw error;
  }

}
const getCommunity = async (id: string) => {
  try {
    const res = await axios.get(`${baseURL}/community/${id}`, { headers: getHeaders() });
    return res.data;
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

interface CreatePostData {
  title: string;
  content: string;
  communityId: string;
} 

const createCommunity = async (communityData: CommunityData) => {
  try {
    return await axios.post(`${baseURL}/community`, communityData, { headers: getHeaders() });
  } catch (error) {
    console.error('Error creating community:', error);
    throw error;
  }
};
const createPost = async (postData: CreatePostData) => {
  try {
    return await axios.post(`${baseURL}/posts`, postData, { headers: getHeaders() });
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

const getCommunityPosts = async (id: string) => {
  try {
  return await axios.get(`${baseURL}/community/${id}/posts`, { headers: getHeaders() });
  } catch (error) {
    console.log(error)
    throw error;
  }
}


export { 
  getCommunities, 
  createCommunity, 
  getCommunity, 
  getCommunityPosts,
  createPost
 };

