
import Image from 'next/image'

import s from './postEdit.module.scss'



export const PostEdit = () => {





  return (
    <>
      <div className={s.container}>
        <div className={s.imageContainer}>
          <Image alt={''} fill sizes={'100%'} src={'/sphere-with-trees_result.jpg'} />
        </div>
        <div className={s.formBlock}>
          <div className={s.avatarContainer}>
            <p >{'username'}</p>
          </div>
          <div></div>
            <div className={s.textarea}>


            </div>

        </div>
      </div>
    </>
  )
}
