import React, { FormEvent, useEffect, useMemo, useState } from 'react'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextInput from 'components/TextInput'
import TextAreaInput from 'components/TextAreaInput'

import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { Post } from 'components/PostCard/types'
import { useStateSelector } from 'hooks/useStateSelector'
import { toggleEditPostModal } from 'redux/actions/edit-post-slice'
import { useGetAllPosts, useMutationEditPost } from 'services/post.services'

import * as BaseFormLayout from 'components/Layouts/BaseFormLayout'

const EditForm: React.FC<{ refetchPostsData?: () => void }> = ({
  refetchPostsData
}) => {
  const dispatch = useDispatch()

  const { data: postsData } = useGetAllPosts()

  const postID = useStateSelector((state) => state.editPostModal.postID)

  const postBeingEdited: Post | undefined = useMemo(
    () => postsData?.find((post: Post) => post.id === postID),
    [postsData, postID]
  )

  const { mutateAsync: editPostMutation, isLoading } = useMutationEditPost()

  const [inputsValues, setInputValues] = useState({
    title: '',
    content: ''
  })

  const handleInputChange = (fieldName: string, value: string) => {
    setInputValues((prevState) => ({ ...prevState, [fieldName]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (postID !== null) {
      await editPostMutation({
        payload: { content: inputsValues.content, title: inputsValues.title },
        postID: postID
      })
      setInputValues({ content: '', title: '' })
      dispatch(toggleEditPostModal(null))
      refetchPostsData?.()
      toast.success('Post successfully updated')
    }
  }

  useEffect(() => {
    if (postBeingEdited)
      setInputValues({
        content: postBeingEdited.content,
        title: postBeingEdited.title
      })
  }, [postBeingEdited])

  return (
    <BaseFormLayout.FormWrapper>
      <Heading>Edit item</Heading>
      <BaseFormLayout.Form onSubmit={handleSubmit}>
        <TextInput
          name="title"
          label="Title"
          placeholder="Title"
          value={inputsValues.title}
          initialValue={inputsValues.title}
          handleChange={(value) => handleInputChange('title', value)}
        />
        <TextAreaInput
          name="content"
          label="Content"
          placeholder="Content"
          value={inputsValues.content}
          initialValue={inputsValues.content}
          handleChange={(value) => handleInputChange('content', value)}
        />
        <BaseFormLayout.ButtonWrapper>
          <Button
            type="button"
            onClick={() => dispatch(toggleEditPostModal(null))}
            bgColor="white"
          >
            Cancel
          </Button>

          <Button
            disabled={!inputsValues.title || !inputsValues.content || isLoading}
            type="submit"
            bgColor="green"
          >
            Save
          </Button>
        </BaseFormLayout.ButtonWrapper>
      </BaseFormLayout.Form>
    </BaseFormLayout.FormWrapper>
  )
}

export default EditForm
