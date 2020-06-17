import React from 'react'
import './Cadastro.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form} from 'react-bootstrap'

export default function Registro() {
    return (
        <div class='backcadastro'>
            <div className="blococentralcadastro">
                <Form className='cadastrousuario'>
                    <label className='tituloCadastro'>Cadastre-se</label>
                    <Form.Group>
                        <Form.Label className=''>Nome</Form.Label>
                        <Form.Control placeholder="" type="name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className=''>Sobrenome</Form.Label>
                        <Form.Control placeholder="" type="surname"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className=''>Email</Form.Label>
                        <Form.Control placeholder="" type="email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className=''>Senha</Form.Label>
                        <Form.Control placeholder="" type="password"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className=''>Confirmar Senha</Form.Label>
                        <Form.Control placeholder="" type="password"/>
                    </Form.Group>
                    <Button href="/login" className="botao12" >Registrar-se</Button>
                    <a href='/login'>já possuo cadastro</a>
                </Form>
            </div>

        </div >
    );
}