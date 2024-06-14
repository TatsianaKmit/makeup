import React from 'react'
import { TextInput, Button } from '@gravity-ui/uikit'

export default function ContactPage() {
    return (
        <div className='contact-page'>
            <div className='form__container'>
                <div className='form__content'>
                    <div className='form__content-wrapper'>
                        <h2>Contact Us</h2>
                        <TextInput className='form__input' placeholder='Name' />
                        <TextInput className='form__input' placeholder='Phone' />
                        <TextInput className='form__input' placeholder='Email' />
                        <TextInput className='form__input' placeholder='Message' size='xl' />
                        <Button className='form__button'>
                            Send
                        </Button>
                    </div>
                    <div className='form__photo'>
                        <img src='./assets/contact1.jpg' />
                    </div>
                </div>

            </div>
        </div>
    )
}
