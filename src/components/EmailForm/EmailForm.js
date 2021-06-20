import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './EmailForm.css'
import axios from 'axios'

export default class EmailForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       subject: '',
       content: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/d41d153d-585c-40a1-8c4a-4af6b9c80541', this.state)
    .then(response => {
        alert("success!!")
      console.log(response);
    })
  }
  render() {
    const { name, email, subject, content } = this.state;    
    return (
      <Container id="main2" fluid className="container">
        
        <Form id="form" lassName="form" onSubmit={this.submitHandler}>
        <Header className="form_title" style={{color: '#ffff'}} as='h2'>How can we help!</Header>
          <Form.Field>
            <label  style={{color: '#ffff'}} >Name</label>
            <input id="name" placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label  style={{color: '#ffff'}} >Email</label>
            <input id="email" placeholder='Enter your email' type="text" name = "email" value = {email} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label  style={{color: '#ffff'}} >Subject</label>
            <input id="subject" placeholder='Subject' type="text" name = "subject" value = {subject} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label  style={{color: '#ffff'}} >Content</label>
            <input id="content" placeholder='Tell us more!' rows="5" cols="60" type="text" name = "content" value = {content} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}


