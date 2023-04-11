import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'



function ForgotPassword() {

    const emailRef = useRef()
    const navigate = useNavigate()

    //logica de como restablecer la contraseña
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        localStorage.setItem("email", email);
        Swal.fire({
            title: '¡Email enviado!',
            text: 'Se ha enviado un correo electrónico para restablecer su contraseña.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        navigate("/login");

    };

    return (
        <>
            <Card className='mt-5'>
                <Card.Body class="p-3 bg-secondary text-white">
                    <h2 className='text-center mb-4'>Restablecer contraseña</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label className='mt-2'>Correo electrónico</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Button className='w-100 mt-4 btn btn-primary ' type='submit'>restablecer la contraseña</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to="/login" style={{ color: "white" }}>Iniciar Sesión</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                ¿No tienes una cuenta? <Link to="/singup" >Registrarse</Link>
            </div>

            <div className="w-100 text-center mt-2">
                <Link to="/" >U-List</Link>
            </div>

        </>
    )
}

export default ForgotPassword