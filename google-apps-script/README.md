# Подключение формы SMG RIDE

Google Таблица уже создана:

https://docs.google.com/spreadsheets/d/1MgMTP9R_bbupLiBHX8NaziEIiHGNoEG7VjkM442_HMs/edit

## 1. Создать Apps Script

1. Откройте https://script.google.com/ и создайте новый проект.
2. Удалите стандартный код из `Code.gs`.
3. Скопируйте содержимое локального файла `google-apps-script/Code.gs`.
4. Сохраните проект под названием `SMG RIDE Leads`.

## 2. Опубликовать обработчик

1. Нажмите `Deploy` -> `New deployment`.
2. Выберите тип `Web app`.
3. `Execute as`: `Me`.
4. `Who has access`: `Anyone`.
5. Подтвердите доступ и скопируйте URL, заканчивающийся на `/exec`.

## 3. Подключить сайт

Создайте в корне проекта файл `.env.local`:

```env
VITE_PUBLIC_LEADS_ENDPOINT="https://script.google.com/macros/s/ВАШ_ID/exec"
```

Перезапустите dev-сервер после изменения переменных окружения.

## 4. Проверить

1. Отправьте тестовую заявку с сайта.
2. Откройте лист `Заявки` в Google Таблице.
3. Новая строка должна содержать дату, имя, телефон, Telegram, источник и статус.

Если код Apps Script меняется после публикации, создайте новую версию deployment.
