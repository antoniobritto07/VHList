import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'

export default function Login() {
    return (
        <div className='backlogin'>
            <div className='blococentrallogin'>
            <Form className='loginusuario'>
                    <label className='tituloLogin'>Entrar</label>
                    <Form.Group>
                        <Form.Label className=''>Email</Form.Label>
                        <Form.Control placeholder="" type="email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className=''>Senha</Form.Label>
                        <Form.Control placeholder="" type="password"/>
                    </Form.Group>
                    
                    <Button className='botao12 wh-120'>Entrar</Button>
                    <a href='/cadastro'>não possuo cadastro</a>
                </Form>
            </div>
        </div>
    );
}