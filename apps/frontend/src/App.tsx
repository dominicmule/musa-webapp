import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ChatBot } from './components/chat/ChatBot';
import AppRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;