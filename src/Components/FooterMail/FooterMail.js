import React, { useState } from 'react';
import './FooterMail.css';

function FooterMail() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    // Ваш код для отправки письма
    // Например, здесь может быть AJAX-запрос к серверу для отправки письма

    alert("Письмо отправлено на адрес: " + email); // Вместо этого вы можете использовать реальную отправку письма
    
    // Очистка поля ввода
    setEmail('');
  };

  return (
    <section className='enter'>
      <div className='container'>
        <h2 className='enter_title'>ENTER THE WORLD OF VERSACE</h2>
        <p className='enter_txt'>Stay up to date on events, collections and exclusive news</p>
        <form className="email-form" onSubmit={handleSubmit}>
          <div className="email-input">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Обновляем значение email при изменении ввода
            />
            <button type="submit">
              <span>&#8594;</span> {/* Стрелка вправо */}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FooterMail;