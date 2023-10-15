import './index.css';
import Overlay from './components/Overlay';
import PageMain from './pages/PageMain';

export default function App() {
  return <Overlay>
    <PageMain/>
  </Overlay>;
}
