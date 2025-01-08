import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar />
                    <div className={styles.authorInfo}>
                        <strong> Marcos Oliveira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                
                <time
                    title="7 de Janeiro ás 11:51:00" 
                    dateTime="2025-01-07 11:51:00"
                >
                        publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋 </p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <p><a href=''>jane.design/doctorcare </a></p>
                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>
        </article>
    )
}
