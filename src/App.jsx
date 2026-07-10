import { useEffect, useRef, useState } from 'react'
import forestRide from './assets/gallery/forest-ride.jpg'
import groupSelfie from './assets/gallery/group-selfie.jpg'
import groupStart from './assets/gallery/group-start.jpg'
import helmetCloseup from './assets/gallery/helmet-closeup.jpg'
import heroCinematic from './assets/gallery/head.png'
import heroOverlook from './assets/gallery/hero-overlook.png'
import locationMap from './assets/gallery/location-map.png'

const phoneNumber = import.meta.env.VITE_PUBLIC_PHONE ?? '+7 995 590 7057'
const phoneHref = import.meta.env.VITE_PUBLIC_PHONE_HREF ?? 'tel:+79955907057'
const telegramHandle = '@smg_ride_t'
const telegramUrl =
  import.meta.env.VITE_PUBLIC_TELEGRAM_URL ?? 'https://t.me/smg_ride_t'
const mapUrl = 'https://yandex.ru/maps/-/CTq~VGJu'

const stats = [
  ['30 км', 'от Санкт-Петербурга'],
  ['2025 год', 'свежая техника'],
  ['500-550 см3', 'объем квадроциклов'],
]

const experiences = [
  {
    title: 'Мощная техника',
    text: 'В прокате свежие квадроциклы Loncin, CFMOTO и Stels 2025 года. Объем 500-550 кубов, полный бак перед выездом.',
  },
  {
    title: 'Инструктаж без спешки',
    text: 'Знакомство с техникой и пробный заезд на закрытой территории проходят вне оплаченного времени маршрута.',
  },
  {
    title: 'Эмоции и безопасность',
    text: 'Инструктор сопровождает группу, помогает на сложных участках и держит баланс между драйвом, комфортом и безопасностью.',
  },
]

const routes = [
  {
    name: 'Средний и выше',
    time: '2-3 часа',
    image: heroOverlook,
    copy: 'Лесной массив, водные броды, песчаные холмы, высокий карьер и знаменитая эндуро-трасса "Тропа Лося".',
  },
  {
    name: 'Лайт маршрут',
    time: '1-2 часа',
    image: forestRide,
    copy: 'Умеренный уровень экстрима для новичков, спокойного знакомства с техникой и поездок родителей с детьми.',
  },
  {
    name: 'Индивидуальный',
    time: 'от 2 часов',
    image: groupSelfie,
    copy: 'Маршрут под вашу идею: можно договориться на долгий выезд, пикник, купание в озере и свои остановки.',
  },
]

const prices = [
  ['1 час', '5 000 руб'],
  ['2 часа', '9 000 руб'],
  ['3 часа', '13 000 руб'],
]

const kit = [
  '1 квадроцикл',
  'шлем и маска',
  'перчатки и джерси',
  'полный бак',
  'инструктор',
  'сапоги при необходимости',
]

const faq = [
  {
    question: 'Нужен ли залог?',
    answer:
      'Да. В качестве минимальной подстраховки берется 10 000 руб. или водительское удостоверение.',
  },
  {
    question: 'Можно ехать вдвоем?',
    answer:
      'Стоимость указана за квадроцикл. На нем можно ехать одному или вдвоем, максимальная разрешенная масса пассажиров 180 кг.',
  },
  {
    question: 'Инструктаж входит во время катания?',
    answer:
      'Нет. Инструктаж и знакомство с техникой проходят отдельно, поэтому на маршруте вы катаетесь 60, 120 или 180 минут.',
  },
  {
    question: 'Есть маршрут для новичков?',
    answer:
      'Да. Для первого раза есть лайтовые маршруты с умеренным экстримом, которые подходят и для родителей с детьми.',
  },
]

const gallery = [
  { image: groupStart, title: 'Старт группы' },
  { image: helmetCloseup, title: 'Экипировка' },
  { image: forestRide, title: 'Лесной участок' },
  { image: heroOverlook, title: 'Видовая точка' },
]

function NavLink({ href, children }) {
  const ref = useRef(null)
  const reduceMotionRef = useRef(false)

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
  }, [])

  const handleMove = (event) => {
    const el = ref.current
    if (!el || reduceMotionRef.current) return
    const rect = el.getBoundingClientRect()
    const offsetX = event.clientX - (rect.left + rect.width / 2)
    const offsetY = event.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${offsetX * 0.25}px, ${offsetY * 0.35}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0, 0)'
  }

  return (
    <a
      ref={ref}
      href={href}
      className="nav-magnetic"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </a>
  )
}

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [navScrolled, setNavScrolled] = useState(false)
  const navSentinelRef = useRef(null)

  useEffect(() => {
    const node = navSentinelRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setNavScrolled(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="site-shell relative min-h-screen overflow-hidden text-white">
      <div ref={navSentinelRef} className="absolute left-0 top-0 h-px w-full" aria-hidden="true" />

      <header className={`hero-nav${navScrolled ? ' hero-nav--scrolled' : ''}`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a className="brand-link" href="#top" aria-label="SMG RIDE">
            <span className="brand-word brand-word--smg">SMG</span>
            <span className="brand-slash" />
            <span className="brand-word brand-word--ride">RIDE</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold uppercase text-white/70 md:flex">
            <NavLink href="#routes">Маршруты</NavLink>
            <NavLink href="#price">Цены</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contacts">Как найти</NavLink>
          </nav>

          <a className="btn btn-primary hidden sm:inline-flex" href={telegramUrl}>
            Записаться
          </a>
        </div>
      </header>

      <section className="hero-premium relative min-h-[66svh] overflow-hidden">
        <img
          className="hero-bg-image absolute inset-0 h-full w-full object-cover"
          src={heroCinematic}
          alt="Квадроцикл SMG RIDE на видовой точке маршрута"
        />
        <div className="absolute inset-0 hero-scrim" />
        <div className="hero-nav-scrim" />
        <div className="hero-redline hero-redline--top" />
        <div className="hero-redline hero-redline--bottom" />
        <div className="hero-noise" />

        <div
          id="top"
          className="relative z-10 mx-auto grid min-h-[calc(64svh-88px)] w-full max-w-7xl content-end px-5 pb-8 pt-24 sm:px-8 lg:pb-10"
        >
          <div className="max-w-3xl">
            <p className="eyebrow">Прокат мощных квадроциклов в п. Симагино</p>
            <h1 className="mt-5 max-w-3xl font-display text-[1.7rem] font-black uppercase leading-[1] sm:text-6xl lg:text-6xl">
              Мощные квадроциклы для бездорожья
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/78">
              Свежие квадроциклы 2025 года, авторские маршруты, лесные дороги,
              песчаные холмы, водные броды и видовые точки над карьером.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary" href={telegramUrl}>
                Записаться в Telegram
              </a>
              <a className="btn btn-ghost" href={phoneHref}>
                {phoneNumber}
              </a>
            </div>

            <div className="hero-stats-row mt-9">
              {stats.map(([value, label]) => (
                <div className="hero-stats-row__item" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hero-bridge-section">
        <div className="hero-bridge-inner">
          <div className="hero-bridge-content">
            <p className="eyebrow hero-bridge-eyebrow">SMG RIDE / п. Симагино</p>
            <h2 className="hero-bridge-title">
              Авторские маршруты по лесам, карьерам и бродам
            </h2>
            <p className="hero-bridge-copy">
              Мы не даем стандартный круг по полю. Маршрут собирается как настоящий off-road выезд: лесные дороги, песочные холмы, водные участки и видовые точки в 30 км от Санкт-Петербурга.
            </p>
          </div>

          <div className="hero-bridge-media">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={forestRide}
              src="/media/smg-ride-action.mov"
              aria-label="Видео с маршрута SMG RIDE"
            />
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-white/10 bg-[#080808]">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <article className="premium-card p-6" key={item.title}>
              <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
              <h2 className="mt-6 font-display text-3xl font-black uppercase">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-white/62">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="routes"
        className="section-pad relative mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]"
      >
        <div>
          <p className="eyebrow">Маршруты</p>
          <h2 className="section-title mt-4">
            От лайта до крутого рельефа с бродами и подъемами
          </h2>
          <p className="mt-5 max-w-lg text-base font-medium leading-8 text-white/58">
            Маршруты собираются как микс локаций: лесной массив, спецдороги,
            песочные участки, высокие холмы, карьер и места, где хочется
            остановиться для фотографии.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {routes.map((route) => (
            <article className="route-card group" key={route.name}>
              <img src={route.image} alt="" />
              <div className="route-card__body">
                <span>{route.time}</span>
                <h3>{route.name}</h3>
                <p>{route.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="price" className="section-pad bg-[#0d0d0d]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Стоимость</p>
            <h2 className="section-title mt-4">
              Цена за квадроцикл, можно ехать вдвоем
            </h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-8 text-white/58">
              Комплект уже включает экипировку, полный бак и инструктора. При
              желании отдельно можно взять непромокаемый костюм за 1 000 руб.
            </p>
          </div>

          <div className="price-panel">
            <div className="price-grid">
              {prices.map(([time, price]) => (
                <article className="price-card" key={time}>
                  <span>{time}</span>
                  <strong>{price}</strong>
                </article>
              ))}
            </div>

            <div className="kit-card">
              <h3>В комплект входит</h3>
              <div className="kit-list">
                {kit.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-pad mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Галерея</p>
            <h2 className="section-title mt-4">
              Реальные кадры команды и маршрутов
            </h2>
          </div>
          <p className="max-w-xl leading-8 text-white/58">
            Фото с выездов показывают атмосферу SMG RIDE: люди, экипировка,
            техника, лесные дороги и видовые точки рядом с Симагино.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure key={item.title}>
              <img src={item.image} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="faq" className="section-pad border-y border-white/10 bg-[#080808]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title mt-4">Частые вопросы перед записью</h2>
          </div>

          <div className="faq-accordion">
            {faq.map((item, index) => {
              const isOpen = openFaqIndex === index

              return (
                <article className="faq-accordion__item" key={item.question}>
                  <button
                    className="faq-accordion__trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-accordion__icon" aria-hidden="true" />
                  </button>
                  <div
                    className={`faq-accordion__panel ${isOpen ? 'is-open' : ''}`}
                    id={`faq-panel-${index}`}
                    aria-hidden={!isOpen}
                  >
                    <p>{item.answer}</p>
                  </div>
                </article>
              )
            })}

            <div className="faq-cta">
              <strong>Остались вопросы?</strong>
              <p>Напишите в Telegram, подскажем формат маршрута и свободное время.</p>
              <a className="btn btn-primary" href={telegramUrl}>
                Задать вопрос
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="section-pad border-t border-white/10 bg-[linear-gradient(135deg,#080808,#160707)]"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <p className="eyebrow">Как нас найти</p>
            <h2 className="section-title mt-4">
              СНТ Надежда, 53 км Выборгского шоссе
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/62">
              За “Пятерочкой” направо, мимо воинского захоронения, под шоссе
              “Скандинавия”, дальше примерно 500 м. С правой стороны будет
              большой баннер SMG RIDE.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a className="btn btn-primary" href={telegramUrl}>
                {telegramHandle}
              </a>
              <a className="btn btn-ghost" href={phoneHref}>
                {phoneNumber}
              </a>
            </div>
          </div>

          <div className="location-card">
            <img src={locationMap} alt="Схема проезда к SMG RIDE в Симагино" />
            <div className="location-card__body">
              <strong>60.268229, 29.858300</strong>
              <span>координаты для навигатора</span>
              <a className="map-link" href={mapUrl} target="_blank" rel="noreferrer">
                Открыть в Яндекс.Навигаторе
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
