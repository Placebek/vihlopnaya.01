import React from 'react';
import car from '../assets/img/car1.png';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Профессиональное <br />
            <span className="text-red">Удаление катализатора</span>
            <br /> в Астане
          </h1>
          <p className="hero-subtitle">
            Увеличьте мощность автомобиля и забудьте об ошибках Check Engine.
          </p>
          <a href="#form" className="btn btn-primary">
            Получить консультацию
          </a>
        </div>
        <div className="hero-animation">
          {/* Положите ваше изображение в папку /public/
            Например, /public/car-image.png
            Тогда путь будет просто "/car-image.png"
          */}
          <img 
            src={car} 
            alt="Удаление катализатора" 
            className="car-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;