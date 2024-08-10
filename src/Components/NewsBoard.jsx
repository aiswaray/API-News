import { useEffect, useState } from 'react';
import NewsItem from './NewsItems'; // Assuming NewsItems is another component

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
          const response = await fetch(url);
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setArticles(data.articles); // Update articles state with fetched data
        } catch (error) {
          setError(error.message);
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [category]); // Include category in dependency array if it changes
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <h2 className="text-center"> Latest <span className="badge text-bg-danger fs-4"> News </span> </h2>
        {articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))}
      </div>
    );
  };

export default NewsBoard;