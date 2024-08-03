import { useState, useEffect } from 'react';

export const useBackground = (value = 8) => {
  const [image, setImage] = useState('/img/bg-img1.jpg');
  useEffect(() => {
    const background = setInterval(() => {
      const generateRandomNum = () => {
        return Math.floor(Math.random() * (value - 1)) + 1;
      };
      const randomNum = generateRandomNum();

      setImage(`/img/bg-img${randomNum}.jpg`);
    }, 15000);

    return () => clearInterval(background);
  }, [image]);

  return image;
};
