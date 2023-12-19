
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row'
import requests from './requests';

function App() {
  return (

    <div>
      <Nav/>
      <Banner fetchURL={requests.fetchNetflixOriginals}/>
      <div>
        
        <Row isPoster="true" title="NetflixOriginals" fetchURL={requests.fetchNetflixOriginals}/>
  
        <Row isPoster="true" title="Trending Movies" fetchURL={requests.fetchTrending}/>
  
        <Row isPoster="true" title="Top Rated Movies" fetchURL={requests.fetchTopRated}/>
  
        <Row isPoster="true" title="Action Movies" fetchURL={requests.fetchActionMovies}/>
  
        <Row isPoster="true" title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
  
        <Row isPoster="true" title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
  
        <Row isPoster="true" title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
  
        <Row isPoster="true" title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
  
      </div>
    </div>
  );
}

export default App;
