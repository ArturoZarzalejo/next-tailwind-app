'use client';

import React, { useEffect, useState } from 'react';
import { ReactComponent as Delete } from '../public/delete.svg';

const TagManager = ({ tags, setTags }) => {
  const handleAddTag = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDeleteTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
  };

  return (
    <div>
      <h2>Tags</h2>
      <ul className="flex flex-col">
        {tags.map((tag) => (
          <li
            key={tag}
            className="p-2 m-1 rounded-xl shadow bg-white flex justify-between items-center"
          >
            {tag}{' '}
            <button onClick={() => handleDeleteTag(tag)}>
              <Delete className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Agregar etiqueta"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTag(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default TagManager;
