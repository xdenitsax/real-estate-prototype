import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'
import chicago from '../images/chicago.jpg'
import canada from '../images/canada.jpg'
import ilinois from '../images/ilinois.jpg'
import keywest from '../images/keywest.jpg'
import mexico from '../images/mexico.jpg'
import houseOne from '../images/house-1.jpg'
import houseTwo from '../images/house-2.jpg'
import houseThree from '../images/house-3.jpg'
import houseFour from '../images/house-4.jpg'
import saltLake from '../images/saltLake.jpg'
import { Button } from '../components/Button'

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);
  background: #f2f2f2;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`

const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem 1rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const InfoWrap = styled.div`
  padding: 0rem 3rem;
  min-height: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 1rem;
    align-items: center;
  }
`

const Image = styled.img`
  width: 400px;
  height: 300px;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 10px 10px 20px 0 #a6a6a6;
`

const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #384260;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`
const Homes = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1>View our Homes</h1>
        </Heading>
        <InfoRow>
          <InfoWrap
            data-aos='zoom-out-up'
            data-aos-duration='3000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image src={chicago} alt='home' />
            <h2>
              6 Bed 7 Bath House in Evanston,
              <br /> Ilinois
            </h2>
            <InfoLink to='/evanston'>
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos='zoom-out-down'
            data-aos-duration='3000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image src={canada} alt='home' />
            <h2>
              2 Bed 1 Bath House in Montréal,
              <br /> Canada
            </h2>
            <InfoLink to='/montreal'>
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
        <InfoRow>
          <InfoWrap
            data-aos='zoom-out-up'
            data-aos-duration='3000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image src={saltLake} alt='home' />
            <h2>
              4 Bed 3 Bath House in <br />
              Salt Lake City, Utah
            </h2>
            <InfoLink to='/salt-lake-city'>
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos='zoom-out-down'
            data-aos-duration='3000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image src={keywest} alt='home' />
            <h2>
              3 Bed 2 Bath House in Key West,
              <br /> Florida
            </h2>
            <InfoLink to='/keywest'>
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
        <InfoRow>
          <InfoWrap
            data-aos='zoom-out-up'
            data-aos-duration='3000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image src={mexico} alt='home' />
            <h2>
              4 Bed 5 Bath House in Tijuana,
              <br /> Mexico
            </h2>
            <InfoLink to='/mexico'>
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos='zoom-out-down'
            data-aos-duration='3000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image src={ilinois} alt='home' />
            <h2>
              4 Bed 3 Bath House in <br /> Schaumburg, Ilinois
            </h2>
            <InfoLink to='/shaumburg'>
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
        <InfoRow>
          <InfoWrap
            data-aos='zoom-out-up'
            data-aos-duration='3000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image src={houseOne} alt='home' />
            <h2>LUXURY VILLA IN BALI, INDONESIA</h2>
            <InfoLink>
              <p>Coming soon..</p>
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos='zoom-out-down'
            data-aos-duration='3000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image src={houseTwo} alt='home' />
            <h2>HOUSE IN SAN JOSE, COSTA RICA</h2>
            <InfoLink>
              <p>Coming soon..</p>
            </InfoLink>
          </InfoWrap>
        </InfoRow>
        <InfoRow>
          <InfoWrap
            data-aos='zoom-out-up'
            data-aos-duration='3000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image src={houseThree} alt='home' />
            <h2>HOUSE IN CALABASAS, CALIFORNIA</h2>
            <InfoLink>
              <p>Coming soon..</p>
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos='zoom-out-down'
            data-aos-duration='3000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image src={houseFour} alt='home' />
            <h2>HOUSE IN SANDPOINT, IDAHO</h2>
            <InfoLink>
              <p>Coming soon..</p>
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
      <Button
        to='/'
        css={`
          margin-left: 5%;
        `}
      >
        Go Back
      </Button>
    </Section>
  )
}

export default Homes
