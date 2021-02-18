import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css'

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
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

    const onChange = event => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard ({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };
    const onSubmit = () => {
        deleteCard(card);
    };

    return (
        <form className={styles.cardEditor}>
            <ul>
                <li>
                    <input type="text" name="name" value={name} placeholder="Name" title="이름" onChange={onChange} />
                    <input type="text" name="company" value={company} placeholder="Company" title="회사명" onChange={onChange} />
                    <select name="theme" value={theme} onChange={onChange} >
                        <option value="dark">dark</option>
                        <option value="colorful">colorful</option>
                        <option value="light">light</option>
                    </select>
                </li>
                <li>
                    <input type="text" name="title" value={title} placeholder="Title" title="직책" onChange={onChange} />
                    <input type="email" name="email" value={email} placeholder="Email" title="이메일" onChange={onChange} />
                </li>
                <li>
                    <textarea name="message" value={message} placeholder="Message" onChange={onChange} ></textarea>
                </li>
            </ul>
            <div className={styles.btnArea}>
                <FileInput />
                <Button name="Delete" onClick={onSubmit}/>
            </div>
        </form>
    );
};

export default CardEditForm;