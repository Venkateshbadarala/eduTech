import AboutSection from '@/Components/AboutSection'
import Companies from '@/Components/Companies'
import FAQSection from '@/Components/FAQSection'
import WhyChooseSection from '@/Components/landingPage/WhyChooseSection'
import LearningJourney from '@/Components/LearningJourney'
import TeamSection from '@/Components/TeamsSection'
import Testimonials from '@/Components/Testimonials'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <AboutSection/>
        <WhyChooseSection />
              <LearningJourney />
              <Companies />
              <TeamSection />
              <Testimonials />
              <FAQSection />
    </div>
  )
}

export default page