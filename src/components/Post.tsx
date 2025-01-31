import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }){

    const [comments, setComments] = useState([]);

    const [newCommentText, setNewCommentText] = useState('');

    const publisedDateFormatted = format(
        publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR} 
    )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(){
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelet){
        const commentsWithoutDeletedOne = comments.filter( comment => {
            return comment != commentToDelet;
        })

        setComments(commentsWithoutDeletedOne);
    }

    function hadleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    const isNewCommentEmpty = newCommentText.length == 0 ;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                
                <time
                    title={publisedDateFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                        {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
               {content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>;
                }else if(line.type == 'link'){
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment"
                    placeholder="Escreva um comentário..."
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={hadleNewCommentInvalid}
                    required
                />
                <footer className={styles.submitComment} >
                    <button 
                        className={styles.buttonPost}
                        type="submit" 
                        disabled={isNewCommentEmpty}
                    >
                            Publicar
                    </button>
                </footer>

                <div className={styles.commentList}>
                  {comments.map(comment => {
                    return <Comment
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment}
                            />
                  })}
                </div>
                
            </form>

            
        </article>
    )
}
