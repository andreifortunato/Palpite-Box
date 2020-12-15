import React from 'react'

const Footer = () =>{
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold'>
            Projeto desenvolvido por:{''}
            <a className='hover:underline' href='--------'>Andrei Fortunato </a> /{''}
             <a className='hover:underline' href='-------'> LinkedIn </a> /{''}
              <a className='hover:underline' href='-------'> GitHub </a>
              <div className='mt-2'>
              <img className='inline p-4' src='logo_semana_fsm.png' />
              <img className='inline p-4' src='logo_devpleno.png' />
              </div>
            </div>
        </div>
    )
}
export default Footer