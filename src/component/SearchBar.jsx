import  { useState } from 'react';
import PropTypes from 'prop-types';


const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                id="outlined-basic"
                label="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
    );
};

export default SearchBar;


SearchBar.propTypes = {
    onSearch: PropTypes.func
}
