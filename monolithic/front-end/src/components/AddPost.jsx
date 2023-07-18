import React, { useState } from 'react';
import axios from 'axios';

function MyForm() {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('text', text);
        formData.append('image', image);

        console.log(formData, text, image);

        const requestData = {
            text: text,
            image: image
          };

        try {
            const response = await axios.post('http://localhost:3000/post', formData);
            console.log(response);
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="text-input">Text:</label>
                <input
                    id="text-input"
                    type="text"
                    value={text}
                    onChange={handleTextChange}
                />
            </div>
            <div>
                <label htmlFor="image-input">Image:</label>
                <input
                    id="image-input"
                    name='avatar'
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;
