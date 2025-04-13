import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./imageGallery.css";

const ImageGallery = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Lock scroll when lightbox is open
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxOpen]);

  // Handle keydown events for escape and arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
  
      // Prevent fullscreen exit when Escape is pressed
      if (e.key === "Escape") {
        e.preventDefault(); // Prevent default browser behavior
        closeLightbox();
      }
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  if (!images || images.length === 0) return <p>No images to display.</p>;

  const { src, caption } = images[currentIndex];

  // Create the lightbox portal if open
  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt={img.caption} />
          </div>
        ))}
      </div>

      {/* Only show the lightbox if it's open */}
      {lightboxOpen &&
        ReactDOM.createPortal(
          <div className="lightbox" onClick={closeLightbox}>
            <div
              className="lightbox-content fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="close-btn" onClick={closeLightbox}>
                &times;
              </span>
              <img src={src} alt={caption} />
              <div className="lightbox-caption text-smaller"><i>{caption}</i></div>
            </div>
          </div>,
          document.body // Render the lightbox at the root of the DOM
        )}
    </div>
  );
};

export default ImageGallery;
