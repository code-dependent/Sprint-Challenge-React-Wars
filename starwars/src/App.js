import React, {useState, useEffect} from 'react';
import './App.css';

import { Button } from 'reactstrap';
import Characters from './components/Character';
import axios from 'axios';
import Container from './components/Container';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter]=useState([])
  const [nextPageUrl, setNextPageUrl] = useState('')
  const [prevPageUrl, setPrevPageUrl] = useState('')

  const [page, setPage] = useState('https://rickandmortyapi.com/api/character/')


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
useEffect(()=>{
  axios.get(page)
  .then(res=>{
    setCharacter(res.data.results)
    setNextPageUrl(res.data.info.next)
    setPrevPageUrl(res.data.info.prev)

    console.log(res.data, "here")
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
  if(prevPageUrl != '')
  setPage(prevPageUrl)

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
