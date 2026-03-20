import { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import "./imageGallery.css";

const ImageGallery = ({ id, images }) => {
  const {t} = useTranslation();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrev = useCallback(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const showNext = useCallback(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // get a file path from filename
  const getFile = (filename) => {
    if (filename === undefined) return undefined;
    return `/Images/${id}/${filename}`;
  }
  // "char.png" → "char"
  const getCaption = (filename) => {
    const key = filename.replace(/\.[^.]+$/, "");
    return t(`projBlock.${id}.captions.${key}`);
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
  }, [lightboxOpen, showPrev, showNext]);

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
  }, [lightboxOpen, showPrev, showNext]);

  if (!images || images.length === 0) return <p>No images to display.</p>;

  const { src } = images[currentIndex];

  // Create the lightbox portal if open
  return (
    <div>
      <h2>{t("projBlock.general.imageGallery")}</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img src={getFile(img.preview) || getFile(img.src)} alt={getCaption(img.src)} />
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
              <img src={getFile(src)} alt={getCaption(src)} />
              <div className="lightbox-caption text-smaller"><i>{getCaption(src)}</i></div>
            </div>
          </div>,
          document.body // Render the lightbox at the root of the DOM
        )}
    </div>
  );
};

export default ImageGallery;
