import { useState, useEffect } from "react";
import type { GalleryImage, GallerySection } from "../../data/galleryData";
import styles from "./GallerySlider.module.css";

interface Props {
  section: GallerySection;
}

const GallerySlider = ({ section }: Props) => {
  const [index, setindex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleCount = isMobile ? 1 : 4;

  const next = () => {
    setindex((current) => (current + 1) % section.images.length);
  };

  const prev = () => {
    setindex(
      (current) =>
        (current - 1 + section.images.length) % section.images.length
    );
  };

  const visibleImages: GalleryImage[] = [];

  for (let i = 0; i < Math.min(visibleCount, section.images.length); i++) {
    const image = section.images[(index + i) % section.images.length];
    visibleImages.push(image);
  }

  return (
    <div className={styles.gallerySlider}>
      <div className={styles.sliderImages}>
        {visibleImages.map((image) => (
          <img key={image.id} src={image.src} />
        ))}
      </div>

      <div className={styles.info}>
        <div className={styles.container}>
          <h2>{section.title}</h2>

          <div className={styles.btns}>
            <button onClick={prev} type="button">
              <img src="assets/img/left.png" alt="Previous" />
            </button>

            <button onClick={next} type="button">
              <img src="assets/img/right.png" alt="Next" />
            </button>
          </div>
        </div>

        <p>{section.description}</p>
      </div>
    </div>
  );
};

export default GallerySlider;