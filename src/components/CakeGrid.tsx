import React, { useEffect, useState } from "react";
import axios from "axios";
import CakeItem from "./CakeItem";
import CakeFilter from "./CakeFilter";

interface Cake {
  _id: string;
  name: string;
  category: string;
  imageId: string;
  price: number;
}

const CakeGrid: React.FC = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [filteredCakes, setFilteredCakes] = useState<Cake[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetchCakes();
  }, []);

  useEffect(() => {
    let filtered = cakes;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((cake) =>
        cake.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedFilter) {
      filtered = filtered.filter((cake) =>
        cake.category.toLowerCase().includes(selectedFilter.toLowerCase())
      );
    }

    setFilteredCakes(filtered);
  }, [selectedFilter, searchTerm, cakes]);

  const fetchCakes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/cakes`);
      setCakes(response.data);
    } catch (error) {
      console.error("Error fetching cakes", error);
    }
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    margin: '0 auto',
    padding: "2rem 0",
  };

  return (
    <div>
      <CakeFilter onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      <div style={gridStyle}>
        {filteredCakes.map((cake) => (
          <CakeItem key={cake._id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default CakeGrid;
