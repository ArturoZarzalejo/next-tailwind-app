'use client'

import React, { useState } from 'react';

const TagSearch = ({ tags }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Buscar etiquetas</h2>
      <input type="text" placeholder="Buscar" onChange={handleSearch} />
      <ul>
        {filteredTags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default TagSearch;
