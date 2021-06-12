import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import ImageOne from '../images/slide-1.jpg'
import ImageTwo from '../images/slide-2.jpg'
import ImageThree from '../images/slide-3.jpg'

const Section = styled.section`
  background: #384260;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
`

const Wrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
  text-align: justify;
`

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
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

const ColumnRight = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;
  text-align: justify;
  @media screen and (max-width: 768px) {
    height: 420px;
    top: 25px;
    width: 100%;
    margin: 0 auto;
    left: 0;
  }
`

const Image = styled.img`
  height: 60%;
  width: 70%;
  object-fit: cover;
`

const Rentals = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos='fade-right'
              data-aos-duration='3000'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            >
              <h1>
                House for rent in
                <br /> Vienna, Austria
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt maxime commodi rem dignissimos, laborum eum beatae
                harum consectetur possimus architecto!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                voluptatem.
              </p>
              <Button to='/viena'>Learn More</Button>
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={ImageOne}
              data-aos='fade-left'
              data-aos-duration='2000'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            />
          </ColumnRight>
        </Wrap>
      </Container>
      <Container>
        <Wrap>
          {' '}
          <ColumnRight>
            <Image
              src={ImageTwo}
              data-aos='fade-right'
              data-aos-duration='2000'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            />
          </ColumnRight>
          <ColumnLeft>
            <Content
              data-aos='fade-left'
              data-aos-duration='3000'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            >
              <h1>
                House for rent in <br />
                Houston, Texas
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt maxime commodi rem dignissimos, laborum eum beatae
                harum consectetur possimus architecto!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                voluptatem.
              </p>
              <Button to='/texas'>Learn More</Button>
            </Content>
          </ColumnLeft>
        </Wrap>
      </Container>
      <Container>
        <Wrap>
          {' '}
          <ColumnRight>
            <Image
              src={ImageThree}
              data-aos='fade-right'
              data-aos-duration='2000'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            />
          </ColumnRight>
          <ColumnLeft>
            <Content
              data-aos='fade-left'
              data-aos-duration='3000'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            >
              <h1>
                House for rent in <br />
                Alajuela, Costa Rica
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt maxime commodi rem dignissimos, laborum eum beatae
                harum consectetur possimus architecto!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                voluptatem.
              </p>
              <Button to='/costaRica'>Learn More</Button>
            </Content>
          </ColumnLeft>
        </Wrap>
      </Container>
    </Section>
  )
}

export default Rentals
