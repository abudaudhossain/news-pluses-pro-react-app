import { useEffect, useState } from "react"


const useNews =() =>{
    // const [allNews, setAllNews] = useState({});
    const [error, setError] = useState("");
     
    const TopHeadlinesNews = () =>{
        const [topHeadlinesNews, setTopHeadlinesNews] = useState({});
 
    
    
        const topHeadlinesNewsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=95be2f0da77f4338af50986aab2d62d8';
    
        useEffect( () =>{
            fetch(topHeadlinesNewsUrl)
            .then(res => res.json())
            .then(data =>{
                setTopHeadlinesNews(data)
            }).catch(error =>{
                setError(error);
            })
        },[])

        return topHeadlinesNews;
    }

    const CategoryNews = (catgoryName) =>{
        const [CateNews, getCateNews] = useState({});

        
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${catgoryName}&apiKey=95be2f0da77f4338af50986aab2d62d8`;

        useEffect( () =>{
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                getCateNews(data)
            }).catch(error =>{
                console.log(error);
                setError(error.message);
            })
        },[]);

        return CateNews;
    }

    

    return{
        TopHeadlinesNews,
        CategoryNews,
        error
    }
}

export default useNews;