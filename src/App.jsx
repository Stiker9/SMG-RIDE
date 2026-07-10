import { useEffect, useRef, useState } from 'react'
import forestRide from './assets/gallery/forest-ride.jpg'
import forestDuo from './assets/gallery/forest-duo.jpg'
import groupStart from './assets/gallery/group-start.jpg'
import helmetCloseup from './assets/gallery/helmet-closeup.jpg'
import heroCinematic from './assets/gallery/head.png'
import heroOverlook from './assets/gallery/hero-overlook.png'
import locationMap from './assets/gallery/location-map.png'
import mudAction from './assets/gallery/mud-action.jpg'
import ambientTrackUrl from './assets/gallery/Booker - Время колокольчиков (pesni.fm).mp3'
import brandMark from './assets/brand/smg-ride-atv-logo.png'
import BookingForm from './components/BookingForm.jsx'

const phoneNumber = import.meta.env.VITE_PUBLIC_PHONE ?? '+7 995 590 7057'
const phoneHref = import.meta.env.VITE_PUBLIC_PHONE_HREF ?? 'tel:+79955907057'
const telegramHandle = '@smg_ride_t'
const telegramUrl =
  import.meta.env.VITE_PUBLIC_TELEGRAM_URL ?? 'https://t.me/smg_ride_t'
const instagramUrl =
  import.meta.env.VITE_PUBLIC_INSTAGRAM_URL ??
  'https://www.instagram.com/smg_ride?utm_source=qr'
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
    image: forestDuo,
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
  { image: heroOverlook, title: 'Видовая точка', area: 'a' },
  { image: groupStart, title: 'Старт группы', area: 'b' },
  { image: helmetCloseup, title: 'Экипировка', area: 'c' },
  { image: forestRide, title: 'Лесной участок', area: 'd' },
]

function TelegramIcon(props) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 264.583 264.583" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M132.345 33.973c-26.716 0-30.07.117-40.563.594-10.472.48-17.62 2.136-23.876 4.567-6.47 2.51-11.958 5.87-17.426 11.335-5.472 5.464-8.834 10.948-11.354 17.412-2.44 6.252-4.1 13.397-4.57 23.858-.47 10.486-.593 13.838-.593 40.535 0 26.697.119 30.037.594 40.522.482 10.465 2.14 17.609 4.57 23.859 2.515 6.465 5.876 11.95 11.346 17.414 5.466 5.468 10.955 8.834 17.42 11.345 6.26 2.431 13.41 4.088 23.881 4.567 10.493.477 13.844.594 40.559.594 26.719 0 30.061-.117 40.555-.594 10.472-.48 17.63-2.136 23.888-4.567 6.468-2.51 11.948-5.877 17.414-11.345 5.472-5.464 8.834-10.949 11.354-17.412 2.419-6.252 4.079-13.398 4.57-23.858.472-10.486.595-13.828.595-40.525s-.123-30.047-.594-40.533c-.492-10.465-2.152-17.608-4.57-23.858-2.521-6.466-5.883-11.95-11.355-17.414-5.472-5.468-10.944-8.827-17.42-11.335-6.271-2.431-13.424-4.088-23.897-4.567-10.493-.477-13.834-.594-40.558-.594zm-8.825 17.715c2.62-.004 5.542 0 8.825 0 26.266 0 29.38.094 39.752.565 9.591.438 14.797 2.04 18.264 3.385 4.591 1.782 7.864 3.912 11.305 7.352 3.443 3.44 5.575 6.717 7.362 11.305 1.346 3.46 2.951 8.663 3.388 18.247.47 10.363.573 13.475.573 39.71 0 26.233-.102 29.346-.573 39.709-.44 9.584-2.042 14.786-3.388 18.247-1.783 4.587-3.919 7.854-7.362 11.292-3.443 3.441-6.712 5.57-11.305 7.352-3.463 1.352-8.673 2.95-18.264 3.388-10.37.47-13.486.573-39.752.573-26.268 0-29.38-.102-39.751-.573-9.592-.443-14.797-2.044-18.267-3.39-4.59-1.781-7.87-3.911-11.313-7.352-3.443-3.44-5.574-6.709-7.362-11.298-1.346-3.461-2.95-8.663-3.387-18.247-.472-10.363-.566-13.476-.566-39.726s.094-29.347.566-39.71c.438-9.584 2.04-14.786 3.387-18.25 1.783-4.588 3.919-7.865 7.362-11.305 3.443-3.441 6.722-5.57 11.313-7.357 3.468-1.351 8.675-2.949 18.267-3.389 9.075-.41 12.592-.532 30.926-.553zm61.337 16.322c-6.518 0-11.805 5.277-11.805 11.792 0 6.512 5.287 11.796 11.805 11.796 6.517 0 11.804-5.284 11.804-11.796 0-6.513-5.287-11.796-11.805-11.796zm-52.512 13.782c-27.9 0-50.519 22.603-50.519 50.482 0 27.879 22.62 50.471 50.52 50.471s50.51-22.592 50.51-50.471c0-27.879-22.613-50.482-50.513-50.482zm0 17.715c18.11 0 32.792 14.67 32.792 32.767 0 18.096-14.683 32.767-32.792 32.767-18.11 0-32.791-14.671-32.791-32.767 0-18.098 14.68-32.767 32.791-32.767z" />
    </svg>
  )
}

function SoundOnIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M17 8.5a5 5 0 0 1 0 7" />
      <path d="M19.5 6a8.5 8.5 0 0 1 0 12" />
    </svg>
  )
}

function SoundOffIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M16 9.5 20.5 14" />
      <path d="M20.5 9.5 16 14" />
    </svg>
  )
}

const AMBIENT_VOLUME = 0.08
const AMBIENT_FADE_IN = 1.5

function MusicToggle() {
  const audioRef = useRef(null)
  const userPausedRef = useRef(false)
  const startedRef = useRef(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const events = ['pointerdown', 'keydown', 'touchstart', 'wheel', 'scroll']

    const removeStartListeners = () => {
      events.forEach((event) => window.removeEventListener(event, startPlayback))
    }

    const startPlayback = () => {
      const audio = audioRef.current
      if (!audio || startedRef.current || userPausedRef.current) return
      startedRef.current = true
      audio.volume = 0
      audio
        .play()
        .then(() => {
          setPlaying(true)
          removeStartListeners()
        })
        .catch(() => {
          startedRef.current = false
        })
    }

    events.forEach((event) =>
      window.addEventListener(event, startPlayback, { passive: true }),
    )

    startPlayback()

    return removeStartListeners
  }, [])

  const handleTimeUpdate = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume =
      audio.currentTime >= AMBIENT_FADE_IN
        ? AMBIENT_VOLUME
        : AMBIENT_VOLUME * (audio.currentTime / AMBIENT_FADE_IN)
  }

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      userPausedRef.current = true
      audio.pause()
      setPlaying(false)
      return
    }

    userPausedRef.current = false
    startedRef.current = true
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }

  return (
    <div className="music-toggle-wrap">
      <audio
        ref={audioRef}
        src={ambientTrackUrl}
        preload="auto"
        loop
        onTimeUpdate={handleTimeUpdate}
      />
      <button
        type="button"
        className={`music-toggle${playing ? ' music-toggle--playing' : ''}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Выключить фоновую музыку' : 'Включить фоновую музыку'}
      >
        {playing ? (
          <SoundOnIcon className="h-[1.1rem] w-[1.1rem]" />
        ) : (
          <SoundOffIcon className="h-[1.1rem] w-[1.1rem]" />
        )}
      </button>
    </div>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M9 5 16 12 9 19" />
    </svg>
  )
}

function Gallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = () => setActiveIndex(null)
  const showPrev = () =>
    setActiveIndex((current) => (current - 1 + items.length) % items.length)
  const showNext = () => setActiveIndex((current) => (current + 1) % items.length)

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + items.length) % items.length)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % items.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, items.length])

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <figure
            key={item.title}
            className={`gallery-grid__item--${item.area}${
              hoveredIndex !== null && hoveredIndex !== index
                ? ' gallery-grid__item--blurred'
                : ''
            }`}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={item.image} alt={item.title} />
          </figure>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[activeIndex].title}>
          <button
            type="button"
            className="lightbox__close"
            onClick={close}
            aria-label="Закрыть просмотр"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={showPrev}
            aria-label="Предыдущее фото"
          >
            <ChevronIcon className="h-6 w-6 rotate-180" />
          </button>

          <figure className="lightbox__figure">
            <img src={items[activeIndex].image} alt={items[activeIndex].title} />
            <figcaption>{items[activeIndex].title}</figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={showNext}
            aria-label="Следующее фото"
          >
            <ChevronIcon className="h-6 w-6" />
          </button>

          <button
            type="button"
            className="lightbox__backdrop"
            onClick={close}
            aria-label="Закрыть просмотр"
            tabIndex={-1}
          />
        </div>
      )}
    </>
  )
}

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
            <img className="brand-mark" src={brandMark} alt="" />
            <span className="brand-word brand-word--smg">SMG</span>
            <span className="brand-slash-triple" aria-hidden="true">
              <span>/</span>
              <span>/</span>
              <span>/</span>
            </span>
            <span className="brand-word brand-word--ride" data-text="RIDE">
              RIDE
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold uppercase text-white/70 md:flex">
            <NavLink href="#routes">Маршруты</NavLink>
            <NavLink href="#price">Цены</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contacts">Как найти</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 sm:flex">
              <a
                className="social-icon-link"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="SMG RIDE в Instagram"
              >
                <InstagramIcon className="h-[1.05rem] w-[1.05rem]" />
              </a>
              <a
                className="social-icon-link"
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="SMG RIDE в Telegram"
              >
                <TelegramIcon className="h-[1.05rem] w-[1.05rem]" />
              </a>
            </div>

            <a className="btn btn-primary hidden sm:inline-flex" href={telegramUrl}>
              Записаться
            </a>
          </div>
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
          <div className="hero-intro max-w-3xl">
            <p className="eyebrow hero-intro__eyebrow">Прокат мощных квадроциклов в п. Симагино</p>
            <h1 className="hero-intro__title mt-5 max-w-3xl text-[1.7rem] font-black uppercase leading-[1] sm:text-6xl lg:text-6xl">
              <span className="hero-title-line">
                <span>Мощные квадроциклы</span>
              </span>
              <span className="hero-title-line hero-title-line--second">
                <span>для бездорожья</span>
              </span>
            </h1>
            <p className="hero-intro__copy mt-6 max-w-2xl text-lg font-medium leading-8 text-white/78">
              Свежие квадроциклы 2025 года, авторские маршруты, лесные дороги,
              песчаные холмы, водные броды и видовые точки над карьером.
            </p>

            <div className="hero-intro__actions mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary" href={telegramUrl}>
                Записаться в Telegram
              </a>
              <a className="btn btn-ghost" href={phoneHref}>
                {phoneNumber}
              </a>
            </div>

            <div className="hero-intro__stats hero-stats-row mt-9">
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

      <section className="route-ribbon" aria-label="Особенности маршрута">
        <div className="route-ribbon__track">
          <span>Лес</span>
          <i aria-hidden="true">/</i>
          <span>Броды</span>
          <i aria-hidden="true">/</i>
          <span>Карьер</span>
          <i aria-hidden="true">/</i>
          <span>Полный газ</span>
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
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-4">
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

          <div className="experience-media">
            <img
              className="experience-media__primary"
              src={mudAction}
              alt="Квадроцикл на полном ходу поднимает брызги грязи"
            />
          </div>
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

        <div className="grid gap-4 md:grid-cols-[1.3fr_1fr_1.05fr]">
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

      <section id="booking" className="lead-section section-pad">
        <div className="lead-section__inner">
          <div className="lead-section__copy">
            <p>Запись на маршрут</p>
            <h2>Оставьте контакты. Мы подберём свободное время</h2>
            <div className="lead-section__facts">
              <span>Уточним количество человек</span>
              <span>Подберём маршрут под ваш опыт</span>
              <span>Ответим по телефону или в Telegram</span>
            </div>
          </div>

          <BookingForm telegramUrl={telegramUrl} />
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
        </div>

        <Gallery items={gallery} />
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

      <footer className="site-footer">
        <div className="site-footer__top">
          <a className="brand-link" href="#top" aria-label="SMG RIDE">
            <span className="brand-word brand-word--smg">SMG</span>
            <span className="brand-slash-triple" aria-hidden="true">
              <span>/</span>
              <span>/</span>
              <span>/</span>
            </span>
            <span className="brand-word brand-word--ride" data-text="RIDE">
              RIDE
            </span>
          </a>

          <nav className="site-footer__nav">
            <a href="#routes">Маршруты</a>
            <a href="#price">Цены</a>
            <a href="#faq">FAQ</a>
            <a href="#contacts">Как найти</a>
          </nav>

          <div className="site-footer__contacts">
            <a
              className="social-icon-link"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="SMG RIDE в Instagram"
            >
              <InstagramIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <a
              className="social-icon-link"
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="SMG RIDE в Telegram"
            >
              <TelegramIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <a className="site-footer__phone" href={phoneHref}>
              {phoneNumber}
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} SMG RIDE. Все права защищены.</span>
          <span>СНТ Надежда, 53 км Выборгского шоссе</span>
        </div>
      </footer>

      <MusicToggle />
    </main>
  )
}

export default App
