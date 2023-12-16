import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyComponent from '../../components/Maps';
import './contato.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contato() {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ textArea, setTextArea ] = useState('');

    function sendEmail(e){

        e.preventDefault();

        if(name === '' || email === '' || textArea === ''){
            alert('Preencha todos os campos por favor!')
            return;
        }

        const templateParams = {
            from_name: name,
            mensagem: textArea,
            email: email
        }

        emailjs.send("service_2r1xl43", "template_isom4hj", templateParams, "d7NN1bT_zRwrdBvxf")
        .then((response) =>{
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('');
            setEmail('');
            setTextArea('');
        }, (err) => {
            console.log("ERRO: ", err)
        })
    }

    return (
        <div className='contato-content'>
            <h1 style={{ color: "#ADF1D2"}}>CONTATO</h1>
            <div className='form-label'>
                <Form className='form-content' onSubmit={sendEmail}>

                    <Form.Group className="mb-4">
                        <Form.Label ><h4>Nome</h4></Form.Label>
                        <Form.Control type="name" value={name} placeholder="Informe seu nome" onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label ><h4>Email</h4></Form.Label>
                        <Form.Control type="email" placeholder="Informe seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className='text-form-muted'>
                            Seu email está seguro!
                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-4">
                        <Form.Label><h4>Assunto</h4></Form.Label>
                        <Form.Control as="textarea" value={textArea} rows={8} onChange={(e) => setTextArea(e.target.value)} placeholder="Informe o assunto" />
                    </Form.Group>


                    <Button className='button-form' type="submit">
                        ENVIAR
                    </Button>
                </Form>
            </div>
            <div className='maps'>
                <MyComponent />
            </div>
        </div>
    )
};
