import React from 'react';

// Иконка для стандартных услуг
const CheckIcon = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

// Иконка для подарка
const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF0000" d="M22 6h-4.8c.5-.5.8-1.2.8-2c0-1.7-1.3-3-3-3s-3 1.3-3 3c0-1.7-1.3-3-3-3S6 2.3 6 4c0 .8.3 1.5.8 2H2v6h1v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8h1zm-2 4h-7V8h7zm-5-7c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1M9 3c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1M4 8h7v2H4zm1 4h6v8H5zm14 8h-6v-8h6z"/></svg>
);

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Почему выбирают нас?</h2>
        <div className="services-grid">
                  {/* КАРТОЧКА С ПОДАРКОМ - ВЫДЕЛЯЕМ КЛАССОМ service-card-gift */}
          <div className="service-card service-card-gift">
            <GiftIcon />
            <h3>🎁 ПОДАРОК! Сухой туман</h3>
            <p>При удалении катализатора дарим услугу "Сухой туман" для удаления неприятных запахов и свежести салона!</p>
          </div>
          
          <div className="service-card">
            <CheckIcon />
            <h3>Увеличение мощности</h3>
            <p>Удаление катализатора освобождает выхлопную систему, что приводит к приросту мощности ДВС.</p>
          </div>
          
          <div className="service-card">
            <CheckIcon />
            <h3>Прошивка ЭБУ (Euro 2)</h3>
            <p>Корректно отключаем лямбда-зонды (Euro 2) и адаптируем ПО для максимальной эффективности.</p>
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
