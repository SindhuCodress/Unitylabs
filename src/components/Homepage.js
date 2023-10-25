 import React, {useState, useEffect} from 'react';
 import axios from 'axios';
 import { Link } from 'react-router-dom';

import PostDetail from './PostDetail';

function Homepage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const handleSearch = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://hn.algolia.com/api/v1/search?query=${query}`
        );
        setResults(response.data.hits);
        setLoading(false);
      } catch (error) {
        console.error('Error searching Hacker News:', error);
        setLoading(false);
      }
    };
  
    return (
      <div>
        <div className='text-center w-50 mx-auto shadow rounded-2 '>
            <h1>Hacker News Search</h1>
        </div>
        <div className=' my-5 w-25 text-center mx-auto '>
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Hacker News"
            
            />
            <button onClick={handleSearch}>Search</button>
            {loading && <p>Loading...</p>}
        </div>
        
        <div>
        {results.length > 0 && (
          <ul>
            {results.map((item) => (
              <li key={item.objectID}>
                 <a href={`/post/${item.objectID}`} onClick={<PostDetail query = {query} />}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
        </div>

      </div>
    );
}

export default Homepage
