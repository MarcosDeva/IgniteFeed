import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

// author: { avatar_url: "",name: "",role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MarcosDeva.png',
      name: 'Marcos Oliveira',
      role: 'CTO @Startups',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 '},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'MarcosDeva/doctorcare'}
    ],

    publishedAt: new Date('2025-01-15 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/RenatoDev23.png',
      name: 'Renato',
      role: 'Dev @Startups',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 '},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'RenatoDev23/doctorcare'}
    ],

    publishedAt: new Date('2025-01-16 20:00:00'),
  },

  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/gatitta42.png',
      name: 'Anna',
      role: 'Dev @Startups',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 '},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'gatitta42/doctorcare'}
    ],

    publishedAt: new Date('2025-01-17 20:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
          return(
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </div>

  )
}

export default App
