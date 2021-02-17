import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css'

const CardAddForm = ({ onAdd }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    
    const onSubmit = event => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name : nameRef.current.value || '',
            company : companyRef.current.value || '',
            theme : themeRef.current.value,
            title : titleRef.current.value || '',
            email : emailRef.current.value || '',
            message : messageRef.current.value || '',
            fileName: '',
            fileURL: '',
        }
        formRef.current.reset();
        onAdd(card);
    }
    return (
        <form ref={formRef} className={styles.cardEditor}>
            <ul>
                <li>
                    <input ref={nameRef} type="text" name="name" placeholder="Name" title="이름"/>
                    <input ref={companyRef} type="text" name="company" placeholder="Company" title="회사명"/>
                    <select ref={themeRef} name="theme" >
                        <option value="dark">dark</option>
                        <option value="colorful">colorful</option>
                        <option value="light">light</option>
                    </select>
                </li>
                <li>
                    <input ref={titleRef} type="text" name="title" placeholder="Title" title="직책"/>
                    <input ref={emailRef} type="email" name="email" placeholder="Email" title="이메일"/>
                </li>
                <li>
                    <textarea ref={messageRef} name="message" placeholder="Message"></textarea>
                </li>
            </ul>
            <div className={styles.btnArea}>
                <ImageFileInput />
                <Button name="Add" onClick={onSubmit}/>
            </div>
        </form>
    );
};

export default CardAddForm;