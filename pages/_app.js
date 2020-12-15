import React from 'react'
import '../css/styles.css'
import Layout from '../components/Layout'




const MyApp = ({ Components, pageProps }) => {
    return (
     <Layout>
      < Components  {...pageProps} />
     </Layout>   
        
    )
}
