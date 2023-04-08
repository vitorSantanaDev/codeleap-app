import React, { FormEvent, useState } from 'react'

import { toast } from 'react-toastify'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextInput from 'components/TextInput'
import TextAreaInput from 'components/TextAreaInput'

import { useMutationCreatePost } from 'services/post.services'

import { useStateSelector } from 'hooks/useStateSelector'

import * as BaseFormLayout from 'components/Layouts/BaseFormLayout'

const CreationForm: React.FC = () => {
  const username = useStateSelector((state) => state.user.username)
  const [inputsValues, setInputValues] = useState({ title: '', content: '' })

  const { mutateAsync: createPostMutation, isLoading } = useMutationCreatePost()

  const handleInputChange = (fieldName: string, value: string) => {
    setInputValues((prevState) => ({ ...prevState, [fieldName]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await createPostMutation({
      content: inputsValues.content,
      title: inputsValues.title,
      username: username
    })
    setInputValues({ content: '', title: '' })
    toast.success('Post created successfully')
  }

  return (
    <BaseFormLayout.FormWrapper>
      <Heading>What’s on your mind?</Heading>
      <BaseFormLayout.Form onSubmit={handleSubmit}>
        <TextInput
          name="title"
          label="Title"
          placeholder="Title"
          value={inputsValues.title}
          handleChange={(value) => handleInputChange('title', value)}
        />
        <TextAreaInput
          name="content"
          label="Content"
          placeholder="Content"
          value={inputsValues.content}
          handleChange={(value) => handleInputChange('content', value)}
        />
        <BaseFormLayout.ButtonWrapper>
          <Button
            type="submit"
            disabled={!inputsValues.content || !inputsValues.title || isLoading}
          >
            Create
          </Button>
        </BaseFormLayout.ButtonWrapper>
      </BaseFormLayout.Form>
    </BaseFormLayout.FormWrapper>
  )
}

export default CreationForm
