import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div className='bg-white rounded-lg shadow-lg p-6 min-w[320px] relative w-full max-w-md'>
        <button onClick={onClose} style={{
          position: 'absolute', top: 8, right: 8, background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer'
        }}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;