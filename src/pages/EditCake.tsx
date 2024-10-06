// src/components/EditCake.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Cake {
  _id: string;
  name: string;
  category: string;
  price: number;
  imageId: string; // Include imageUrl in the Cake interface
}

const EditCake: React.FC = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [formData, setFormData] = useState<{ name: string; category: string; price: number }>({
    name: '',
    category: '',
    price: 0,
  });
  
  const { id } = useParams<{ id: string }>(); // Get the cake ID from URL params

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/cakes`);
        setCakes(response.data);
      } catch (error) {
        console.error('Error fetching cakes:', error);
      }
    };

    fetchCakes();
  }, []);


  const handleEditClick = (cake: Cake) => {
    console.log("Selected cake for editing:", cake);
    setSelectedCake(cake);
    setFormData({
      name: cake.name,
      category: cake.category,
      price: cake.price,
    });
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedCake) { // Check that selectedCake is not null
        console.log(selectedCake._id);
      try {
        await axios.put(`${import.meta.env.VITE_BACKEND_API}/api/cakes/edit/${selectedCake._id}`, formData);
        alert('Cake updated successfully!');
        setSelectedCake(null);
        setFormData({ name: '', category: '', price: 0 });
        // Refresh the cake list
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/cakes`);
        setCakes(response.data);
      } catch (error) {
        console.error('Error updating cake:', error);
      }
    }
  };

  
  return (
    <div>
      <h2>Cake List</h2>
      <ul>
        {cakes.map((cake) => (
          <li key={cake._id}>
            <img src={`${import.meta.env.VITE_BACKEND_API}/api/cakes/image/${cake.imageId}`} alt={cake.name} style={{ width: '100px', height: '100px' }} /> {/* Display the cake image */}
            <div>
              <strong>{cake.name}</strong> - {cake.category} - GHS {cake.price}
              <button onClick={() => handleEditClick(cake)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>

      {selectedCake && (
        <div>
          <h2>Edit Cake</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Update Cake</button>
            <button type="button" onClick={() => setSelectedCake(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditCake;
