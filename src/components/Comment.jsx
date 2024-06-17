/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
   function handleDeleteComment() {
      onDeleteComment(content);
   }

   return (
      <div className={styles.comment}>
         <Avatar hasBorder={false} src='https://github.com/JulioRarick.png' />
         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Júlio Rarick</strong>
                     <time
                        title='June 9th at 9:50pm'
                        dateTime='2024-06-09 09:50:00pm'
                     >
                        About 1h ago
                     </time>
                  </div>
                  <button onClick={handleDeleteComment} title='Delete comment'>
                     <Trash size={24} />
                  </button>
               </header>
               <p>{content}</p>
            </div>
            <footer>
               <button>
                  <ThumbsUp />
                  Applaud <span>20</span>
               </button>
            </footer>
         </div>
      </div>
   );
}
