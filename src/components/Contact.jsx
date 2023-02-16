import * as Unicons from '@iconscout/react-unicons';
import { useState } from "react";
import { send } from 'emailjs-com';

const user_id = process.env.REACT_APP_USER_ID;
const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;

console.log(user_id);
console.log(service_id);
console.log(template_id);


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            service_id,
            template_id,
            formData,
            user_id,
        ).then((r) => {
            console.log('SUCCESS!', r.status, r.text);
        }).catch((err) => {
            console.log('FAILED...', err);
        });
    };

    return (
        <section id="contact" className="py-48">
            <h2 className="font-itim text-center text-emerald font-semibold text-4xl">Get in touch!</h2>
            <div className="flex md:justify-center my-5 p-2 text-night">
                <form onSubmit={handleSubmit}>
                    <input 
                        className="w-full font-semibold p-3 m-2" 
                        type='text' 
                        id="name" 
                        name="name" 
                        placeholder='Name' 
                        onChange={handleChange} 
                        value={formData.name} 
                        required 
                    />

                    <input 
                        className="w-full font-semibold p-3 m-2" 
                        type='email' 
                        id="email" 
                        name="email" 
                        placeholder='Email' 
                        onChange={handleChange} 
                        value={formData.email} 
                        required 
                    />

                    <textarea 
                        className="w-full font-semibold p-3 m-2" 
                        id="message" 
                        name="message" 
                        placeholder='Message' 
                        onChange={handleChange} 
                        value={formData.message} 
                        required 
                    />

                    <button 
                        className='rounded-sm mt-4 ml-2 py-3 px-7 text-lg gap-2 font-semibold bg-picton-blue text-charcoal hover:bg-light-rose transition duration-500' 
                        type="submit"
                        style={{display: 'inline-flex'}}
                    >
                        Submit  <Unicons.UilShare />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
