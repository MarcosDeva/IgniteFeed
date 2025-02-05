
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string)=> void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/MarcosDeva.png"
                alt="sadsa"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Marcos Oliveira</strong>
                            <time
                                title="7 de Janeiro ás 11:51:00" 
                                dateTime="2025-01-07 11:51:00"
                            >
                                    Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash  size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>

                </div>
                <footer>

                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}