import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


export default function Dashboard() {

  const navigate = useNavigate()
  

  function handleLogout() {
    //logica de como cerrar sesion
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
      <Card className='mt-5'>
        <Card.Body class="p-3 bg-secondary text-white">
          <h2 className='text-center mb-4'>Perfil</h2>
          <strong>Correo electrónico:</strong> {localStorage.getItem('email')}
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Link to="/todo" >Lista de tareas hoy...</Link>
      </div>

      
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}  style={{ color: "Red" }} >Cerrar Sesión</Button>
      </div>
      

    </>
  )
}
