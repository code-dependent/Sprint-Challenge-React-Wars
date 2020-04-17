import React, {useState, useEffect} from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Characters from './components/Character';
import axios from 'axios';
import Container from './components/Container';

const App = () => {

  const [character, setCharacter]=useState([])
  const [nextPageUrl, setNextPageUrl] = useState('')
  const [prevPageUrl, setPrevPageUrl] = useState('')
  const [page, setPage] = useState('https://rickandmortyapi.com/api/character/')
  
useEffect(()=>{

  axios.get(page)
  
  .then(res=>{

    setCharacter(res.data.results)

    setNextPageUrl(res.data.info.next)

    setPrevPageUrl(res.data.info.prev)
  })

  .catch(err=>{

    debugger})

},[page])


const nextPageHandler = ()=>{

  if(nextPageUrl != ''){

    return setPage(nextPageUrl)
  }
}

const prevPageHandler = ()=>{

  if(prevPageUrl != ''){

  setPage(prevPageUrl)
  }
}
  return (

    <Container className="App">

      <Button style={{width: '40px', height:'30px'}} onClick={prevPageHandler}>Prev. Page</Button>

      <Button style={{width: '40px', height:'30px'}} onClick={nextPageHandler}>Next Page</Button>

      {
        character.map(char=>(<Characters key={char.id} char={char}></Characters>))
      }
    </Container>
  );
}

export default App;
