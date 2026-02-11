import React, { useState } from 'react';
import InputPrimary from '../../components/input';
import { ButtonPrimary } from '../../components/button';
import DropList from './dropList';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['All','Boys', 'Girls', 'Babies']

  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        search: searchValue,
        category: selectedCategory,
      });
    }
  };

  return (
    <div className='w-[80%] h-20 bg-white  rounded-2xl  hover:rotate-0 px-8 flex items-center justify-between shadow-2xl'>
      <InputPrimary
        placeholder='Search...'
        type='text'
        name='search'
        width='w-96'
        height='h-12'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

    <div className='flex gap-4'>
      <DropList
        title='Category'
        BGcolor='bg-[#184e77]'
        width='w-32'
        data={categories}
        onSelect={(cat) => setSelectedCategory(cat === 'All' ? '' : cat)}
      />

      <ButtonPrimary
        title='Search'
        width='w-32'
        color='text-[#fff]'
        BGcolor='bg-[#ffce5c]'
        hoverColor='bg-[#000000]'
        onClick={handleSearch}
      />
    </div>
      
    </div>
  );
};

export default SearchBar;
