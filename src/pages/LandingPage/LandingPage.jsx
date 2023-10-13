import React from 'react'
import BannerBemVindos from '../../components/views/LandingPage/BannerBemVindos/BannerBemVindos'
import BannerDesafioFinanceiro from '../../components/views/LandingPage/BannerDesafioFinanceiro/BannerDesafioFinanceiro'
import Footer from '../../components/views/LandingPage/Footer/Footer'
import Header from '../../components/views/LandingPage/Header/Header'
import { getCategorias } from '../../service/api'

const LandingPage = () => {

  getCategorias('/categorias')
  return (
    <div className="container">
      <Header />
      <BannerBemVindos />
      <BannerDesafioFinanceiro />
      <Footer />
    </div>
  )
}

export default LandingPage