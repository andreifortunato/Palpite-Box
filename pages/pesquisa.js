import React from 'react'


const Pesquisa = () => {
    const save = async () => {
     alert(1)
    }
    const form ={
        Nome: 'aaaa',
        Email: 'bbbb',
        whatsapp: 'cccc',
    }
    const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
})
const data = await response.json()
console.log(data)

    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-2x1'>Críticas e sugestões</h1>
            <p className='text-center'>
                O  restaurante  X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir sua opinião.</p>
            <div className='w-1/5 mx-auto bg-red-100'>
               <label className='font-bold mx-auto'>Seu nome:</label>
               <input type='text' className='p-4 block shadow bg-pink-400 my-2 rounded'/>
               <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
                </div>
        </div>
    )
}

export default Pesquisa