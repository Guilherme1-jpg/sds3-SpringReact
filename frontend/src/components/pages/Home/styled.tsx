import styled from 'styled-components';

export const Btncustom = styled.button`

button{transform: translate(-50%, -50%);}
background:#fff;

a{
    line-height: 40px;
    font-size: 25px;
    font-family: sans-serif;
    text-decoration: none;
    color: rgb(7, 5, 5);
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all .35s;
    position: relative;
    z-index: 2;
   
  }
  
  a span{
    position: relative;
    z-index: 2;
  }
  
  a:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background:	#FF8C00;
    transition: all .35s;
  }
  
  a:hover{
    color: #000;
  }
  
  a:hover:after{
    width: 100%;
  }
  
`;

 