import React from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
 import styles from "../styles/addAd.module.css"; // Adjust path as necessary

const VideoUpload = ({
  label = "Upload Video",
  placeholder = "Upload Video",
  video,
  videoValue,
  onvideoUpload,
  onDeletevideo,
  onDeletevideoValue,
}) => {
  return (
    <div className={styles.upLoad}>
      <label htmlFor="video_upload">
        {label} <span>*</span>
      </label>
      <div className={styles.image_container}>
        <div id="video_upload" className={styles.image_slot}>
          <MdOutlineCloudUpload />
          {placeholder}
          <input type="file" id="video_upload" onChange={onvideoUpload} />
        </div>
      </div>

      <div className="flex gap-3 align-items-center">
        {(video || videoValue) && (
          <div className={styles.image_preview}>
            <div className={styles.images_container}>
              <video
                src={video || videoValue}
                controls
                width="100%"
                className="video-player"
              >
                Your browser does not support the video tag.
              </video>
              {/* <button
                type="button"
                onClick={onDeletevideo}
                className={styles.delete_button}
              >
                <IoClose />
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoUpload;
