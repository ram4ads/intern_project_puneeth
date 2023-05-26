import React, { useState, useEffect } from 'react';
import { TailSpin} from 'react-loader-spinner';
import './Infinite.css'
const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  console.log("save:", page)
  console.log("data:", data)
  // Simulated data fetching function
  const fetchData = async () => {
    setIsLoading(true);
    // Replace this with your actual data fetching logic
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const newData = await response.json();
    setData(prevData => [...prevData, ...newData]);
    setPage(prevPage => prevPage + 1);
    setIsLoading(false);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Scroll event listener to trigger data fetching
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !isLoading
      ) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return (
    <div className='infinite-maincontianer'>
      {/* Render your data */}
      {data.map(item => {
      console.log(item.id); // Add this console log to check for duplicate values
      return <div className='infinit-contianer'>
      <div key={item.id}>{item.title}</div>
      <img src={item.url} alt='foto' className='image-gallery'/>
      </div>;
    })}
      
      {/* Render a loading indicator if data is being fetched */}
      {isLoading && <div className='spinner'>
      <TailSpin  className='spinner-class'  visible={true} ariaLabel='tail-spin-loading'/>
      <p className='loading'>Loading.....!</p>
        </div>}
    </div>
  );
};

export default InfiniteScroll;
