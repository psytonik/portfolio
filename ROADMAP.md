# Roadmap — Portfolio

Next.js 16 (pages router) + TypeScript + Chakra UI 2. Deployed on Vercel.

## Нужно от тебя (контент)

- [ ] **GigCalm в About**: указан период «Present» (нужна дата старта), роль Founder, без слова «solo» — подтвердить; проверить, что сайт в проде
- [ ] **Ссылки компаний**: Testo Pay и Dimension Booking сейчас без ссылок (раньше вели на `google.com`)
- [ ] **Карточки проектов**: уточнить стек и свою роль в GigCalm и AFink Video (`constants/projects.ts`); Traveller уже заполнен
- [ ] **Метрики Traveller** (по желанию): установки, платящие подписчики, сгенерированные маршруты — только реальные цифры, из App Store Connect / Play Console / админки
- [ ] **Секция «AI & agents»**: проверить формулировки в `constants/aiWork.ts`, особенно карточку «AI integration for clients»
- [ ] **OG-картинка**: сейчас ссылка на сторонний ogcdn.net — сделать свою

## Инфраструктура

- [ ] **E2E-тесты** (Playwright): отправка контактной формы, мобильное меню, переключение темы
- [ ] **Lighthouse на проде**: цель LCP < 2.5s, CLS < 0.1, score ≥ 95

## Качество

- [ ] **i18n**: `next-i18next` подключён, но интерфейс не переведён (автоопределение языка выключено).
      Либо перевести en/he/ru с RTL для иврита, либо убрать
- [ ] **PWA**: `next-pwa` удалён (не работал с Next 16 / Turbopack, service worker не генерировался).
      Если нужен офлайн — поставить `@serwist/next`. Манифест и иконки на месте
- [ ] **Тёмная тема**: до гидратации возможен кратковременный светлый кадр (особенность Chakra 2 + SSG)
- [ ] **Обновить зависимости**: `next-i18next` 13, `i18next` 22, `@emailjs/browser` 3

## Фичи

- [ ] Страницы отдельных проектов (case studies: задача → решение → стек → результат)
- [ ] Блок «What your browser shares» (IP посетителя) на главной — решить, оставлять ли
- [ ] Блог / заметки (MDX)
- [ ] Мониторинг ошибок (Sentry)
- [ ] Миграция на App Router

## Done

### Контент
- [x] GigCalm в About как работа: 6 инженерных пунктов (exclusion constraint, availability engine, outbox, безопасность, тесты), иконка с gigcalm.com
- [x] Traveller в About как работа 2026 – настоящее время: роль Founder & Full-Stack Engineer, 6 пунктов достижений, ссылки на App Store, Google Play и сайт
- [x] Стек расширен под Traveller: Expo, PostgreSQL, Tailwind CSS, Vercel
- [x] Проекты вынесены в `constants/projects.ts`; добавлены GigCalm, Traveller, AFink Video
- [x] Секция «AI & agents» на главной: AI в продакшене, коммерческая интеграция, разработка с агентами
- [x] Удалён smart chat (`/api/smartchat`) и зависимости `openai`, `express`

### Дизайн
- [x] Тема с семантическими токенами (`styles/theme.ts`), шрифт Inter, светлая/тёмная по системной настройке
- [x] Единые компоненты: `Card`, `SectionHeading`, `Page`, `Seo`
- [x] Главная: hero со статичным заголовком, избранные проекты, AI, стек
- [x] Навигация: липкая шапка, подсветка текущей страницы, мобильное меню закрывается при переходе,
      skip-link, цели нажатия 44px
- [x] Контактная форма: исправлена отправка (`validDomain`), ошибки под полями с фокусом на первом
      неверном, текст не теряется при ошибке, прямые контакты рядом

### SEO
- [x] Общий `<Seo>` с canonical, OG и Twitter на каждой странице
- [x] Schema.org JSON-LD: Person + WebSite, CollectionPage для проектов, ProfilePage, ContactPage
- [x] `/sitemap.xml` генерируется из списка маршрутов, `robots.txt` на него ссылается

### Инфраструктура
- [x] ESLint 9 (flat config) + Prettier; скрипты `lint`, `typecheck`, `test`, `format`
- [x] Vitest: 16 тестов (rate limiting, JSON-LD, целостность данных и путей к картинкам)
- [x] GitHub Actions: lint → typecheck → test → build на каждый PR
- [x] README с описанием проекта, переменными и структурой; `.env.example`
- [x] Rate limiting на `/api/validate-domain` (10 запросов в минуту на IP) и строгая валидация email
- [x] Удалён Spotify (виджет, `/api/spotify`, переменные окружения)
- [x] Заголовки безопасности в `next.config.js` (nosniff, Referrer-Policy, X-Frame-Options, Permissions-Policy)
- [x] GA4: инициализация один раз, pageview на смену маршрута
- [x] `next` зафиксирован на 16.1.1; Chakra 2.2 → 2.10, framer-motion 6 → 12, swr 1 → 2, react-icons 4 → 5
- [x] Удалены `axios`, `moment`, `typed.js`, `next-themes`, `next-pwa`, `@chakra-ui/hooks`, `@chakra-ui/provider`
- [x] `public/` уменьшен с 3.4 МБ до 330 КБ (profile.png 294 → 84 КБ, удалены неиспользуемые файлы)
