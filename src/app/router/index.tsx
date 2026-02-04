import { BrowserRouter, Route, Routes } from 'react-router';
import { Button } from 'antd';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button>123</Button>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
