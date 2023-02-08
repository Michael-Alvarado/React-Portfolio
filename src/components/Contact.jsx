const Contact = () => {
    return (
        <section>
            <p>Coming Soon!</p>
        </section>
    );
};

export default Contact;

// import React, { useState } from 'react';

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // send formData to your email here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} />

//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />

//       <label htmlFor="message">Message:</label>
//       <textarea id="message" name="message" onChange={handleChange} value={formData.message} />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ContactForm;
