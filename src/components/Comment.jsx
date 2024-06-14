import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment() {
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
                  <button title='Delete comment'>
                     <Trash size={24} />
                  </button>
               </header>
               <p>Very good Júlio, congratulations.</p>
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
