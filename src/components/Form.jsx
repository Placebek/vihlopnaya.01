import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setStatus('error');
      setMessage('Пожалуйста, заполните все поля.');
      return;
    }

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Спасибо! Ваша заявка принята. Мы скоро свяжемся с вами.');
        setName('');
        setPhone('');
      } else {
        throw new Error('Ошибка при отправке.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Произошла ошибка. Пожалуйста, попробуйте еще раз или свяжитесь с нами.');
      console.error(error);
    }
  };

  return (
    <section id="form" className="form-section">
      <div className="container">
        <h2>Оставьте заявку на бесплатную диагностику</h2>
        <p className="form-subtitle">
          Мы свяжемся с вами в течение 15 минут и ответим на все вопросы.
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === 'submitting'}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Ваш номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={status === 'submitting'}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </form>
        {message && (
          <p className={`form-message ${status === 'success' ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Form;