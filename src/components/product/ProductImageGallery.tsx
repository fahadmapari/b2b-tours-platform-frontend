"use client";

import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./ProductImageGallery.module.css";

const images: ReactImageGalleryItem[] = [
  {
    original: "/tour.jpg",
    thumbnail: "/tour.jpg",
  },
  {
    original: "/tour.jpg",
    thumbnail: "/tour.jpg",
    originalHeight: 400,
  },
  {
    original: "/tour.jpg",
    thumbnail: "/tour.jpg",
    originalHeight: 400,
  },
  {
    original: "/tour.jpg",
    thumbnail: "/tour.jpg",
  },
  {
    original: "/tour.jpg",
    thumbnail: "/tour.jpg",
    originalHeight: 400,
  },
  {
    original: "/tour.jpg",
    thumbnail: "/tour.jpg",
    originalHeight: 400,
  },
  {
    original: "/tour.jpg",
    thumbnail: "/tour.jpg",
  },
  {
    original: "/tour.jpg",
    thumbnail: "/tour.jpg",
    originalHeight: 400,
  },
  {
    original: "/tour.jpg",
    thumbnail: "/tour.jpg",
    originalHeight: 400,
  },
];

const ProductImageGallery = () => {
  return (
    <div className="h-[50vh]">
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        additionalClass={styles.customProductGallery}
        lazyLoad={true}
      />
    </div>
  );
};

export default ProductImageGallery;
