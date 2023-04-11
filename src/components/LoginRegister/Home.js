import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>

            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>U-List</h2>
                    <p className='text-center'>Esta es una aplicación de Demo para taller de Ucamp</p>
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
            </div>

            <div className='w-100 text-center mt-2'>
                ¿No tienes una cuenta? <Link to="/singup">Registrarse</Link>
            </div>
        </>
    )
}

export default Home