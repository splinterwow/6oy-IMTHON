import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalContextProvider from './Context/useGlobal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
)
