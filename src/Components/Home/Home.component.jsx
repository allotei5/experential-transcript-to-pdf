import { useRef } from 'react'
import PageOne from '../PageOne/PageOne.component'
import { useReactToPrint  } from 'react-to-print'
import './Home.styles.css'
import { getUser } from '../../backendApi/requests'

import { Navigate } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'
import Loading from '../Loading/Loading.component'


const Home = () => {

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Ashesi Experential Transcript",
  });


  // const getUser = async () => {
    
  //   const res = await api.get('/react_check_login.php')
  //   return res
    
  // }

  const { isLoading, data, error } = useQuery(['logged-in'], () => getUser())

  if(isLoading) {
    return <Loading />
  }

  if(data?.data.isLogedin == false) {
    window.location.href="https://apps.ashesi.edu.gh/app_server/login/login"
  }


  return (
    <div style={{backgroundColor: "#fff"}}>
      <div className='container mx-auto px-4 py-5'>
        <div className='grid justify-items-end mb-5'>
            <i>Recommended browsers: EDGE and Chrome</i>
            <button onClick={handlePrint} className='bg-red-900 text-lg text-white px-5 py-2 rounded'>Download</button>
        </div>
        <PageOne ref={componentRef} />
    </div>
    </div>
  )
}

export default Home