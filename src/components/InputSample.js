import React, { useState } from 'react';

const InputSample = ({title,children,addLists}) => {
    const [inputs, setInputs] = useState({
        userName: "",
        userNickname: ""
    });
    const {userName, userNickname} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    } 
    const onClick = () => {
        addLists(userNickname, userName);
        setInputs({
            userName: "",
            userNickname: ""
        })
    }
    return (
        <div>
            <h2>{title}</h2>
            {children}
            <input type = "text" name= "userName" value={userName} onChange={onChange}/>
            <input type = "text" name= "userNickname" value={userNickname} onChange={onChange}/>
            <button onClick={onClick} >추가</button>
        </div>
    );
};

export default InputSample;