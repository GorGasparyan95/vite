import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import { routers } from './routes';

import 'antd/dist/reset.css';

const App = () => {

return (
  <ConfigProvider>
    <RouterProvider router={routers} />
  </ConfigProvider>
  );
};

export default App;
