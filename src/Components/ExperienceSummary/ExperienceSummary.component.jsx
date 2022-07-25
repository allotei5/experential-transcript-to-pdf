import React, { useEffect, useState } from 'react'
import scholarshipIcon from '../../Assets/scholarship.svg'
import leadershipIcon from '../../Assets/leadership.svg'
import citizenshipIcon from '../../Assets/citizenship.svg'
import { useQuery } from '@tanstack/react-query'
import { getHours } from '../../backendApi/requests'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading.component'


const ExperienceSummary = ({ expType }) => {
  const params = useParams()
    const icons = {
        1: scholarshipIcon,
        2: leadershipIcon,
        3: citizenshipIcon
    }

    // const { loading, error, data } = useQuery(['hours'], () => getHours(params.st, expType.id))

    // if(loading) {
    //   return <Loading height='100px'/>
    // }

    // console.log(data)

    const [ hours, setHours ] = useState(0);
    useEffect(() => {
      const fetchHours = async () => {
        const hoursFromDb = await getHours(params.st, expType.id)
        setHours(hoursFromDb.data.totalHours)
      }
      fetchHours();
    }, []);

  return (
    <div>
        <img src={icons[expType.id]} alt='scholarship icon' className='w-14 mx-auto' />
        <h2 className='text-center font-semibold uppercase text-lg mt-2'>{expType.name}</h2>
        <div className='bg-[#843132] p-[2px] rounded my-0'></div>
        <h2 className='text-center font-bold uppercase text-lg'>{hours}</h2>
    </div>
  )
}

export default ExperienceSummary