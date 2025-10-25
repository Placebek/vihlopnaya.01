import React from 'react';

// Вы можете добавить больше иконок с https://heroicons.com/
const CheckIcon = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Почему выбирают нас?</h2>
        <div className="services-grid">
          <div className="service-card">
            <CheckIcon />
            <h3>Увеличение мощности</h3>
            <p>Удаление катализатора освобождает выхлопную систему, что приводит к приросту мощности ДВС.</p>
          </div>
          <div className="service-card">
            <CheckIcon />
            <h3>Прошивка ЭБУ (Stage 1/2)</h3>
            <p>Корректно отключаем лямбда-зонды (Euro 2) и адаптируем ПО для максимальной эффективности.</p>
          </div>
          <div className="service-card">
            <CheckIcon />
            <h3>Установка пламегасителя</h3>
            <p>Устанавливаем качественные пламегасители (стронгеры), чтобы обеспечить тихую и долгую работу выхлопа.</p>
          </div>
          <div className="service-card">
            <CheckIcon />
            <h3>Гарантия на работы</h3>
            <p>Даем гарантию на все сварочные работы и программное обеспечение. Вы можете быть уверены в результате.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;