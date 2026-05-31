import ZohoHero from '@/Components/landingPage/ZohoHero'
import ZohoPrograms from '@/Components/landingPage/ZohoPrograms'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <ZohoHero/>
        <ZohoPrograms/>
    </div>
  )
}

export default page