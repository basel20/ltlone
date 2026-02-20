import React, { useState } from 'react'

const DetailsCard = ({ onClose, images = [], product }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="h-full md:h-[80vh] w-[90%] lg:w-[80%] bg-[#fff] rounded-2xl shadow-xl relative p-6 flex flex-col md:flex-row gap-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-red-600"
        >
          ✕
        </button>

        {/* LEFT: Image Slideshow */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center relative rounded-2xl">
          {images.length > 0 ? (
            <img
              src={images[currentIndex]}
              alt="Product"
              className="h-[70%] md:h-[50%] object-contain rounded-3xl"
            />
          ) : (
            <div className="h-[60%] w-full bg-gray-200 flex items-center justify-center rounded-lg">
              <p className="text-gray-500">No images available</p>
            </div>
          )}

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                onClick={() => setCurrentIndex(i)}
                className={`h-16 w-16 object-cover rounded-lg cursor-pointer border-2 ${
                  i === currentIndex ? 'border-yellow-500' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 text-left">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {product?.title || "Product Name"}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              {product?.description || "This is a detailed description of the product."}
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li><strong>Category:</strong> {product?.category || "Perfume"}</li>
              <li><strong>Sizes:</strong> {product?.sizes.join(" ,") || "100ml"}</li>
              <li><strong>Colors:</strong> {product?.colors.join(" ,") || "Black"}</li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              ${product?.price || "100"}
            </h3>
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsCard
