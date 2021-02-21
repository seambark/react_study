import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const onButtonClick = event => {
        event.preventDafault();
        inputRef.current.click();
    };

    const onChange = async event => {
        setLoading(true);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
    };

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
            { !loading && (
                <button className={`${styles.btnImg} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
                    { name || 'No file' }
                </button>
            )}
            { loading && <span className={styles.loading}></span> }
        </div>
    );
};

export default ImageFileInput;