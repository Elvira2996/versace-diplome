import React, { useState } from 'react';
import './SubmitForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    generalInfo: '',
    enquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orderNumber: '',
    language: '',
    country: '',
    message: '',
    comment: '',
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправка данных формы на сервер или другую обработку
    console.log(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>CONTACT FORM</h2>
      <p>*Required</p>

      {/* Остальные поля формы */}
      {/* Пример для текстового поля */}
      <div className="form-group">
        <label htmlFor="generalInfo">General Information *</label>
        <input type="text" id="generalInfo" name="generalInfo" value={formData.generalInfo} onChange={handleChange} required />
      </div>

      {/* Пример для выпадающего списка */}
      <div className="form-group">
        <label htmlFor="enquiryType">Enquiry type *</label>
        <select id="enquiryType" name="enquiryType" value={formData.enquiryType} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>

      {/* Примеры для других полей формы */}
      {/* ... */}

      {/* Пример для поля загрузки файла */}
      <div className="form-group">
        <label htmlFor="attachment">Upload Attachment</label>
        <input type="file" id="attachment" name="attachment" onChange={handleFileChange} accept=".jpg, .jpeg, .png, .pdf" required />
        <span className="file-size-limit">Size limit 2MB</span>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;