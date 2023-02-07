//import { useReducer } from 'react';
import './App.css';
//import InputSample from './components/InputSample';
//import Lists from './components/Lists';
import Members from './components/Members';
//import TextSample from './components/TextSample';
//import useLists from './hooks/useLists';

// function reducer(state,action){ 
//   let newList; 
//   switch(action.type){
//     case "ADDLIST":
//       return [
//         ...state,
//         action.list
//       ];
//     case "DELLIST": 
//       newList = state.filter((li,index) => index !== action.delindex)
//       return newList;
//     case "ToggleLIST":
//       newList = state.map((li,index)=>index === action.toggleIndex ? {
//         ...li,
//         isToggle: !li.isToggle
//       }: li)
//       return newList;    
//     default:
//       return state;
//   }
// }

function App() {
  //const [state,addLists, delList,toggleList] = useLists()
  return ( 
    <div className="App">
      <Members/>
     {/* <InputSample title = "props" addLists={addLists}>
      <TextSample/>
     </InputSample>
     <Lists lists={state} delList={delList} toggleList={toggleList}/> */}
    </div>
  );
}

export default App;
