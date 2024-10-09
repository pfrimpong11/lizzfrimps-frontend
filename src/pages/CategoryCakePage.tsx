import React, { useEffect, useState } from "react";
import axios from "axios";
import CakeItem from "../components/CakeItem";
import Header from "../components/Header";
import BackNavigator from "../components/BackNavigator";
import { useParams } from "react-router-dom";
import { Cake, Loader } from "lucide-react";

interface CakeType {
  _id: string;
  name: string;
  category: string;
  imageId: string;
  price: number;
}

const CategoryCakePage: React.FC = () => {
  const { category = "" } = useParams<{ category: string }>();
  const [cakes, setCakes] = useState<CakeType[]>([]);
  const [filteredCakes, setFilteredCakes] = useState<CakeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCakes();
  }, []);

  useEffect(() => {
    if (category) {
      const filtered = cakes.filter(
        (cake) => cake.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredCakes(filtered);
    }
  }, [cakes, category]);

  const fetchCakes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/cakes`);
      setCakes(response.data);
    } catch (error) {
      console.error("Error fetching cakes", error);
    } finally {
      setLoading(false);
    }
  };

  const pageStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    color: '#2D3748',
    borderBottom: '2px solid #ED8936',
    paddingBottom: '1rem',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginLeft: '1rem',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '2rem',
  };

  const loadingStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontSize: '1.25rem',
    color: '#4A5568',
  };

  const noResultsStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '1.25rem',
    color: '#4A5568',
    marginTop: '2rem',
  };

  return (
    <div>
        <Header/>
        <div style={pageStyle}>
          <BackNavigator />
        <header style={headerStyle}>
            <Cake size={48} color="#ED8936" />
            <h1 style={titleStyle}>{category.charAt(0).toUpperCase() + category.slice(1)} Cakes</h1>
        </header>

        {loading ? (
            <div style={loadingStyle}>
            <Loader size={36} className="animate-spin mr-2" />
            <span>Loading delicious cakes...</span>
            </div>
        ) : filteredCakes.length > 0 ? (
            <div style={gridStyle} className="cake-grid">
            {filteredCakes.map((cake) => (
                <CakeItem key={cake._id} cake={cake} />
            ))}
            </div>
        ) : (
            <p style={noResultsStyle}>
            No cakes found in the {category} category. Check back soon for more delicious options!
            </p>
        )}
        </div>
    </div>
  );
};

export default CategoryCakePage;