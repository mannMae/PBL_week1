import React from "react";
import styled from "styled-components";
import { useHistory,useEffect } from "react-router-dom";
import {db} from "./firebase";
import {addDialectFB} from "./redux/modules/Dialect"
import { useDispatch } from "react-redux";

const Write = () =>{
    
    const word= React.useRef(null);
    const trans= React.useRef(null);
    const exam= React.useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const addDialectList = () =>{
        dispatch(addDialectFB({word:word.current.value, trans:trans.current.value, exam:exam.current.value}))
    }
    return (
        <InputForm>
            <Title>고라봅서양</Title>
            <div>
                <label>사투리
                    <input type="text" ref={word}/>
                </label>
            </div>
            <div>
                <label>번역
                    <input type="text" ref={trans}/>
                </label>
            </div>
            <div>
                <label>예시
                    <input type="text" ref={exam}/>
                </label>
            </div>
            <Button onClick={() =>{
                addDialectList()
                history.push("/");
                }}>등록하기</Button>
            <Button onClick={()=>{
                history.push("/");
            }}>뒤로가기</Button>
        </InputForm>        
    )
}

const InputForm = styled.div`
    display:flex;
    flex-direction:column;
    & div{
        background-color:tomato;
        margin:10px;
        padding:40px;
        border-radius:30px;
    }
    & label{
        color:#fff;
        font-weight:700;
        font-size:30px;
    }
    & input{
        margin-left:10px;
        width:270px;
        height:40px;
        border-radius:10px;
        border:none;
        font-size:20px;
    }
    & input:focus{
        outline:none;
    }
`

const Title = styled.h2`
    color:tomato;
    text-align:center;
`

const Button = styled.button`
    background-color:tomato;
    margin:10px;
    padding:10px;
    border-radius:30px;
    display:inline-block;
    border:none;
    cursor:pointer;
    color:#fff;
    font-size:20px;
    font-weight:700;
`

export default Write;