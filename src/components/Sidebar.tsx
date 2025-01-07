
import {PencilLine} from '@phosphor-icons/react';
import styles from './Sidebar.module.css';
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
                 src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=500" alt="text" 
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/MarcosDeva.png" alt="" />
                <strong> Marcos Oliveira</strong>
                <span> Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}