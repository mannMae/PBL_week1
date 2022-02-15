import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CardBox = (props) =>{
    const my_words = useSelector((state) =>state.dialect.list);

    return(
        <ListStyle>
            {my_words.map((list, index) =>{
                return (
                    <ItemStyle className="list_item" key={index}>
                        <span>사투리</span>
                        <h3>{list.word}</h3>

                        <span>번역</span>
                        <p>{list.trans}</p>
                        
                        <span>예시</span>
                        <p>{list.exam}</p>
                    </ItemStyle>
                )
            })}
        </ListStyle>
    )
}
const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 50vh;
`;

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    color:#fff;
    font-size:16px;
    width:450px;
    background-color: tomato;
    border-radius:20px;
    & span{
        font-weight:bold;
    }
    & h3{
        font-weight:400;
    }
`;

export default CardBox;