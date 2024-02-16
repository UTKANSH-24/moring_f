import React from 'react';
import './styles.css'; // Import CSS file

const Cardi = ({ title, price, imageUrl }) => (
  <div className="col-md-4 col-sm-6 col-xs-12">
    <div className="card2">
      <div className={`cover ${imageUrl}`}>
        <h1>{title}</h1>
        <span className="price">{price}</span>
        <div className="card-back">
          <a href="#">Add to cart</a>
          <a href="#">View detail</a>
        </div>
      </div>
    </div>
  </div>
);

const Events = () => (
  <div>
    <section className="event">
      <div className="row2">
        <Cardi title="Little Bonsai" price="79" imageUrl="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80" />
        <Cardi title="Tropical Leaf" price="35" imageUrl="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80" />
        <Cardi title="Marijuana Chill" price="155" imageUrl="https://images.unsplash.com/photo-1525945518069-b924046d1385?auto=format&fit=crop&w=600&q=80" />
      </div>
    </section>
    <section className="event">
      <div className="row2">
        <Cardi title="Little Bonsai" price="79" imageUrl="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80" />
        <Cardi title="Little Bonsai" price="79" imageUrl="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80" />
        <Cardi title="Little Bonsai" price="79" imageUrl="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80" />
      </div>
    </section>
  </div>
);

export default Events;
