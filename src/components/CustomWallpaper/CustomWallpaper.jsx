import React, { useState, useRef } from "react";

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
    <div className="image-uploader">
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
        style={{
          padding: "10px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          display: "block",
          margin: "0 auto",
        }}
      >
        Upload Image
      </button>
    </div>
  );
};

export default CustomWallpaper;