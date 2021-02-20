import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const inputRef = useRef();
    const onButtonClick = event => {
        // event.preventDafault();
        inputRef.current.click();
    };

    const onChange = async event => {
        console.log(event.target.files[0]);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })
    }

    return (
        <div className={styles.imgUpload}>
            <input
                ref={inputRef}
                className={styles.inputImg}
                type="file"
                accept="image/*"
                name="file"
                onChange={onChange}
            />
            <button className={styles.btnImg} onClick={onButtonClick}>
                { name || 'No file' }
            </button>
        </div>
    );
};

export default ImageFileInput;