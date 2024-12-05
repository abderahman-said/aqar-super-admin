import React from "react";
 import { MdOutlineCloudUpload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import styles from "../styles/addAd.module.css"; // Adjust path as necessary
import { Image } from "primereact/image";

const ImageUpload = ({
  label = "Upload image",
  placeholder = "Upload img",
  image,
  imageValue,
  onImageUpload,
  onDeleteImage,
  onDeleteImageValue,
}) => {
  return (
    <div className={styles.upLoad}>
      <label htmlFor="image_upload">
        {label} <span>*</span>
      </label>
      <div className={styles.image_container}>
        <div id="image_upload" className={styles.image_slot}>
          <MdOutlineCloudUpload />
          {placeholder}
          <input type="file" id="image_upload" onChange={onImageUpload} />
        </div>
      </div>

      <div className="flex gap-3 align-items-center ">
        {imageValue && (
          <div className={styles.image_preview}>
            <div className={styles.images_container}>
              <Image
                src={imageValue}
                loading="lazy"
                alt="uploaded"
                width={80}
                height={80}
              />
              {/* <button
                type="button"
                onClick={onDeleteImageValue}
                className={styles.delete_button}
              >
                <IoClose />
              </button> */}
            </div>
          </div>
        )}

        {image && (
          <div className={styles.image_preview}>
            <div className={styles.images_container}>
              <Image
                src={image}
                loading="lazy"
                alt="uploaded"
                width={80}
                height={80}
              />
              <button
                type="button"
                onClick={onDeleteImage}
                className={styles.delete_button}
              >
                <IoClose />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
