import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import saltLake from '../../images/saltLake.jpg'

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
const SaltLakeCity = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnImage>
            <Image
              src={saltLake}
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
              <h1>Charming house in Salt Lake City, Utah</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum nemo assumenda voluptas sapiente amet. Quam obcaecati
                iste, voluptatum mollitia repellat aut? Quo quis atque sed
                cumque magnam, mollitia voluptate. Officiis praesentium
                architecto itaque quibusdam officia consequatur reiciendis
                dolorum accusantium facilis eius vel doloremque, ipsam quis
                voluptatem odit, aperiam distinctio neque sed, magni et
                provident dolor? Quo laborum dolores distinctio porro, in, nemo
                accusamus expedita iusto placeat provident dolor quam,
                praesentium similique sapiente blanditiis suscipit aut. Rem
                inventore facilis architecto aliquam.
              </p>
              <Button to='/homes'>Go Back</Button>
            </Content>
          </ColumnText>
        </Wrap>
      </Container>
    </Section>
  )
}

export default SaltLakeCity
