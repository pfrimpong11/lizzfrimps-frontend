import React, { useEffect, useState } from "react";
import axios from "axios";
import CakeItem from "./CakeItem";
import CakeFilter from "./CakeFilter";
import { Cake, ShoppingBag } from "lucide-react";

interface CakeType {
  _id: string;
  name: string;
  category: string;
  imageId: string;
  price: number;
}

const CakeGrid: React.FC = () => {
  const [cakes, setCakes] = useState<CakeType[]>([]);
  const [filteredCakes, setFilteredCakes] = useState<CakeType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCakes();
  }, []);

  useEffect(() => {
    let filtered = cakes;

    if (searchTerm) {
      filtered = filtered.filter((cake) =>
        cake.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedFilter) {
      filtered = filtered.filter((cake) =>
        cake.category.toLowerCase().includes(selectedFilter.toLowerCase())
      );
    }

    setFilteredCakes(filtered);
  }, [selectedFilter, searchTerm, cakes]);

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

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1rem",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2d3748",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "2rem",
    margin: "2rem 0",
  };

  const loadingStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    fontSize: "1.5rem",
    color: "#4a5568",
  };

  const noResultsStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "1.25rem",
    color: "#4a5568",
    marginTop: "2rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>
        <Cake size={36} style={{ marginRight: "0.5rem" }} />
        Our Delicious Cakes
      </h1>
      <CakeFilter onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      {loading ? (
        <div style={loadingStyle}>
          <ShoppingBag size={32} className="animate-bounce mr-2" />
          Loading cakes...
        </div>
      ) : filteredCakes.length > 0 ? (
        <div style={gridStyle}>
          {filteredCakes.map((cake) => (
            <CakeItem key={cake._id} cake={cake} />
          ))}
        </div>
      ) : (
        <p style={noResultsStyle}>No cakes found. Try adjusting your filters.</p>
      )}
    </div>
  );
};

export default CakeGrid;