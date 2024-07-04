"use client"

import { useRef } from 'react'
import About from './About/page'
import Contact from './Contact/page'
import Landing from './Landing/page'
import Members from './Members/page'
import Mentors from './Mentors/page'
import Form from './form/page'

export default function Home() {

  const pageRef = {
    home: useRef(null),
    about: useRef(null),
    members: useRef(null),
    mentors: useRef(null),
    contact: useRef(null)
  }

  const scrollToPage = pageRef => {
    pageRef.current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className='overflow-hidden'>
      <Form />
      {/* <Landing pageRef={pageRef} scrollToPage={scrollToPage} />
      <About pageRef={pageRef.about} />
      <Members pageRef={pageRef.members} />
      <Mentors pageRef={pageRef.mentors} />
      <Contact pageRef={pageRef.contact} /> */}
    </div>
  )
}
