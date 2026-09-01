import React from 'react';
import Button from './Button';

const EquipmentCard = ({ name, category, desc, image, onExplore }) => {
  return (
    <div className="equipment-card">
      <div className="equipment-img-wrapper">
        <img src={image} alt={name} className="equipment-img" />
        <div className="equipment-category-badge">{category}</div>
      </div>
      <div className="equipment-body">
        <h3 className="equipment-title">{name}</h3>
        <p className="equipment-desc">{desc}</p>
        <Button
          variant="outline"
          style={{ padding: '0.65rem 1rem', fontSize: '0.8rem', marginTop: 'auto' }}
          onClick={() => onExplore && onExplore(name)}
        >
          EXPLORE EQUIPMENT
        </Button>
      </div>
    </div>
  );
};

export default EquipmentCard;
