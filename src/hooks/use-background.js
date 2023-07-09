import { useState, useEffect } from 'react';

export const useBackground = (value = 8) => {
  const [image, setImage] = useState('');
  useEffect(() => {
    const generateRandomNum = () => {
      return Math.floor(Math.random() * (value - 1) + 1);
    };

    setImage(`/img/bg-img${generateRandomNum()}.jpg`);
  }, []);

  return image;
};
