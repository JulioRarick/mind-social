import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
   return (
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <img
                  className={styles.avatar}
                  src='https://github.com/JulioRarick.png'
               />
               <div className={styles.authorInfo}>
                  <strong>Júlio Rarick</strong>
                  <span>Web Developer</span>
               </div>
            </div>
            <time title='June 9th at 9:50pm' dateTime='2024-06-09 09:50:00pm'>
               Published 1 hour ago
            </time>
         </header>
         <div className={styles.content}>
            <p>Hey guys!</p>
            <p>
               I just uploaded a project to my portfolio. It is a project I made
               using React.js.
            </p>
            <p>
               <a href=''>juliorarick.com/mind-social</a>
            </p>
            <p>
               <a href=''>#newproject</a> <a href=''>#react </a>{' '}
               <a href=''>#portfolio</a>{' '}
            </p>
         </div>
         <form className={styles.commentForm}>
            <strong>Leave your feedback</strong>
            <textarea placeholder='Leave a comment' />
            <footer>
               <button type='submit'>Publish</button>
            </footer>
         </form>
         <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
         </div>
      </article>
   );
}
