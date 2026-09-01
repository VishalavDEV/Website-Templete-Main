/**
 * Shop — University merchandise product grid.
 */
import { useState } from 'react';
import { products } from '../../data/content';
import Badge from '../../components/common/Badge/Badge';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { ShoppingCart, Check } from 'lucide-react';
import styles from './Shop.module.css';

const Shop = () => {
  const [cart, setCart] = useState({});
  const [added, setAdded] = useState({});

  const addToCart = (id) => {
    setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
    setAdded(a => ({ ...a, [id]: true }));
    setTimeout(() => setAdded(a => ({ ...a, [id]: false })), 1500);
  };

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === parseInt(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  const cartCount = Object.values(cart).reduce((s, v) => s + v, 0);

  return (
    <main id="main-content" className={styles.page}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div>
            <h1 className="section-title">University Shop</h1>
            <p className="section-subtitle">Official merchandise and academic materials.</p>
          </div>
          {cartCount > 0 && (
            <div className={styles.cartBadge} aria-live="polite" aria-label={`${cartCount} items in cart, total $${cartTotal.toFixed(2)}`}>
              <ShoppingCart size={18} aria-hidden="true" />
              <span>{cartCount} item{cartCount !== 1 ? 's' : ''}</span>
              <span className={styles.cartTotal}>${cartTotal.toFixed(2)}</span>
            </div>
          )}
        </div>

        <ul className={styles.grid}>
          {products.map(product => (
            <li key={product.id}>
              <Card hover className={styles.productCard}>
                <div className={styles.imgWrap}>
                  <img src={product.image} alt={product.title} loading="lazy" className={styles.productImg} />
                  {product.badge && (
                    <span className={styles.badgePos}>
                      <Badge label={product.badge} variant={product.badge === 'New' ? 'success' : 'accent'} />
                    </span>
                  )}
                </div>
                <div className={styles.body}>
                  <h2 className={styles.productTitle}>{product.title}</h2>
                  <p className={styles.price}>${product.price.toFixed(2)}</p>
                  <Button
                    variant={added[product.id] ? 'accent' : 'primary'}
                    size="sm"
                    onClick={() => addToCart(product.id)}
                    className={styles.addBtn}
                    aria-label={`Add ${product.title} to cart`}
                  >
                    {added[product.id]
                      ? <><Check size={15} aria-hidden="true" /> Added!</>
                      : <><ShoppingCart size={15} aria-hidden="true" /> Add to Cart</>
                    }
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Shop;
