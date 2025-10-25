import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css'; // Подключаем стили компонентов

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;