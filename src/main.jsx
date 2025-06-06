/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CadastroAnimais from './screens/CadastroAnimais.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CadastroAnimais/>
  </StrictMode>,
)
*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import CadastroAnimais from './screens/CadastroAnimais.jsx' // Este import não é mais necessário aqui
import App from './App.jsx' // Você já importa o componente 'App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* <-- Mude para isto */}
  </StrictMode>,
)