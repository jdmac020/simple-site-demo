import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main } from './components/Main';

export function App() {
  console.log('thing');
  return (
    <BrowserRouter>
     <Routes>
      <Route path={'/'} element={<Main />}>
        <Route index element={<Main />} />
      </Route>
     </Routes>
    </BrowserRouter>
  );
}