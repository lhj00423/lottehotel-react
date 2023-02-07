import axios from 'axios';
import React from 'react';
import useAsync from '../hooks/useAsync';

async function getMembers(){ 
    const response = await axios.get('http://localhost:8080/members');
    return response;
}
const Members = () => {
    const [state, refetch] = useAsync(getMembers);
    const {loading, data, error} = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>비상 에러;; 빨리 찾으셈</div>
    if(!data) return <div>삐용 삐용 데이터 없어요</div>
    return(
        <div>
            <ul>
                {data.map(d=><li key={d.m_no}>{d.m_name}</li>)}
            </ul>
        </div>
    );
};

export default Members;