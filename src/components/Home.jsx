import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';

import {setMovies} from "../store/MovieSlice"
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase"



const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Home = () => {

  const dispatch=useDispatch();
  const userName=useSelector((state)=> state.user.name);
  let newDisneys = [];
  let recommends= [];
  let trendings = [];
  let originals = [];

  useEffect(()=>{

    const fetchdata=async()=>{
      try{
        const querySnapshot = await getDocs(collection(db, "movies"));
        querySnapshot.forEach((doc) => {
          switch(doc.data().type){
            case "recommend":
              recommends = [...recommends,({id :doc.id, ...doc.data()})];
              break;
            case "new":
              newDisneys = [...newDisneys,({id :doc.id, ...doc.data()})];
              break;
            case "original":
              originals = [...originals,({id :doc.id, ...doc.data()})];
              break;
            case "trending":
              trendings = [...trendings,({id :doc.id, ...doc.data()})];
              break;
            }
          });
          dispatch(setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trendings,
      
          }));

        
      }
      catch(err){
        console.log(err);
      }
    }


    fetchdata();

    
   

  },[userName])

  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Recommends/>
      <NewDisney/>
      <Originals/>
      <Trending/>
    </Container>
  )
}

export default Home
