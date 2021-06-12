import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import mexico from '../../images/mexico.jpg'

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
const Mexico = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnImage>
            <Image
              src={mexico}
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
              <h1>Casa Sirena Villa in Tijuana, Mexico</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, inventore? Quisquam quis autem, ex dolorum animi
                eveniet! Ratione harum sint iste corrupti numquam aliquid, ipsa
                sit doloribus quo nemo beatae possimus consequuntur laudantium
                incidunt recusandae illo obcaecati dicta quas amet autem
                assumenda! Corrupti ad quae numquam aliquam quaerat illum harum
                tempora quas eaque consequatur ullam quod iste at, sapiente
                pariatur eligendi accusamus, nisi recusandae enim voluptatum a
                accusantium unde? Iste voluptate natus accusamus inventore, odio
                unde voluptatibus placeat dolor. Asperiores fugit rerum expedita
                aperiam totam quis sint dolorum inventore, atque voluptatum
                ullam natus? Aut, mollitia sit nisi sint officiis minima.
              </p>
              <Button to='/homes'>Go Back</Button>
            </Content>
          </ColumnText>
        </Wrap>
      </Container>
    </Section>
  )
}

export default Mexico
