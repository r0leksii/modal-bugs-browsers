import React, { useEffect, useState } from 'react'

import {
  Modal,
  ModalWindow,
} from '@/shared/components'

import { PostEdit } from '@/widgets/profile/post-edit/PostEdit'

import d from '@/shared/components/dropDown.module.scss'
import s from '@/widgets/profile/post/ui/post.module.scss'
import {More} from '@/public/icons/More'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@radix-ui/react-dropdown-menu'
import {Edit} from '@/public/icons/Edit'
import {Trash} from '@/public/icons/Trash'



export const PostMenu = () => {
  const [open, setOpen] = useState(false)
  const [isDescriptionChanged, setIsDescriptionChanged] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const onOpenChangeHandler = () => {
    setOpen(!open)
  }

  const handlePostEdit = () => {
    setIsEditModalOpen(true)
  }

  const handleCancelEditModal = () => {
    setIsEditModalOpen(false)
  }

  const handleCancelConfirmModal = () => {
    setIsConfirmModalOpen(false)
  }

  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(isDescriptionChanged)
    if (!isDescriptionChanged) {
      setIsEditModalOpen(false)
    }
  }

  const handleChangeDescription = (changed: boolean) => {
    setIsDescriptionChanged(changed)
  }

  useEffect(() => {
    if (!isConfirmModalOpen && !isEditModalOpen) {
      setIsDescriptionChanged(false)
    }
  }, [isConfirmModalOpen, isEditModalOpen])

  return (
    <>
      <DropdownMenu onOpenChange={onOpenChangeHandler} open={open}>
        <DropdownMenuTrigger>
          <More />
        </DropdownMenuTrigger>
        <DropdownMenuContent align={'end'}>
          <DropdownMenuItem asChild>
            <button className={d.item} onClick={handlePostEdit} >
              editPost
            </button>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>

      <Modal
        className={s.modalPostEdit}
        handleCloseClickOutside={handleOpenConfirmModal}
        onOpenChange={handleOpenConfirmModal}
        open={isEditModalOpen}
        title={'titleEdit'}
      >
        <PostEdit />
      </Modal>

      <Modal
        onOpenChange={handleCancelConfirmModal}
        open={isConfirmModalOpen}
        title={'titleConfirm'}
      >
        <ModalWindow
          callback={() => {
            handleCancelConfirmModal()
            handleCancelEditModal()
            handleChangeDescription(false)
          }}
          text={'text'}
        />
      </Modal>
    </>
  )
}
