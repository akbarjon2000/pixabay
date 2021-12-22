import styled from 'styled-components';

export const Container = styled.div`
   width:100%;
   display:flex;
   flex-direction:column;

   background-color:white;
       box-shadow: 0 0 60px rgb(0 0 0 / 12%);
       display:flex;
       align-items:center;
       padding:0 30px 0 20px;
    .logo{
        width:40px;
        height:40px;
${'' /* margin-right:40px; */}


    }
    .list{
       text-decoration:none;
       color:black;
       margin-right:30px;
       font-size:15px;
    }
    .pixabay{
        font-family: 'Comfortaa', cursive;
        font-weight:700;
        font-size:20px;
        margin-right: 65px;;
    }
    .uploadbtn{
        display:flex;
        align-items:center;
        justify-content:center;   
     width:100px;
     height:35px;
     border-radius:18px;
     border:none;
     background-color:lightgreen;
     color:white;
     cursor:pointer;
    }
`
Container.Body = styled.div`
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


`