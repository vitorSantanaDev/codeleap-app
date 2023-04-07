import React, { FormEvent, useState } from 'react'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextInput from 'components/TextInput'
import TextAreaInput from 'components/TextAreaInput'

import * as BaseFormLayout from 'components/Layouts/BaseFormLayout'

const CreationForm: React.FC = () => {
  const [inputsValues, setInputValues] = useState({ title: '', content: '' })

  const handleInputChange = (fieldName: string, value: string) => {
    setInputValues((prevState) => ({ ...prevState, [fieldName]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log({ inputsValues })
  }

  return (
    <BaseFormLayout.FormWrapper>
      <Heading>What’s on your mind?</Heading>
      <BaseFormLayout.Form onSubmit={handleSubmit}>
        <TextInput
          name="title"
          label="Title"
          placeholder="Title"
          handleChange={(value) => handleInputChange('title', value)}
        />
        <TextAreaInput
          name="content"
          label="Content"
          placeholder="Content"
          handleChange={(value) => handleInputChange('content', value)}
        />
        <BaseFormLayout.ButtonWrapper>
          <Button type="submit">Create</Button>
        </BaseFormLayout.ButtonWrapper>
      </BaseFormLayout.Form>
    </BaseFormLayout.FormWrapper>
  )
}

export default CreationForm
