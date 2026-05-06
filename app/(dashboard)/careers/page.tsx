import InstructorBenefits from '@/Components/Instructor/InstructorBenefits'
import InstructorHero from '@/Components/Instructor/InstructorHero'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <InstructorHero/>
        <InstructorBenefits/>
    </div>
  )
}

export default page