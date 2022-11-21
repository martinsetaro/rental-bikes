import Head from "next/head";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'


export default function Layout({children,title,description=""}) {
  return (
   <>
   <Head>
    <title>{title}</title>
    <meta name="description" content={description}/>
    <meta name="author" content="Jorge Martin Setaro" />
    
   </Head>
   <Header/>
   {children}
   <Footer/>

   </>
  )
}
