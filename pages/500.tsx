import React from 'react'
import Htag from '../components/Htag/Htag'
import { withLayout } from '../layout/Layout'

const Erorr404 = ():JSX.Element => {
  return (
    <>
    <Htag tag={'h1'}  >Ошибка 500</Htag>
    </>
  )
}

export default withLayout(Erorr404)