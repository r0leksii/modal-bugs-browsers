import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'
import { ModalClose } from '@/shared/components/modals/ModalClose'
import { modalAnimations } from '@/shared/components/modals/modalsWindowAnimations'
import * as RadixModal from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import s from './Modal.module.scss'

export type Props = {
  className?: string
  handleCloseClickOutside?: () => void
  title?: string
  trigger?: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
} & ComponentPropsWithoutRef<typeof RadixModal.Root>

export const Modal = forwardRef<ElementRef<typeof RadixModal.Root>, Props>((props, ref) => {
  const {
    children,
    className,
    handleCloseClickOutside,
    onOpenChange,
    open,
    title,
    trigger,
    ...rest
  } = props

  return (
      <RadixModal.Root open={open} onOpenChange={onOpenChange}>
        <RadixModal.Trigger asChild>{trigger}</RadixModal.Trigger>
        <AnimatePresence>
          {open && (
              <RadixModal.Portal>
                <motion.div {...modalAnimations.overlay}>
                  <RadixModal.Overlay className={s.overlay} />
                </motion.div>
                <RadixModal.Content
                    className={`${s.root} ${className}`}
                    onInteractOutside={event => {
                      if (handleCloseClickOutside) {
                        event.preventDefault()
                        handleCloseClickOutside()
                      }
                    }}
                    ref={ref}
                    {...rest}
                >
                  <motion.div {...modalAnimations.window}>
                    <div className={s.title}>
                      <h1>{title}</h1>
                      <ModalClose>
                        <button onClick={() => onOpenChange?.(false)}>Close</button>
                      </ModalClose>
                    </div>
                    {children}
                  </motion.div>
                </RadixModal.Content>
              </RadixModal.Portal>
          )}
        </AnimatePresence>
      </RadixModal.Root>
  )
})

Modal.displayName = 'Modal'

export default Modal