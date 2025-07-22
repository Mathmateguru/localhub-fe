import React, { useState } from 'react';
import Modal from './Modal';
import { uploadImage } from '../services/uploadImage';
import { createCommunity } from '../services/community';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import { toast } from 'react-toastify';

interface CreateCommunityFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCommunityForm: React.FC<CreateCommunityFormProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isPublic, setIsPublic] = useState(true);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCommunity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['community'] }); // update cache 
      emptyAllFields();
      toast.success('Community created successfully!');
    },
    onError: (error) => {
      console.error('Error creating community:', error);
      toast.error('Failed to create community. Please try again.');
    }
  });

const emptyAllFields = () => {
    setName('');
    setDescription('');
    setImage(null);
    setIsPublic(true);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

    const communityData = {
      name,
      description,
      image: image || '',
      isPublic
    }
   return mutation.mutate(communityData)
  };


const selectImage = async (file: File | null) => {
  const res = await uploadImage(file as File);
  if(res.status === 'success') {
    setImage(res.imageUrl);
  } 
};


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create Community</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Community name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            placeholder="Describe your community"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={e => selectImage(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-black-700 hover:file:bg-black-100"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={e => setIsPublic(e.target.checked)}
            id="isPublic"
            className="h-4 w-4 text-black-600 border-gray-300 rounded focus:ring-black-500"
          />
          <label htmlFor="isPublic" className="ml-2 block text-sm text-gray-700">
            Public Community
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-black hover:bg-blend-hard-light text-white font-semibold rounded-lg shadow transition duration-150"
        >
          Create
        </button>
      </form>
      </>
    </Modal>
  );
};

export default CreateCommunityForm;