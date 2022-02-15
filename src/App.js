import React from "react";
import styled from "styled-components";
import { Route, Switch, useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import Write from './Write';
import CardBox from "./CardBox"
import {db} from "./firebase"
import {deleteDoc, doc} from "firebase/firestore";
import { loadDialectFB } from "./redux/modules/Dialect";


function App() {

  const [list, setList] = React.useState([])
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect( async() => {
    const docRef = doc(db, "dialect", "aFqohjSfr40QDEN0MUPt")
    deleteDoc(docRef)
    dispatch(loadDialectFB());
  }, [])
  return (
    <div className="App">
      <Container>
        
        <Title><a href="/">고라보게</a></Title>
        <Hr/>
        <Switch>
          <Route path="/" exact>
            <CardBox list={list}/>
            <Button onClick={()=>{
                history.push("/write")
              }}>+</Button>
          </Route>
          <Route path="/write/">
            <Write/>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}


const Container = styled.section`
  width:500px;
  margin:20px auto;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 20px;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
`

const Title = styled.h1`
  color:tomato;
  font-size:60px;
  & a{
    text-decoration:none;
    color:tomato;
  }
`

const Hr = styled.hr`
  border:2px solid #efefef;
  width:100%;
  margin:0;
`

const Button = styled.div`
  color:#fff;
  font-size:65px;
  background-color:tomato;
  width:100px;
  height:100px;
  border:2px solid #fff;
  border-radius:50px;
  text-align:center;
  cursor:pointer;
  position:absolute;
  top: calc(75% + 5vh);
  left: calc(50% + 100px);
`

export default App;
