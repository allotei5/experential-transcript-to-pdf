import { useRef } from 'react'

import PageOne from '../PageOne/PageOne.component'
import { useReactToPrint  } from 'react-to-print'
import './Home.styles.css'


const Home = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className='container mx-auto px-4 py-5'>
        <div className='grid justify-items-end mb-5'>
            <button onClick={handlePrint} className='bg-red-900 text-lg text-white px-5 py-2 rounded'>Download</button>
        </div>
        <PageOne ref={componentRef} />
    </div>
  )
}

export default Home