import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './SubCategoryPage.module.css';
import axios from '../../utils/axios'

// const dummyProducts = [
//   { id: 1, name: 'Cool Shirt', size: 'M', company: 'Nike', price: 999, reviews: 4.5 },
//   { id: 2, name: 'Stylish Jeans', size: 'L', company: 'Levis', price: 1999, reviews: 4.0 },
//   { id: 3, name: 'Smartphone', size: '-', company: 'Samsung', price: 15000, reviews: 4.3 },
//   { id: 4, name: 'Elegant Dress', size: 'S', company: 'Zara', price: 2500, reviews: 4.7 },
// ];

const SubCategoryPage = () => {
  const { name } = useParams();
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  const [searchTerm, setSearchTerm] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);

  // useEffect(() => {
  //   let filtered = dummyProducts.filter(prod => 
  //     prod.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     (sizeFilter ? prod.size === sizeFilter : true) &&
  //     (companyFilter ? prod.company === companyFilter : true)
  //   );

  //   if (sortOption === 'priceLowHigh') {
  //     filtered.sort((a, b) => a.price - b.price);
  //   } else if (sortOption === 'priceHighLow') {
  //     filtered.sort((a, b) => b.price - a.price);
  //   } else if (sortOption === 'reviewsHighLow') {
  //     filtered.sort((a, b) => b.reviews - a.reviews);
  //   }

  //   setFilteredProducts(filtered);
  // }, [searchTerm, sizeFilter, companyFilter, sortOption]);

  useEffect( () => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/products')
        setProducts(res.data)
        setFilteredProducts(res.data)
      } catch (err) {
        console.error('Failed to fetch products:', err)
      }
    }
    fetchProducts()
  }, [] )

  useEffect(() => {
    let filtered = products.filter(prod => 
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (sizeFilter ? prod.size === sizeFilter : true) && 
      (companyFIlter ? prod.company === companyFilter : true) &&
      (prod.category?.toLowerCase() === name.toLowerCase())
    )

    if (sortOption === 'priceLowHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHighLow') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'reviewsHighLow') {
      filtered.sort((a, b) => b.reviews - a.reviews);
    }

    setFilteredProducts(filtered)
  }, [products, searchTerm, sizeFilter, companyFilter, sortOption, name])

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{formattedName} Category</h1>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        <select
          value={sizeFilter}
          onChange={(e) => setSizeFilter(e.target.value)}
          className={styles.select}
        >
          <option value="">All Sizes</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>

        <select
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
          className={styles.select}
        >
          <option value="">All Companies</option>
          <option value="Nike">Nike</option>
          <option value="Levis">Levis</option>
          <option value="Samsung">Samsung</option>
          <option value="Zara">Zara</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className={styles.select}
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="reviewsHighLow">Reviews: High to Low</option>
        </select>
      </div>

      {filteredProducts.length > 0 ? (
      <div className={styles.productList}>
        {filteredProducts.map(prod => (
          <Link
            to={`/product/${prod.id}`}
            className={styles.productItem}
            key={prod.id}
          >
            <strong>{prod.name}</strong> - ₹{prod.price} <br />
            {prod.company} - {prod.size} - {prod.reviews}/5
          </Link>
        ))}
      </div>
      ) : (
        <div className={styles.noResult}>
          No products found. Try changing filters or search terms.
        </div>
      )}
    </div>
  );
};

export default SubCategoryPage;
