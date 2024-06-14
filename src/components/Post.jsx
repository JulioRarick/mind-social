/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
   const publishedDateFormatted = format(publishedAt, "LLLL Do 'at' h:mm");
   const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
      addSuffix: true,
   });
   return (
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <Avatar src={author.avatarUrl} />
               <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
               </div>
            </div>
            <time
               title={publishedDateFormatted}
               dateTime={publishedAt.toISOString()}
            >
               {publishedRelativeToNow}
            </time>
         </header>
         <div className={styles.content}>
            {content.map((item) => {
               if (item.type === 'paragraph') {
                  return <p>{item.content}</p>;
               } else if (item.type === 'link') {
                  return <a href=''>{item.content}</a>;
               }
            })}
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
