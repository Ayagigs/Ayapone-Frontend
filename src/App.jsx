import { BrowserRouter } from 'react-router-dom'

import AppRouter from './navigation/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
