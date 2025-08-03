import React from 'react';
import './App.css';

const officeList = [
  {
    Name: 'DBS',
    Rent: 50000,
    Address: 'Chennai',
    Image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
  },
  {
    Name: 'WeWork',
    Rent: 75000,
    Address: 'Hyderabad',
    Image: 'https://gustavconcept.com/cdn/shop/articles/QIC_SYD_Unispace_QIC_resized_2_copy.jpg?v=1691409476&width=1080',
  },
  {
    Name: 'Regus',
    Rent: 60000,
    Address: 'Bangalore',
    Image: 'https://i.imgur.com/Zl0USbs.jpeg',
  }
];

function OfficeList() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Office Space, at Affordable Range</h1>

      {officeList.map((item, index) => {
        let rentColor = item.Rent <= 60000 ? 'textRed' : 'textGreen';

        return (
          <div key={index} style={{ marginBottom: '40px', textAlign: 'center' }}>
            <img src={item.Image} alt={item.Name} width="300" height="200" />
            <h2>Name: {item.Name}</h2>
            <h3 className={rentColor}>Rent: Rs. {item.Rent}</h3>
            <h4>Address: {item.Address}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default OfficeList;
