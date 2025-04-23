import React, { useState, useRef } from "react";
import styles from "./CustomWallpaper.module.css";
import classNames from "classnames";

const CustomWallaper = () => {
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
      document.body.style.backgroundImage = `url(${imageUrl})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    }
  };

  return (
    <div className="image-uploader">
      <div
        className="preview-area"
        style={{
          width: "300px",
          height: "200px",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
          margin: "20px auto",
        }}
        onClick={handleImageUpload}
      >
        {!backgroundImage && <p>Click to upload an image</p>}
      </div>
      <form encType="multipart/form-data">
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
      </form>
    </div>
  );
};

export default CustomWallaper;
