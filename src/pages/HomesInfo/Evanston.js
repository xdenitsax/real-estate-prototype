import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import chicago from '../../images/chicago.jpg'

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: #bec5d9;
`
const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
  background: #bec5d9;
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
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
    text-align: justify;
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
`

const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: cover;
  border: hidden;
  border-radius: 6px;
`
const Evanston = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnImage>
            <Image
              src={chicago}
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
              <h1>An amazing house in Evanston, Ilinois</h1>
              <p>
                Once featured in "Evanston Magazine," this exquisite,
                meticulously renovated and restored 6 bedroom, 7 full bath condo
                feels like you've stepped into a Paris salon. It has all the
                modern conveniences and extensive upgrades, including cook's
                kitchen with high-end Viking appliances, and amazing baths all
                with custom cabinetry, soapstone and marble, and Kohler
                fixtures. Butler's pantry plus full-size stackable washer/dryer
                and pantry. It is wired for sound and internet, with SpacePak
                A/C, stripped and repainted moldings and windows, new restored
                hardware and beautiful fireplace with mantel. The brick has been
                exposed in the gallery hallway, which also includes a unique
                custom built-in traveler's armoire. The oak floors have been
                redone in a dark stain throughout. All new lighting and window
                treatments. Cosy enclosed back porch with swing, overlooking the
                back yard. One car private garage. Located in popular southeast
                Evanston, near to Lake Michigan beaches, Main Street trains,
                buses, restaurants, coffee shops and more..
              </p>
              <Button to='/homes'>Go Back</Button>
            </Content>
          </ColumnText>
        </Wrap>
      </Container>
    </Section>
  )
}

export default Evanston
