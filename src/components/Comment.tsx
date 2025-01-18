
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar src=""/>

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
                        <button title="Deletar Comentário">
                            <Trash  size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>

                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}