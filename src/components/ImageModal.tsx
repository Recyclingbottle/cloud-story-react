import React from "react";
import styles from "./ImageModal.module.css"; 

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Full size" className={styles.modalImage} />
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default ImageModal;
