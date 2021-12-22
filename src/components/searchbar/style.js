import styled from 'styled-components';


export const Container = styled.div`
width:100%;
height:500px;
background-color:yellow;
display:flex;
align-items:center;
justify-content:center;
background-image:url(https://cdn.pixabay.com/photo/2017/03/27/14/17/christmas-tree-2179023_960_720.jpg);
background-position:center;
background-size:cover;
flex-direction:column;
.search{
    width:700px;
    height:50px;
    background-color:white;
    margin-top:30px;
    display:flex;
    align-items:center;
    border-radius:5px;
}
.submit{
    width:50px;
    height:50px;
    border:none;
    outline:none;
    background-color:white;
border-radius:5px;
}
.text{
height:50px;
width:500px;
border:none;
outline:none;
}

`