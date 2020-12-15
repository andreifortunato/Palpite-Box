import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ childrem}) => {
 return (
    <div>
    <Header />
       <div className='container mx-auto'>
           { childrem}
           </div>
       <Footer/>
         </div>
    )

}
export default Layout