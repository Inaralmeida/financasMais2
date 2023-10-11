import React, { useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'

const Dashboard = () => {

  const [contador, setContador] = useState(0)


  const handleSetContador = () => {
    setContador(contador + 1)
    console.log(contador)
  }
  return (
    <div>
      <Layout >
        <p>Salve</p>
        <p>Salve</p>
        <p>Salve</p>
        <p>Salve</p>
        <p>Salve</p>
      </Layout>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illum saepe vero minus, eum ipsam tempora a iste adipisci unde aliquam exercitationem sit cupiditate vel atque nihil optio doloremque quisquam!</p>
    </div>

  )
}

export default Dashboard