import React from 'react'
import styled from 'styled-components'

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

  h1 {
    text-align: center;
    font-weight: 300px;
  }
`
const Form = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 100;
  }
  input {
    width: 200px;
    height: 30px;
    padding: 2px 7px;
    background: #cccccc;
    border: hidden;
    border-radius: 4px;
  }
  input:focus {
    outline: none;
    font-size: 14px;
  }

  button {
    height: 40px;
    width: 90px;
    margin-top: 30px;
    background: #fcb332;
    border: hidden;
  }
`

const Message = styled.div`
  margin-top: 60px;

  h3 {
    font-size: 17px;
    text-align: center;
    margin-bottom: 20px;
  }
  input {
    width: 400px;
    height: 200px;
  }
`
const Contact = () => {
  const handleEvent = event => {
    event.preventDefault()
    alert('You have send your message!')
  }
  return (
    <Section>
      <Container>
        <h1>SEND US A MESSAGE:</h1>
        <Form>
          <h3>First Name</h3>
          <input type='text'></input>
          <h3>Last Name</h3>
          <input type='text'></input>
          <h3>Email address:</h3>
          <input type='text'></input>
          <Message>
            <h3>Your message:</h3>
            <input type='text'></input>
          </Message>
          <button onClick={event => handleEvent(event)}>Send</button>
        </Form>
      </Container>
    </Section>
  )
}

export default Contact
