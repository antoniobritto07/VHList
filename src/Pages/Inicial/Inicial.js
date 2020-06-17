import React from 'react'
import './Inicial.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from './rodacortada.jpg'
import { Button } from 'react-bootstrap'

export default function Inicial() {
    return (
        <div className='backinicial'>
            <div className='logodosite'>
                <img src= {Image} alt="logosite" />
           </div>
            <div className='infogerais'>
                <h1>VHList</h1>
                <h3 className='textoinicial'>Seus veículos preferidos<br/>em um só lugar</h3>
                <Button href='/cadastro' className='botaodecadastrar'>Registrar-se</Button>
                <a href='/login'>acesse a sua conta</a>
            </div>
        </div>
    );
}