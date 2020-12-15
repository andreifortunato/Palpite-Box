import React from 'react'
import Link  from 'next/link' 
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(re => resizeBy.json())

const Index = () => {
    const {data, error } = useSWR('/api/get.promo', fetcher)
return (<pre>{JSON.stringify(data)}</pre>)
    return ( 
    <div>
    <p className='my-12 text-center'>
        restaurante  X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir sua opinião.</p>
    <div>
        <Link href='/pesquisa'>
            <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
        </Link>
    </div>
    { !data && <p>Carregando...</p>}
    { !error && !data && data.showCoupon &&
    <p className='mt-12 text-center'>
        { data.massage }
        Mensagem de desconto.
    </p>
}
        </div>
    )
  
}

export default Index 