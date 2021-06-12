import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import homeOne from '../../images/home-1.jpg'
import homeTwo from '../../images/home-2.jpg'

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: #cccccc;
`
const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #cccccc;
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
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 5rem;
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
  max-width: 550px;
  height: 60%;
  width: 100%;
  margin: 0 auto;
  left: 0;

  @media screen and (max-width: 768px) {
    top: 10px;
    height: 30%;
  }
`

const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: cover;
  border: hidden;
  border-radius: 6px;
`
const NewestHomes = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnImage>
            <Image
              src={homeOne}
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
              <h1>8 Bed 10 Bath House in Venice, California</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                reiciendis officiis earum obcaecati, tempora beatae. Dolorem
                ducimus voluptatum consectetur libero voluptatem ex autem
                reprehenderit accusantium culpa quisquam velit nihil nemo beatae
                et a, consequuntur doloremque vitae debitis rerum fuga incidunt.
                Ea dolores, nostrum laboriosam officia impedit voluptate eum!
                Sed animi officia numquam nesciunt veritatis aut assumenda
                pariatur nulla eius repudiandae!
              </p>
            </Content>
          </ColumnText>
        </Wrap>
        <Wrap>
          <ColumnImage>
            <Image
              src={homeTwo}
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
              <h1>4 Bed 2 Bath House in Miami, Florida</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                eveniet dignissimos consequatur natus laudantium magni maxime
                excepturi. Culpa suscipit velit qui rem neque, voluptates modi
                nobis aspernatur ea sed iste exercitationem corporis?
                Reprehenderit facilis impedit quod dignissimos ipsa velit nulla
                similique maxime error mollitia perspiciatis provident, rerum
                accusantium. Sunt tempore aliquid nemo velit voluptatum aliquam
                dolore ex exercitationem consectetur laudantium possimus
                distinctio natus quam, odit cumque eaque eos ratione amet
                repellat iure reprehenderit nesciunt. Id, eveniet.
              </p>
              <Button to='/homes'>Go Back</Button>
            </Content>
          </ColumnText>
        </Wrap>
      </Container>
    </Section>
  )
}

export default NewestHomes
