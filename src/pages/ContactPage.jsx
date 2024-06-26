import React from 'react'
import { TextInput, Button } from '@gravity-ui/uikit'

export default function ContactPage() {
    return (
        <div className='contact-page'>
            <div className='form__container'>
                <div className='form__wrapper'>
                    <div className='form__title'>
                        <h2>Contact Us</h2>
                    </div>
                    <div className='form__inputs'>
                        <TextInput className='form__input' placeholder='Name' />
                        <TextInput className='form__input' placeholder='Phone' />
                        <TextInput className='form__input' placeholder='Email' />
                        <TextInput className='form__input' placeholder='Message' size='xl' />
                        <Button className='form__button'>
                            Send
                        </Button>
                    </div>
                    <div className='form__photo'>
                        <picture>
                            <source media="(max-width: 768px)" srcSet='./assets/contact_small.jpg' />
                            <source media="(min-width: 767px)" srcSet='./assets/contact_big.jpg' />
                            <img src='./assets/contact_big.jpg' />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
