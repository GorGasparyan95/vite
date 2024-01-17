import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Homepage from '../pages/Homepage';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
]);
