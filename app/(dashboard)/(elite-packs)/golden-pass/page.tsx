import GoldBenefits from '@/Components/landingPage/GoldBenefits'
import GoldenCareers from '@/Components/landingPage/GoldenCareers'
import GoldenPassBenefits from '@/Components/landingPage/GoldenPassBenefits'
import GoldenPassHero from '@/Components/landingPage/GoldenPassHero'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <GoldenPassHero/>
        <GoldBenefits/>
        <GoldenCareers/>
        <GoldenPassBenefits/>
    </div>
  )
}

export default page