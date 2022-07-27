import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { getStudentProfile } from '../../backendApi/requests';
import Loading from '../Loading/Loading.component';

const StudentProfile = () => {
  const params = useParams();
//   console.log(params)

  // if no login send to app server login
  // if no get url send to transcript home page
  // if no student / user data send to transcript home

  const { isLoading, error, data } = useQuery(['student-profile'], () => getStudentProfile(params.st))

  if(isLoading) {
    return <Loading height='100px' />
  }
  
  return (
    <div>
        <table className=''>
            <tbody className='text-left'>
            <tr>
                <th className='text-[15px]'>NAME</th>
                <td>{data?.data.user_fname} {data?.data.user_lname}</td>
            </tr>
            <tr>
                <th className='text-[15px]'>DEGREE</th>
                <td>{data?.data.degree_name}</td>
            </tr>
            <tr>
                <th className='text-[15px]'>MAJOR</th>
                <td>{data?.data.major_name}</td>
            </tr>
            <tr>
                <th className='text-[15px]'>EXPECTED DATE OF <br />GRADUATION</th>
                <td>{data?.data.year_group_name}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default StudentProfile