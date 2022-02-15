import {db} from "../../firebase";
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

//Actions
const CREATE = "dialect/CREATE"
const LOAD = "dialect/LOAD"

const initailState = {
    list : []
    // [{id:"1",word:"뭐 햄수광", trans:"무엇을 하고 있으신가요?", exam:"A:뭐 햄수광? B:코딩하고 있습니다."},
    // {id:"2",word:"무사 겅하맨", trans:"왜 그렇게 하시나요?", exam:"A:저는 이 문제를 브루트포싱으로 풀었습니다. B:무사 겅하맨?"},],
}

// Action Creator
export function createDialect(dialect){
    return {type:CREATE, dialect}
}

export function loadDialect(dialect_list){
    return {type:LOAD, dialect_list}
}

//middlewares
export const loadDialectFB = () =>{
    return async function(dispatch){
        const dialect_data = await getDocs(collection(db, "dialect"));
        let dialect_list = [];

        dialect_data.forEach((d) =>{
            dialect_list.push({id:d.id, ... d.data()})
        })
        dispatch(loadDialect(dialect_list))
    }
}

export const addDialectFB = (dialect) =>{
    return async function (dispatch){
        const docRef = await addDoc(collection(db, "dialect"), dialect);

        const dialect_data = { id:docRef.id, ...dialect};
        console.log(dialect_data);

        dispatch(createDialect(dialect_data));
    }
}

//Reducer

export default function reducer(state = initailState, action = {}) {
    switch (action.type) {
        case "dialect/LOAD" : {
            return { list: action.dialect_list}
        }

        case "dialect/CREATE" : {
            const new_dialect_list = [... state.list, action.dialect]
            return {...state, list:new_dialect_list}
        }
        default:
            return state;
    }
}