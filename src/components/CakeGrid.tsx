import React from "react";
import CakeItem from "./CakeItem";
import Cake1 from '../assets/images/chocolate-cake.png';
import Cake2 from '../assets/images/strawberry-cake.png';
import Cake3 from '../assets/images/vanilla-cake.png';

interface Cake {
  id: number;
  name: string;
  image: string;
  price: number;
}

const CakeGrid: React.FC = () => {
  const cakes: Cake[] = [
    {
      id: 1,
      name: "Chocolate Delight",
      image: Cake1,
      price: 39.99,
    },
    {
      id: 2,
      name: "Strawberry Dream",
      image: Cake2,
      price: 44.99,
    },
    {
      id: 3,
      name: "Vanilla Bliss",
      image: Cake3,
      price: 34.99,
    },
    {
      id: 4,
      name: "Red Velvet Charm",
      image: Cake2,
      price: 49.99,
    },
    {
      id: 5,
      name: "Lemon Zest Delight",
      image: Cake3,
      price: 37.99,
    },
    {
      id: 6,
      name: "Caramel Macchiato Cake",
      image: Cake1,
      price: 54.99,
    },
  ];

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    margin: '0 auto',
    padding: "2rem 0",
  };

  return (
    <div style={gridStyle}>
      {cakes.map((cake) => (
        <CakeItem key={cake.id} cake={cake} />
      ))}
    </div>
  );
};

export default CakeGrid;
