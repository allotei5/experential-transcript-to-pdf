import './App.css';
import Home from './Components/Home/Home.component';
import { Routes, Route } from 'react-router-dom'

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/:st' element={<Home />} />
      </Routes>
    </QueryClientProvider>
    
  );
}

export default App;
