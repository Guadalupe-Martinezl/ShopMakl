import React from "react";

import Header from '../../Components/Header/';

import shop from '../../images/shopMak.png';
import fondo from '../../images/fondo.jpg';
import medio from '../../images/perfil2.png';
import icono from '../../images/iconoperson.jpg';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/im2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import video from '../../images/video.mp4';

import styled, {css}from 'styled-components'


const Contain = styled.div`
  *{
    padding:0px;
    margin:0px;
  }

  .fondo{
    width: 100%;
    height: 15%;
  }


  .logo {
    width: 15%;
    height: 15%;
    border-radius: 5px;
    transform: translate(-55%, 8%);
  }

  .icono{
    width: 3%;
    height: 3%;
    border-radius: 5px;
  }


  .imgaleria{
    width:800px;
    height:400px;
  }

  #Container{
    width:800px;
    margin: 60px auto;
    overflow:hidden;
    transform: translate(-2%, -140%);
  }

  #Container ul {
    list-style: none;
    width:2800px;
    display: flex;
    animation: slide 15s infinite;
  }


  @keyframes slide {
    0%{margin-left: 0px;}
    20%{margin-left: 0px;}

    25%{margin-left: -800px;}
    45%{margin-left: -800px;}

    50%{margin-left: -1600px;}
    70%{margin-left: -1600px;}

    75%{margin-left: -2400px;}
    100%{margin-left: -2400px;}

    101%{margin-left: -3200px;}

  }

  .ia-container {
	width: 800px;
	margin: 20px auto;
	overflow: hidden;
	box-shadow: 1px 1px 4px rgba(0,0,0,0.08);
	border: 7px solid rgba(255,255,255,0.6);
    transform: translate(-2%, -110%);
}

.ia-container figure {
  position: absolute;
	top: 0;
	left: 50px;
	width: 700px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.6);
  transition: all 0.3s ease-in-out;
}
.ia-container > figure {
  position: relative;
	left: 0 !important;
}

.ia-container img {
	display: block;
	width: 120%;
}

.ia-container input {
	position: absolute;
	top: 0;
	left: 0;
	width: 50px; /* just cover visible part */
	height: 100%;
	cursor: pointer;
	border: 0;
	padding: 0;
  opacity: 0;
	z-index: 100;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

.ia-container input:checked{
	width: 5px;
	left: auto;
	right: 10px;
}
.ia-container input:checked ~ figure {
    left: 335px;
    transition: slide 0.1s infinite;

}

.ia-container figcaption {
	width: 100%;
	height: 100%;
	background: rgba(87, 73, 81, 0.1);
	position: absolute;
	top: 0px;
  transition: all 0.2s linear;
}

.ia-container figcaption span {
	position: absolute;
	top: 40%;
	margin-top: -30px;
	right: 20px;
	left: 20px;
	overflow: hidden;
	text-align: left;
	background: #FBCFAB;
	line-height: 20px;
	font-size: 30px;
  opacity: 0;
	text-transform: uppercase;
	letter-spacing: 4px;
	font-weight: 800;
	padding: 20px;
	color: #fff;
	text-shadow: 5px 1px 1px rgba(0,0,0,0.1);
}

.ia-container input:checked + figcaption,
.ia-container input:checked:hover + figcaption{
	background: rgba(87, 73, 81, 0);
}
.ia-container input:checked + figcaption span {
    transition: all 0.4s ease-in-out 0.5s;
	opacity: 1;
	top: 50%;
}
.ia-container #ia-selector-last:checked + figcaption span {
	transition-delay: 0.3s;
}
.ia-container input:hover + figcaption {
	background: rgba(87, 73, 81, 0.03);
}
.ia-container input:checked ~ figure input{
    z-index: 1;
}
.container-portada{
    width: 100%;
    height: 400px;
    position: relative;
    background-image:url(${img2});
    background-size: 200%;
    animation: movimiento 20s infinite linear alternate;
    transform:translate(-0%,-130%);
}

@keyframes movimiento{
    from{
        background-position: bottom left;
    }to{
        background-position: top right;
    }
}


.capa-gradient{
    width: 100%;
    height: 100%;
    position: absolute;
    background: -webkit-linear-gradient(left, black, orange);
    opacity: 0.6;
}

.container-details{
    width: 100%;
    max-width: 1200px;
    position: relative;
    margin: auto;
}


.details{
    width: 100%;
    max-width: 500px;
    position: relative;
    top: 20px;
    color: white;
}

.details h1{
    font-size: 40px;
    font-weight: 100;
    margin-left: 10px;
}

.details p{
    margin-top: 10px;
    font-size: 20px;
    font-weight: 100;
    margin-left: 10px;
}

.details button{
    padding: 10px 20px;
    font-size: 16px;
    background: none;
    border-style: none;
    border: 1px solid white;
    color: white;
    margin-top: 20px;
    transition: background 300ms;
    cursor: pointer;
    margin-left: 10px;
}

.details button:hover{
    background: white;
    color: black;
}


   @media screen and (max-width: 600px){

     .ia-container{
       width:90%;
       transform: translate(0%, -30%);
     }
    .li{
      margin-left: 30px;
      margin-right: 30px;
      font-size: 10px;
    }
    .medio{
      width:58%;
    }
    .logo{
      width:50%;
      transform: translate(50%, 90%);
    }
    .icono{
      width:7%;
   }
   .compras{
     width:35%;
     transform: translate(30%, -350%);
     font:100% "sans-serif";
   }
   .datos{
     width:35%;
     transform: translate(50%, -350%);
     font:100% "sans-serif";
   }

}
`;

const Input = styled.input.attrs(({ size }) => ({
  margin: size || "5em",
  padding: size || "5px"
}))`
  color:palevioletred ;
  font-size: 20px;
  border: 1px solid orange;
  border-radius: 2px;
  color: black;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;
const Busqueda = styled.input.attrs(({ size }) => ({
  margin: size || "5em",
  padding: size || "5px"
}))`
  color:palevioletred ;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 5px;
  color: black;
  width: 20%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(8%, -10%);

`;
const Button = styled.button`
  background:  #000 ;
  color: #fff;
  font:100% "sans-serif";
  border-radius: 1em;
  border: 1px solid black;
  padding: 0.25em 1em;
  transform: translate(15%);
  width: 50%;
  max-width: 500px;
  box-sizing: border-box;
`;
const Buscar = styled.button`
  background:  #000 ;
  color: #fff;
  font:100% "sans-serif";
  border-radius: 1em;
  border: 2px solid white;
  padding: 0.25em 1em;
  transform: translate(565%);
  width: 7%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(25%, -10%);
`;

const Compras = styled.button`
  background:  #000 ;
  color: #fff;
  font:95% "sans-serif";
  border-radius: 1em;
  border: 2px solid white;
  padding: 1em 1em;
  transform: translate(565%);
  width: 10%;
  box-sizing: border-box;
  transform: translate(500%, -1030%);
`;

const Datos = styled.button`
  background:  #000 ;
  color: #fff;
  font:105% "sans-serif";
  border-radius: 1em;
  border: 2px solid white;
  padding: 1em 1em;
  transform: translate(565%);
  width: 10%;
  box-sizing: border-box;
  transform: translate(280%, -939%);
`;
const Menu2 = (props) => {
  return (

      <Compras
        className="compras"
        name="busqueda"
        type="submit">
        Mis Compras
      </Compras>

  )
}
const Menu3 = (props) => {
  return (

      <Datos
      className="datos"
        name="busqueda"
        type="submit">
        Mis Datos
      </Datos>

  )
}

const Galeria = (props) => {
  return (
    <Contain>
      <div id="Container">
       <ul>
        <li><img className="imgaleria" src={img1} alt="1"/></li>
        <li><img className="imgaleria" src={img2} alt="2"/></li>
        <li><img className="imgaleria"src={img3} alt="3"/></li>
        <li><img className="imgaleria"src={img4} alt="4"/></li>
       </ul>
      </div>
    </Contain>

  )
}
const Galeria2 = (props) => {
  return (
<div class="ia-container">

	<figure>
		<img src={img1} alt="image01" />
		<input type="radio" name="radio-set" checked="checked" />
		<figcaption><span>True Colors</span></figcaption>

		<figure>
			<img src={img2}alt="image02" />
			<input type="radio" name="radio-set" />
			<figcaption><span>Tecnologias</span></figcaption>

      <figure>
    		<img src={img3} alt="image03" />
    		<input type="radio" name="radio-set" checked="checked" />
    		<figcaption><span>Maquillaje</span></figcaption>

        <figure>
      		<img src={img3} alt="image03" />
      		<input type="radio" name="radio-set" checked="checked" />
      		<figcaption><span>Electronica</span></figcaption>

          <figure>
        		<img src={img1} alt="image03" />
        		<input type="radio" name="radio-set" checked="checked" />
        		<figcaption><span>True Colors</span></figcaption>
      </figure>
      </figure>
        </figure>
      </figure>
        </figure>

    </div>
    )
  }
  const Video = (props) => {
    return (
  <div class="container-portada">
        <div class="capa-gradient"></div>
        <div class="container-details">
            <div class="details">
                <h1>Mi Perfil</h1>

            </div>
        </div>
    </div>
)
}
export default function Profile(props) {

  return(
    <Contain>
<Header />

      <img className="fondo" src={fondo}/>

   <Video/>

      <Menu2/>
      <Menu3/>

    </Contain>
  )


}
