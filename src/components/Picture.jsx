import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { picture1, picture2, picture3, picture4, picture5, picture6 } from '../assets';
import { Link } from 'react-router-dom'; 
import SectionWrapper from './SectionWrapper';

const images = [
 picture1,
 picture2,
 picture3,
 picture4,
 picture5,
 picture6,
];
function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);
  const [showSecondText, setShowSecondText] = useState(false);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };
  
  const handleTextClick = () => {
    if (!showSecondText) {
      setShowSecondText(true);
    }
  };
  
  const allImagesLoaded = loadedImages === images.length;
  return (
    <SectionWrapper>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center cursor-pointer" onClick={handleTextClick}>
        {!showSecondText && (
          <p 
            className="text-4xl font-light text-white transform rotate-6 drop-shadow-2xl shadow-black/50"
            style={{ 
              fontFamily: 'Kalam, cursive',
              textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000, -1px 0 0 #000'
            }}
          >
           ofc pictures mo! where you're super cute hehe :P
          </p>
        )}
        {showSecondText && (
          <Link to="/card">
            <motion.p 
              className="text-4xl font-light text-white transform rotate-6 drop-shadow-2xl shadow-black/50"
              style={{ 
                fontFamily: 'Kalam, cursive',
                textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000, -1px 0 0 #000'
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              now here's a letter for you...
            </motion.p>
          </Link>
        )}
      </div>
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            allImagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: images.length - index,
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.05,
            rotate: Math.random() * 20 - 10,
          }}
          drag
        >
          <img
            src={image}
            alt={`Stacked image ${index + 1}`}
            className="w-full h-auto object-contain rounded-lg shadow-lg"
            onLoad={handleImageLoad} // Increment the counter when the image loads
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
}

export default Picture;
