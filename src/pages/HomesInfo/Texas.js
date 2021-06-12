import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import ImageOne from '../../images/slide-2.jpg'

const Section = styled.section`
  background: #cccccc;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 80px;
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
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;
  margin-right: 20px;

  @media screen and (max-width: 960px) {
    margin-botom: 30px;
  }

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -105px;
    width: 50%;
    margin: 0 auto;
    left: 0;
  }
`

const Image = styled.img`
  height: 70%;
  width: 100%;
  object-fit: cover;

  @media screen and (max-width: 960px) {
    border: solid 5px #cccccc;
    border-radius: 50%;
  }
`

const Texas = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            >
              <h1>
                House for rent
                <br />
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
              <Button to='/contact'>Contact Us</Button>
            </Content>
          </ColumnLeft>
        </Wrap>
        <ColumnRight>
          <Image
            src={ImageOne}
            data-aos='fade-left'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          />
        </ColumnRight>
      </Container>
    </Section>
  )
}

export default Texas
