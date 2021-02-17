import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css'

const CardEditForm = ({card}) => {
    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL
    } = card;
    const onSubmit = () => {};

    return (
        <form className={styles.cardEditor}>
            <ul>
                <li>
                    <input type="text" name="name" value={name} placeholder="Name" title="이름"/>
                    <input type="text" name="company" value={company} placeholder="Company" title="회사명"/>
                    <select name="theme" value={theme}>
                        <option value="dark">dark</option>
                        <option value="colorful">colorful</option>
                        <option value="light">light</option>
                    </select>
                </li>
                <li>
                    <input type="text" name="title" value={title} placeholder="Title" title="직책"/>
                    <input type="email" name="email" value={email} placeholder="Email" title="이메일"/>
                </li>
                <li>
                    <textarea name="message" value={message} placeholder="Message"></textarea>
                </li>
            </ul>
            <div className={styles.btnArea}>
                <ImageFileInput />
                <Button name="Delete" onClick={onSubmit}/>
                {/* <button type="button" className={styles.btnImg}>No File</button>
                <button type="button" className={styles.btnAdd}>Add</button> */}
            </div>
        </form>
    );
};

export default CardEditForm;