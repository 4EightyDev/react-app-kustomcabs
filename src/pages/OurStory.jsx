import { faFilePen } from '@fortawesome/pro-light-svg-icons'
import React from 'react'
import { Intro, PageTitle } from '../components'

const OurStory = () => {
     return (
          <>
               <PageTitle title='Our Story' />
               <Intro
                    subtitle='About Kustomcabs'
                    title='Our Story'
                    copy='In October of 2015 Joe started Kustomcabs LLC out of his 3-car garage in Chandler, AZ. Word-of-mouth spread quickly and within seven months Kustomcabs grew out of that small space and into its first shop on Arizona Avenue in Chandler. With a bigger shop comes the need for more people and better tools. The next challenge was to impart his vision onto his workers and to develop a team of highly skilled craftsmen who would carry out his vision for quality custom cabinetry.'
                    buttonIcon={faFilePen}
                    buttonHref='/free-quote'
                    buttonText='Get A Free Quote'
               />
          </>
     )
}

export default OurStory