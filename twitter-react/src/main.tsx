import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
    <Tweet user='Patrick' content='Meu Primeiro Tweet' />
    
    <Tweet user='React' content='Hello World' />
    </div>

  </React.StrictMode>,
)
