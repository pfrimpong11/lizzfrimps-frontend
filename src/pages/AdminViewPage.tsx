// AdminViewPage.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Cake {
  _id: string;
  name: string;
  category: string;
  price: number;
  imageId: string;
}

const AdminViewPage: React.FC = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);

  useEffect(() => {
    fetchCakes();
  }, []);

  const fetchCakes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/cakes`);
      console.log('Fetched cakes:', response.data); // Log the fetched cakes
      setCakes(response.data);
    } catch (error) {
      console.error('Error fetching cakes', error);
    }
  };

  return (
    <div>
      <h2>View Cakes</h2>
      {cakes.length > 0 ? (
        <ul>
          {cakes.map(cake => (
            <li key={cake._id}>
              <img src={`${import.meta.env.VITE_BACKEND_API}/api/cakes/image/${cake.imageId}`} alt={cake.name} width="100" height="100" 
              />
                <p>{cake.imageId}</p>
              <h3>{cake.name}</h3>
              <p>Category: {cake.category}</p>
              <p>Price: ${cake.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cakes found</p>
      )}
    </div>
  );
};

export default AdminViewPage;
