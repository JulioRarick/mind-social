/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
   const [comments, setComments] = useState(['Very cool post!']);
   const [newCommentText, setNewCommentText] = useState('');

   const publishedDateFormatted = format(publishedAt, "LLLL Do 'at' h:mm");
   const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
      addSuffix: true,
   });

   function handleCreateNewComment() {
      event.preventDefault();

      setComments([...comments, newCommentText]);

      setNewCommentText('');
   }

   function handleNewCommentChange() {
      event.target.setCustomValidity('');
      setNewCommentText(event.target.value);
   }

   function handleCommentInvalid() {
      event.target.setCustomValidity('This field is mandatory!');
   }
   function deleteComment(commentToDelete) {
      const commentsWithoutDeletedOne = comments.filter((comment) => {
         return comment !== commentToDelete;
      });
      setComments(commentsWithoutDeletedOne);
   }
   const isNewCommentEmpty = newCommentText.length === 0;
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
                  return <p key={item.content}>{item.content}</p>;
               } else if (item.type === 'link') {
                  return (
                     <p key={item.content}>
                        <a href=''>{item.content}</a>
                     </p>
                  );
               }
            })}
         </div>
         <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Leave your feedback</strong>
            <textarea
               name='comment'
               placeholder='Leave a comment'
               onChange={handleNewCommentChange}
               value={newCommentText}
               onInvalid={handleCommentInvalid}
               required
            />
            <footer>
               <button type='submit' disabled={isNewCommentEmpty}>
                  Publish
               </button>
            </footer>
         </form>
         <div className={styles.commentList}>
            {comments.map((comment) => {
               return (
                  <Comment
                     key={comment}
                     content={comment}
                     onDeleteComment={deleteComment}
                  />
               );
            })}
         </div>
      </article>
   );
}
