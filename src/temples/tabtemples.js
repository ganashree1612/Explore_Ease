import React from 'react';

const Tab = ({ category, filterItem }) => {
  return (
    <div className="menu-tabs container">
      <div className="menu-tab space-x-6 space-y-5 justify-between ml-3">
        {category.map((curr) => (
          <button
            className="btn btn-warning"
            onClick={() => filterItem(curr)}
            key={curr} // Assuming each category is unique
          >
            {curr}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
