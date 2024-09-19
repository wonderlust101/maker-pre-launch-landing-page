import React, {useState} from "react";

import './Footer.scss';

import Form from "../../../components/Form/Form.tsx";
import TextInput from "../../../components/Form/TextInput/TextInput.tsx";

export default function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setStatus(email === '' || !email.includes('@') ? 'error': '')
        
        event.preventDefault();
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <footer className="grid-bleed footer">
            <div className="footer footer__content">
                <h2>Get notified when we launch</h2>

                <Form className="footer__form" submitLabel="Get notified" onSubmit={handleFormSubmit}>
                    <TextInput id="email"
                               type="email"
                               status={status}
                               placeholder="Email address"
                               errorText="Oops! That doesn’t look like an email address"
                               isRequired={false}
                               value={email}
                               onChange={handleEmailChange}/>
                </Form>
            </div>
        </footer>
    )
}