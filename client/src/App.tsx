import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';

export default function App() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Home />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgb(var(--bg-elevated))',
            color: 'rgb(var(--fg))',
            border: '1px solid rgb(var(--border))',
          },
        }}
      />
    </>
  );
}
