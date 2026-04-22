import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './app/routes/AppROutes.jsx'
import { store } from './app/store/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)
