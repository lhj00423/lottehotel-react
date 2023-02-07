import React,{useReducer} from 'react';
function reducer(state,action){
    let newList; 
    switch(action.type){
      case "ADDLIST":
        return [
          ...state,
          action.list
        ];
      case "DELLIST": 
        newList = state.filter((li,index) => index !== action.delindex)
        return newList;
      case "ToggleLIST":
        newList = state.map((li,index)=>index === action.toggleIndex ? {
          ...li,
          isToggle: !li.isToggle
        }: li)
        return newList;    
      default:
        return state;
    }
  }
const useLists = () => {
    const [state,dispatch] = useReducer(reducer,[])
    const addLists = (nickname,name) => {
        dispatch({
        type: "ADDLIST",
        list: {nickname:nickname, name:name}
        })
    }
   const delList = (delindex) => {
    dispatch({
      type:"DELLIST",
      delindex:delindex
    })
  } 
     const toggleList = (toggleIndex) => {
       dispatch({
        type:"ToggleLIST",
        toggleIndex: toggleIndex
      })
   } 
    return [state, addLists, delList, toggleList];
};

export default useLists;