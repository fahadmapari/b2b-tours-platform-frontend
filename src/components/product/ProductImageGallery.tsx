"use client";

import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
];

const ProductImageGallery = () => {
  return (
    <div className="!h-[407px]">
      <ImageGallery items={images} thumbnailPosition="left" />
    </div>
  );
};

export default ProductImageGallery;
