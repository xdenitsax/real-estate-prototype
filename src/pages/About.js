import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import agents from '../images/agents.jpg'

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`
const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const ColumnText = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px -15px;
  padding: 1rem;
`

const Content = styled.div`
  flex: 0 0 100%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 100px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`

const ColumnImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: -65px;
  right: 0;
  max-width: 850px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  left: 0;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const About = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnImage>
            <Image
              src={agents}
              data-aos='fade-left'
              data-aos-duration='2200'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            />
          </ColumnImage>
          <ColumnText>
            <Content
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            >
              <h1>THE CENTURY 22 DIFFERENCE</h1>
              <p>
                Dedication to delivering exceptional service is at the core of
                our commitment to our clients. We love what we do, every essence
                of it, from the possibility of an unimaginable outcome to the
                fine details of deal-structuring. We live and breathe real
                estate.
              </p>
              <p>
                ???We believe that clients deserve more ??? more competency, more
                care, more focus. Simply put, Century 22 offers a higher level
                of service and a greater depth of competency than any other real
                estate organization.
              </p>
              <Button to='/'>Go Back</Button>
            </Content>
          </ColumnText>
        </Wrap>
      </Container>
    </Section>
  )
}

export default About
