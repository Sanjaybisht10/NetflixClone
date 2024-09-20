
 import Header from './Header';
 import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayMovies from "../hooks/useNowPlayMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from '../hooks/useTopratedMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  useNowPlayMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcommingMovies();
  
  return (
   <div>
      <Header />
      {showGptSearch ? (<GptSearch />) : (
      <>
      <MainContainer />
      <SecondaryContainer/>
      </>
    )}

     

    </div>
  );
}

export default Browse;
