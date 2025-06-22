import React from 'react';
import { useParams } from 'react-router-dom';

const SubCategoryPage = () => {
  const { name } = useParams();

  // Optional: Capitalize first letter
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  // Later you can fetch products from backend or static data using `name`
  return (
    <div style={{ padding: '2rem' }}>
      <h1>{formattedName} Category</h1>
      <p>Products related to {formattedName} will appear here.</p>
    </div>
  );
};

export default SubCategoryPage;
