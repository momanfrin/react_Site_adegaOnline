import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormClient from './components/FormClient';
import FormProduct from './components/FormProduct';
import FormProvider from './components/FormProvider';
import Start from './pages/start';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/formClient' element={<FormClient />} />
        <Route path='/formProduct' element={<FormProduct />} />
        <Route path='/formProvider' element={<FormProvider />} />
      </Routes>
    </Router>
  );
}