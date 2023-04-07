import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Modal from 'components/Modal'
import Button from 'components/Button'
import Heading from 'components/Heading'
import TextInput from 'components/TextInput'

import { setUser } from 'redux/actions/user-slice'

import * as BaseFomLayout from 'components/Layouts/BaseFormLayout'

const SignUpPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [usernameValue, setUserNameValue] = useState('')

  const handleUsernameInputChange = (value: string) => {
    setUserNameValue(value)
  }

  const handleSubmitUsername = (event: FormEvent) => {
    event.preventDefault()
    dispatch(setUser(usernameValue))
    navigate('/')
  }

  return (
    <Modal isVisible={true}>
      <BaseFomLayout.FormWrapper>
        <Heading size="xlarge">Welcome to CodeLeap network!</Heading>
        <BaseFomLayout.Form onSubmit={handleSubmitUsername}>
          <TextInput
            label="Please enter your username"
            placeholder="Username"
            name="username"
            handleChange={(value) => handleUsernameInputChange(value)}
          />
          <BaseFomLayout.ButtonWrapper>
            <Button
              disabled={!usernameValue}
              style={{ textTransform: 'uppercase' }}
            >
              Enter
            </Button>
          </BaseFomLayout.ButtonWrapper>
        </BaseFomLayout.Form>
      </BaseFomLayout.FormWrapper>
    </Modal>
  )
}

export default SignUpPage
