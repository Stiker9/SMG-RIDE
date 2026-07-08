# SMG RIDE Landing

Лендинг для проката квадроциклов SMG RIDE на React, Vite и Tailwind CSS.
Текущий стиль: темный премиальный motorsport с красными акцентами, крупной типографикой, реальными фото и видео заказчика.

## Что внутри

- `src/App.jsx` — структура страницы: hero, преимущества, маршруты, цены, видео, галерея, FAQ, контакты и схема проезда.
- `src/index.css` — Tailwind, базовые стили, премиальные glass-панели и адаптив.
- `src/assets/brand/` — логотипы SMG RIDE.
- `src/assets/gallery/` — реальные фото заказчика для hero, маршрутов, галереи и блока “Как нас найти”.
- `public/media/` — видео маршрута для секции с живым контентом.
- `.env.example` — пример публичных настроек контактов.

## Как запустить

```bash
pnpm install
pnpm dev
```

Если будешь запускать через npm:

```bash
npm install
npm run dev
```

## Где менять контакты

Скопируй `.env.example` в `.env.local` и впиши реальные значения:

```bash
VITE_PUBLIC_PHONE="+7 995 590 7057"
VITE_PUBLIC_PHONE_HREF="tel:+79955907057"
VITE_PUBLIC_TELEGRAM_URL="https://t.me/smg_ride_t"
```

Секретные MCP/API-ключи не нужно добавлять в `VITE_` переменные, потому что такие переменные видны в браузере.
