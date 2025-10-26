import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  // Форматируем номер телефона под шаблон: +7 (7XX) XXX-XX-XX
  const formatPhone = (value) => {
    // Удаляем все символы, кроме цифр
    const digits = value.replace(/\D/g, '');

    // Ограничиваем длину до 11 символов (для +7XXXXXXXXXX)
    const sliced = digits.slice(0, 11);

    // Строим шаблон
    if (sliced.length < 2) return `+${sliced}`;
    if (sliced.length < 5) return `+7 (${sliced.slice(1)}`;
    if (sliced.length < 8)
      return `+7 (${sliced.slice(1, 4)}) ${sliced.slice(4)}`;
    if (sliced.length < 10)
      return `+7 (${sliced.slice(1, 4)}) ${sliced.slice(4, 7)}-${sliced.slice(7)}`;
    return `+7 (${sliced.slice(1, 4)}) ${sliced.slice(4, 7)}-${sliced.slice(7, 9)}-${sliced.slice(9, 11)}`;
  };

  // Проверка номера (Казахстан)
  const isValidKazakhPhone = (value) => {
    const clean = value.replace(/\D/g, '');
    // Казахстан: +7 7XXXXXXXXX — вторая цифра обязательно 7
    return /^77\d{8}$/.test(clean);
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setStatus('error');
      setMessage('Пожалуйста, заполните все поля.');
      return;
    }

    if (!isValidKazakhPhone(phone)) {
      setStatus('error');
      setMessage('Введите корректный номер телефона Казахстана (например: +7 (707) 123-45-67).');
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
              placeholder="+7 (7__) ___-__-__"
              value={phone}
              onChange={handlePhoneChange}
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
