import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';

const TextEditor = ({ label, error, onChange, ...rest }) => {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        onChange(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  return (
    <div className="w-full flex flex-col space-y-1">
      {label && <label className="font-bold md:text-xl">{label}</label>}
      <div className="w-full h-60 border-2 border-dark rounded-lg overflow-hidden">
        <div {...rest} ref={quillRef} />
      </div>

      <span className="text-sm text-error">{error?.message}</span>
    </div>
  );
};

TextEditor.propTypes = {
  label: PropTypes.string,
  error: PropTypes.object,
  onChange: PropTypes.func,
};

export default TextEditor;
