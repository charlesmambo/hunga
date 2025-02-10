import React from 'react';
import '../menuCategory/MenuCategory.css';

const MenuCategory = ({ icon: Icon, label, className = '', boxClassName = '', iconClassName = '' }) => {
  return (
    <div className={`menu-category-list ${className}`}>
      <div className={`menu-box ${boxClassName}`}>
        {Icon && <Icon className={`menu-box-icon ${iconClassName}`} />}
        <p>{label}</p>
      </div>
    </div>
  );
};

export default MenuCategory;
