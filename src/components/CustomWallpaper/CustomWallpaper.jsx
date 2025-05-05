import React, { useState, useRef } from "react";
import { FiImage } from "react-icons/fi";
import styles from "./CustomWallpaper.module.css";

const CustomWallpaper = ({ onBackgroundChange }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
      if (onBackgroundChange) {
        onBackgroundChange(imageUrl);
      }
      doAction(file.name);
    }
  };

  const doAction = (imageName) => {
    alert(imageName);
  };

  return (
    <div className={styles.imageUploader}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: "none" }}
      />
      <button
        type="button"
        onClick={handleImageUpload}
        className={styles.uploadButton}
        aria-label="Upload custom background image"
      >
        <FiImage className={styles.galleryIcon} />
      </button>
    </div>
  );
};

export default CustomWallpaper;