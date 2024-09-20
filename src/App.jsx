import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckUpdates, Recent } from './components';
import TotalProducts from './components/TotalProducts';

function App() {
  return (
    <div className="container px-2 md:px-auto m-auto py-4">
      <ToastContainer />
      <TotalProducts />
      <CheckUpdates />
      <Recent />
    </div>
  );
}

export default App;
