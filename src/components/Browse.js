
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayMovies from "../hooks/useNowPlayMovies";


const Browse = () => {
  useNowPlayMovies();
  
  return (
    <div>
      
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
        
    </div>
  );
}

export default Browse;
