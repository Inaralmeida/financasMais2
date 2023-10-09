import React from 'react'
import BannerBemVindos from '../../components/BannerBemVindos/BannerBemVindos'
import BannerDesafioFinanceiro from '../../components/BannerDesafioFinanceiro/BannerDesafioFinanceiro'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const LandingPage = () => {
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