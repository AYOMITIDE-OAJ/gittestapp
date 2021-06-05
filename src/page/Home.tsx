import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SearchBar from '../components/Search/SearchBar';
import Spinner from "../assets/loader.gif"
import GifDetails from '../components/GifDetails/GifDetails';
import GifContainer from '../components/GifContainer/GifContainer';
import PaginationButton from '../components/Pagination/PaginationButton';

const Home: React.FC = () => {

    const [values, setValues] = useState({
        searchResult: [],
        searchField,
        loading: false,
        page: 1,
        limit: 15,
        gif: {}
    });

    const {
        searchResult,
        searchField,
        loading,
        page,
        limit,
        gif,
    } = values;

     async function fetchData(){
         try {
             const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${searchField}&limit=25&offset=${limit *(page-1)}&rating=Y&lang=en`, {
                headers: {
                    'Content-Type': 'text/plain'
                }
             });
             setValues({...values, searchResult:response.data, loading: false, gif: {}})
         } catch (error){
             console.error(error);
         }
     }

     const onSubmit = (event:any) => {
        setValues({...values, loading:true})
        event.preventDefault();
        fetchData();
     };

     useEffect(() => {
        setValues({...values, loading:true})
        fetchData();
     }, [page])
      
     const handleChange = (event:any) => {
         setValues({...values, searchField: event.target.value.toLowerCase()})
     };

     const getGifDetails = (slug) => {
         const getGif = searchResult.data.find(gif => gif.slug === slug);
         setValues({...values, gif:getGif})
     }

     const clearGif = () => setValues({...values, gif:{}})
     const setPage = (page:any) => setValues({...values, page})
    return (
        <>
            <SearchBar handleChange={handleChange} onSubmit={onSubmit} data-test='searchbar'/>
            {loading ? <img src={Spinner} alt='loading..gifs' style={{ margin: '20% 45%'}}/> : 
             gif?.slug ? 
             <GifDetails data={gif} clearGif={clearGif} data-test='gifdetails'/> :
             <>
             <GifContainer data={searchResult.data} getGif={getGifDetails} data-test='gifbox'/>
             {searchResult.data ? 
             <PaginationButton limit={limit} page={page} pagination={searchResult.pagination} setPage={setPage}/> 
              : null }
             </>
            } 
        </>
    )
};

export default Home;
