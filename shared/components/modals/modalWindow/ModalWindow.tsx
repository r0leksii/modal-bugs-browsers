import { ModalClose } from '@/shared/components'

import s from './modalWindou.module.scss'

type ModalWindowProps = {
  callback: () => void
  text: string
  text_2?: string
}

export const ModalWindow = ({ callback, text, text_2 }: ModalWindowProps) => {

  return (
    <div className={s.root}>
      <p >
        {text}
        <p>
          {'  '}
          {text_2 ?? ''}
        </p>
      </p>
      <div className={s.controller}>
        <button className={s.button} onClick={callback} >
          {'yes'}
        </button>
        <ModalClose>
          <button className={s.button}>{'no'}</button>
        </ModalClose>
      </div>
    </div>
  )
}
