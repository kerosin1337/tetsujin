import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthPage } from '@/pages/auth';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
