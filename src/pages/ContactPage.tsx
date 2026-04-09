import { useMemo, useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { InnerHero } from '../components/InnerHero'
import { contact } from '../data/content'

type ContactFormValues = {
  name: string
  email: string
  phone: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const emailLooksValid = (value: string) => {
  // Intentionally simple: catches the common cases without over-restricting.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function ContactPage() {
  const { t } = useTranslation()
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const telHref = useMemo(() => `tel:${contact.phone.replace(/\s/g, '')}`, [])

  const validate = (v: ContactFormValues): ContactFormErrors => {
    const next: ContactFormErrors = {}

    if (!v.name.trim()) next.name = t('contactPage.form.errors.required')
    if (!v.email.trim()) next.email = t('contactPage.form.errors.required')
    else if (!emailLooksValid(v.email)) next.email = t('contactPage.form.errors.email')
    if (v.message.trim().length < 10) next.message = t('contactPage.form.errors.messageMin')

    return next
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const hasErrors = Object.keys(nextErrors).length > 0
    if (hasErrors) {
      setStatus('idle')
      return
    }

    setValues({ name: '', email: '', phone: '', message: '' })
    setStatus('success')
  }

  const errorId = (key: keyof ContactFormValues) => `contact-${key}-error`
  const inputId = (key: keyof ContactFormValues) => `contact-${key}`

  return (
    <main>
      <InnerHero title={t('nav.contact')} />

      <section className="contact">
        <div className="contact__container">
          <div className="contact__grid">
            <div className="contact__left">
              <h2 className="contact__heading">{t('contactPage.heading')}</h2>
              <p className="contact__lede">{t('contactPage.lede')}</p>

              <div className="contact__cards" aria-label={t('contactPage.infoAria')}>
                <div className="contact__card">
                  <p className="contact__cardKicker">{t('contactPage.info.address')}</p>
                  <p className="contact__cardText">
                    {contact.addressLines.map((line, idx) => (
                      <span key={line}>
                        {idx > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="contact__card">
                  <p className="contact__cardKicker">{t('contactPage.info.phone')}</p>
                  <p className="contact__cardText">
                    <a className="contact__link" href={telHref}>
                      {contact.phone}
                    </a>
                  </p>
                </div>

                <div className="contact__card">
                  <p className="contact__cardKicker">{t('contactPage.info.email')}</p>
                  <p className="contact__cardText">
                    <a className="contact__link" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact__right">
              <section className="contact__formCard" aria-label={t('contactPage.form.aria')}>
                <div className="contact__formCardInner">
                  <header className="contact__formHeader">
                    <p className="contact__formKicker">{t('contactPage.form.kicker')}</p>
                    <h3 className="contact__formTitle">{t('contactPage.form.title')}</h3>
                    <p className="contact__formSub">{t('contactPage.form.sub')}</p>
                  </header>

                  {status === 'success' ? (
                    <div className="contact__status" role="status" aria-live="polite">
                      <p className="contact__statusTitle">{t('contactPage.form.successTitle')}</p>
                      <p className="contact__statusText">{t('contactPage.form.successText')}</p>
                      <button
                        type="button"
                        className="contact__button contact__button--ghost"
                        onClick={() => setStatus('idle')}
                      >
                        {t('contactPage.form.newMessage')}
                      </button>
                    </div>
                  ) : (
                    <form className="contact__form" onSubmit={onSubmit} noValidate>
                      <div className="contact__field">
                        <label className="contact__label" htmlFor={inputId('name')}>
                          {t('contactPage.form.fields.name')}
                        </label>
                        <input
                          id={inputId('name')}
                          className="contact__input"
                          value={values.name}
                          onChange={(e) => {
                            setStatus('idle')
                            setValues((s) => ({ ...s, name: e.target.value }))
                          }}
                          autoComplete="name"
                          aria-invalid={errors.name ? true : undefined}
                          aria-describedby={errors.name ? errorId('name') : undefined}
                        />
                        {errors.name ? (
                          <p className="contact__error" id={errorId('name')}>
                            {errors.name}
                          </p>
                        ) : null}
                      </div>

                      <div className="contact__field">
                        <label className="contact__label" htmlFor={inputId('email')}>
                          {t('contactPage.form.fields.email')}
                        </label>
                        <input
                          id={inputId('email')}
                          className="contact__input"
                          value={values.email}
                          onChange={(e) => {
                            setStatus('idle')
                            setValues((s) => ({ ...s, email: e.target.value }))
                          }}
                          autoComplete="email"
                          inputMode="email"
                          aria-invalid={errors.email ? true : undefined}
                          aria-describedby={errors.email ? errorId('email') : undefined}
                        />
                        {errors.email ? (
                          <p className="contact__error" id={errorId('email')}>
                            {errors.email}
                          </p>
                        ) : null}
                      </div>

                      <div className="contact__field">
                        <label className="contact__label" htmlFor={inputId('phone')}>
                          {t('contactPage.form.fields.phone')}
                        </label>
                        <input
                          id={inputId('phone')}
                          className="contact__input"
                          value={values.phone}
                          onChange={(e) => {
                            setStatus('idle')
                            setValues((s) => ({ ...s, phone: e.target.value }))
                          }}
                          autoComplete="tel"
                          inputMode="tel"
                          aria-invalid={errors.phone ? true : undefined}
                          aria-describedby={errors.phone ? errorId('phone') : undefined}
                        />
                        {errors.phone ? (
                          <p className="contact__error" id={errorId('phone')}>
                            {errors.phone}
                          </p>
                        ) : null}
                      </div>

                      <div className="contact__field contact__field--message">
                        <label className="contact__label" htmlFor={inputId('message')}>
                          {t('contactPage.form.fields.message')}
                        </label>
                        <textarea
                          id={inputId('message')}
                          className="contact__textarea"
                          rows={6}
                          value={values.message}
                          onChange={(e) => {
                            setStatus('idle')
                            setValues((s) => ({ ...s, message: e.target.value }))
                          }}
                          aria-invalid={errors.message ? true : undefined}
                          aria-describedby={errors.message ? errorId('message') : undefined}
                        />
                        {errors.message ? (
                          <p className="contact__error" id={errorId('message')}>
                            {errors.message}
                          </p>
                        ) : null}
                      </div>

                      <div className="contact__actions">
                        <button type="submit" className="contact__button">
                          {t('contactPage.form.submit')}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

