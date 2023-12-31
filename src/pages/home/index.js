import './home.css';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/schw.json'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Home() {

  // Lottie File
  const [animationStyle] = useState(
    {
      width: '100%',
      height: '100%',
      padding: '2rem',
    }
  ); 
  //End Lottie File

  const [ texto ] = useTypewriter({
    words: ["Projetista em InfraEstrutura de Redes.", "Desenvolvedor Front-End (FreeLancer).", "Analista em Segurança de Redes."],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 2000,
  })



  return (
    <div className='content-home'>
      <div>
        <Lottie animationData={animationData} style={animationStyle} />
      </div>
      <div className='apresentacao'>
        <h1>Olá, me chamo <span>Carlos Schwanke.</span></h1>
        <h3>Tenho <span>28 anos.</span></h3>
        <h2>Trabalho como: <span>{texto}<Cursor cursorColor='#ADF1D2'cursorStyle="|"/></span></h2>
        <h4>Meu trabalho é transformar idéias em soluções inteligentes!</h4>
        
      </div>
      
    </div>
  )
};
