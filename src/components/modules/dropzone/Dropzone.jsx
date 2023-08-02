import { useCallback, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { useDropzone } from 'react-dropzone';

const Dropzone = (props) => {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setImages((prev) => [...prev, file]);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
    },
  });

  return (
    <div className="w-full space-y-5">
      <div
        {...getRootProps()}
        className="w-full h-60 flex flex-col items-center justify-center rounded-lg bg-white shadow cursor-pointer"
      >
        <input {...getInputProps()} />
        <FaUpload className="w-10 h-10" />
        <p className="text-lg">{isDragActive ? 'Drop' : 'Click / Drop'} event images here</p>
      </div>

      <div className="w-full flex justify-center items-center gap-3">
        {images.map((file, i) => (
          <img
            key={i}
            src={`${URL.createObjectURL(file)}`}
            className="w-28 h-28 rounded-lg bg-white object-cover object-center shadow"
          />
        ))}
      </div>
    </div>
  );
};

Dropzone.propTypes = {};

export default Dropzone;
