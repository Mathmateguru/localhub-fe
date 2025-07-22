import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('localhubToken');

const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(`${baseURL}/upload-image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export { uploadImage };