import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginations from './components/Pagination/Pagination';
import { BallTriangle } from 'react-loader-spinner';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [perpage, setPerpage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // Added loading state
  const [paginationLoading, setPaginationLoading] = useState(false); // Added paginationLoading state
  const [showData, setShowData] = useState(false); // Added showData state
  // const [loadingTime, setLoadingTime] = useState(0); // Added loadingTime state

  useEffect(() => {
    // const startTime = performance.now(); // Start time before API request
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      setData(res.data);
      setPerpage(res.data.slice(0, 10));
      // const endTime = performance.now(); // End time after API request
      // const duration = endTime - startTime; // Calculate loading duration
      // setLoadingTime(duration / 1000); // Set the loading time in seconds
      setTimeout(() => {
        setLoading(false); // Set loading to false after delay
        setShowData(true); // Show the data after the delay
      }, 1000); // Delay of 1 second (1000 milliseconds)
    });
  }, []);

  const pageHandler = pagenumbers => {
    setPaginationLoading(true); // Set pagination loading to true
    setTimeout(() => {
      setPerpage(data.slice((pagenumbers * 10) - 10, pagenumbers * 10));
      setCurrentPage(pagenumbers);
      setPaginationLoading(false); // Set pagination loading to false after delay
    }, 3000); // Delay of 1 second (1000 milliseconds)
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / 10)) {
      const nextPageNum = currentPage + 1;
      pageHandler(nextPageNum);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const prevPageNum = currentPage - 1;
      pageHandler(prevPageNum);
    }
  };

  return (
    <div className="App">
      <h1>Js-placeholder-posts</h1>
      {loading || paginationLoading ? ( // Render loading spinner if loading or paginationLoading is true
        <div className="loading-spinner">
          <BallTriangle color="#00BFFF" height={180} width={180} />
          {/* <p>Loading Time: {loadingTime.toFixed(0)} seconds</p> */}
        </div>
      ) : showData ? ( // Show data after the delay
        <div>
          {data.length > 1 ? (
            <div >
              {perpage.map(post => (
                <div className="post-container">{post.title}</div>
              ))}
              <br />

              <Paginations
                data={data}
                pageHandler={pageHandler}
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
                
              />
            </div>
          ) : (
            <p>Data Not Loaded</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
