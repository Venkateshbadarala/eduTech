import AmbassadorBenefits from '@/Components/AmbassadorBenefits'
import AmbassadorHero from '@/Components/AmbassadorHero'
import CampusAmbassadorSection from '@/Components/CampusAmbassadorSection'
import FAQSection from '@/Components/FAQSection'
import JourneySelectionSection from '@/Components/JourneySelectionSection'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
        <AmbassadorHero/>
        <CampusAmbassadorSection/>
        <AmbassadorBenefits/>
        <JourneySelectionSection/>
        <FAQSection/>
    </div>
  )
}

export default page