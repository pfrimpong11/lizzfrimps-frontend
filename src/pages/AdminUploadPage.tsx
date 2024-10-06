// AdminUploadPage.tsx
import React, { useState } from 'react';
import axios from 'axios';

const AdminUploadPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    image: null as File | null,  // Explicitly define the type for image
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('price', formData.price);

    // Append the image only if it exists
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}/api/cakes/upload`, formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Cake uploaded successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading cake', error);
      alert('Failed to upload cake');
    }
  };

  return (
    <div>
      <h2>Upload Cake</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Cake Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Upload Cake</button>
      </form>
      <a href="/AdminDeletePage">Admin delete</a>
      <br />
      <a href="/AdminViewPage">Admin view</a>
      <br />
      <a href="/EditCake">Edit Cake</a>
    </div>
  );
};

export default AdminUploadPage;
