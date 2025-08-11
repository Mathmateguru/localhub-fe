import React, { useState } from 'react';
import Modal from './Modal';

import {useMutation, useQueryClient} from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createPost } from '../services/community';

interface CreatePostFormProps {
  isOpen: boolean;
  onClose: () => void;
  communityId: string
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ isOpen, onClose, communityId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

 const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post'] }); // update cache 
      emptyAllFields();
      toast.success('Post created successfully!');
    },
    onError: (error) => {
      console.error('Error creating community:', error);
      toast.error('Failed to create a Post Please try again.');
    }
  } );

const emptyAllFields = () => {
    setTitle('');
    setContent('');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

    const postData = {
      title,
      content,
      communityId,
    }
   return mutation.mutate(postData);
  };


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create  Post</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            placeholder="Community name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            placeholder="Describe your community"
            rows={3}
          />
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

export default CreatePostForm;