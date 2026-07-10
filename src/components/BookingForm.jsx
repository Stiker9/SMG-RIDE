import { useState } from 'react'

const initialForm = {
  name: '',
  phone: '',
  telegram: '',
  website: '',
}

function BookingForm({ telegramUrl }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const endpoint = import.meta.env.VITE_PUBLIC_LEADS_ENDPOINT?.trim()

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (form.website) return

    if (!endpoint) {
      setStatus('not-configured')
      return
    }

    setStatus('submitting')

    try {
      const body = new URLSearchParams({
        name: form.name.trim(),
        phone: form.phone.trim(),
        telegram: form.telegram.trim(),
        source: window.location.href,
        website: form.website,
      })

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body,
      })

      setForm(initialForm)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="lead-form__grid">
        <label className="lead-field">
          <span>Имя</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            maxLength="80"
            placeholder="Как к вам обращаться"
            required
          />
        </label>

        <label className="lead-field">
          <span>Телефон</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            inputMode="tel"
            minLength="10"
            maxLength="24"
            placeholder="+7 999 000 00 00"
            required
          />
        </label>

        <label className="lead-field lead-field--wide">
          <span>Telegram</span>
          <input
            name="telegram"
            type="text"
            value={form.telegram}
            onChange={handleChange}
            autoComplete="off"
            maxLength="64"
            placeholder="@username, если удобно"
          />
        </label>
      </div>

      <label className="lead-honeypot" aria-hidden="true">
        <span>Сайт</span>
        <input
          name="website"
          type="text"
          value={form.website}
          onChange={handleChange}
          autoComplete="off"
          tabIndex="-1"
        />
      </label>

      <div className="lead-form__footer">
        <button
          className="btn btn-primary"
          type="submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Отправляем...' : 'Оставить заявку'}
        </button>
        <p>
          Нажимая кнопку, вы соглашаетесь на обработку контактных данных для связи
          по заявке.
        </p>
      </div>

      <div className="lead-form__status" aria-live="polite" role="status">
        {status === 'success' && (
          <p className="is-success">Заявка отправлена. Мы свяжемся с вами.</p>
        )}
        {status === 'error' && (
          <p className="is-error">Не удалось отправить. Попробуйте ещё раз.</p>
        )}
        {status === 'not-configured' && (
          <p className="is-error">
            Онлайн-форма ещё подключается. Пока можно написать нам в{' '}
            <a href={telegramUrl}>Telegram</a>.
          </p>
        )}
      </div>
    </form>
  )
}

export default BookingForm
