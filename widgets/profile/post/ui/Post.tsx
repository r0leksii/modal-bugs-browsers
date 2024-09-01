import { PostMenu } from './PostMenu'

import s from './post.module.scss'



export const Post = () => {

  return (
    <div className={s.root}>
      <div className={s.imgWrapper}>
        <h3>PhotoCarousel</h3>
      </div>
      <div className={s.postInfoWrapper}>
        <div className={s.header}>
          <div className={s.content}>
            <p>AvatarSimple</p>
            <p>username</p>
          </div>
            <PostMenu />
        </div>
        <div className={s.contentWrapper}>
          <div className={s.content}>
            <div className={s.content_text}>
              <p >
                Description
              </p>
            </div>
          </div>
          <div className={s.content}>
            <div className={s.comment}>
              <div className={s.contentInner}>
                <div className={s.content_text}>
                  <p>Lorem</p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.content}>
            <div className={s.comment}>
              <div className={s.contentInner}>
                <div className={s.content_text}>
                  <p>Lorem</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
