import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostDetail({query}) {
    const { objectID } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log(query)
        console.log('Objectid: ', objectID)
      const fetchPostDetail = async () => {
        try {
          const response = await axios.get(
            `http://hn.algolia.com/api/v1/items/${objectID}`
          );
          setPost(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching post details:', error);
          setLoading(false);
        }
      };
  
      fetchPostDetail();
    }, [objectID]);
  
    return (
      <div>
        <div className='  row'>
        <div className='  col w-25 mx-auto '>
            <h1>Post Details page</h1>
            
        </div>
        <div className=' col mt-3' style={{marginRight: '-80%'}}>
            <a href={`/${query}`}>
                <button className='rounded-2 shadow border-1'>Back</button>
            </a>
            </div>
        </div>
       
        {loading && <p>Loading...</p>}
        {post && (
          <div>
            <h1>{post.title}</h1>
            <p>Points: {post.points}</p>
            <h2>Comments:</h2>
            <ul>
              {post.children.map((comment, index) => (
                <li key={index}>{comment.text}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
}

export default PostDetail;