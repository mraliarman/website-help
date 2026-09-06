# Website Help — مرجع فارسی توسعه وب و وردپرس

مرجع فارسی و قابل جستجو برای یادگیری، پیاده‌سازی و عیب‌یابی توسعه وب. نسخه فعلی دارای **۳۰٬۰۰۰ مدخل دانش** در **۳۰ حوزه تخصصی** است و دانش WordPress Developer Resources و W3Schools را در کنار منابع رسمی تکمیلی در یک ساختار یکپارچه ارائه می‌کند.

## دامنه دانش

- مفاهیم پایه وب، مرورگر، کلاینت، سرور و CMS
- هاست، Web Hosting، VPS، cPanel، DirectAdmin، Apache، Nginx و LiteSpeed
- دامنه، DNS، Nameserver، رکوردها، TLD و Registry/Registrar
- NIC، ایرنیک، شناسه NIC، ثبت و تمدید دامنه‌های `.ir`
- WordPress Core، APIها، WP-CLI، Cron، Options، Metadata، Transients و Multisite
- استاندارد توسعه قالب کلاسیک و Block Theme
- استاندارد توسعه افزونه و چرخه Activation/Deactivation/Uninstall
- Actions، Filters، Hooks و API Reference وردپرس
- Template Hierarchy، Template Parts، Theme Tags و `theme.json`
- Gutenberg، Block Editor، Block API، Patterns و Interactivity API
- WooCommerce، محصول، سفارش، سبد خرید، پرداخت، حمل‌ونقل و Store API
- HTML و HTML Reference
- CSS، Selectors، Flexbox، Grid، Responsive و CSS Functions
- JavaScript، DOM، Events، Fetch، Modules، Async و Browser APIs
- Web APIs، Storage، History، Service Worker، Cache و WebSocket
- HTTP، HTTPS، Headers، Cookies، Methods و Status Codes
- Database، MySQL/MariaDB/SQLite، SQL، Index، Transaction و Migration
- PHP، Composer، Namespace، OOP، PSR و Dependency Management
- SEO، Crawl، Indexing، Canonical، Sitemap، Structured Data و Search Console
- Performance، Core Web Vitals، LCP، INP، CLS، TTFB، CDN و Caching
- Security، XSS، CSRF، SQL Injection، CSP، HSTS، Nonce، Sanitization و Escaping
- Accessibility و WCAG، Semantic HTML، ARIA، Keyboard Navigation و Screen Reader
- UI/UX، Information Architecture، Design System و Usability
- Forms، Validation، CSRF، Input Types و Error States
- Images، Video، Audio، SVG، WebP، AVIF، Responsive Images و Lazy Loading
- DevOps، CI/CD، GitHub Actions، Deployment، Rollback، Docker و Monitoring
- Git، Branch، Commit، Merge، Rebase، Pull Request و Code Review
- Testing، Unit، Integration، E2E، Regression، Load، Security و Accessibility Testing
- Privacy، Personal Data، Consent، Retention، Anonymization و Privacy by Design
- Architecture، SOLID، Separation of Concerns، Design Patterns و Technical Debt

## مدل ۳۰٬۰۰۰ مدخل

دانشنامه از **۷۵۰ مفهوم پایه تخصصی** و **۴۰ بُعد آموزشی/مهندسی** ساخته می‌شود؛ حاصل دقیقاً **۳۰٬۰۰۰ مدخل قابل جستجو** است. برای هر مفهوم، ابعادی مانند تعریف، کاربرد، پیاده‌سازی، مثال، امنیت، Performance، SEO، Accessibility، تست، عیب‌یابی، نسخه‌بندی، مهاجرت، استقرار، معماری، Code Review و مرجع رسمی در دسترس است.

این ساختار باعث می‌شود یک اصطلاح فقط به‌صورت یک تعریف کوتاه ثبت نشود و بتوان آن را از چند زاویه مهندسی بررسی کرد.

## منابع اصلی

### WordPress

- WordPress Developer Resources
- WordPress Code Reference
- Theme Handbook
- Plugin Handbook
- Hooks API و Action/Filter Reference
- Template Hierarchy
- Block Editor Handbook
- REST API
- Coding Standards
- WooCommerce Documentation

### W3Schools

- HTML Tutorial و HTML Reference
- CSS Tutorial و CSS Reference
- JavaScript Tutorial و JavaScript Reference
- HTML Forms، Media، DOM و Browser APIs

### منابع تکمیلی رسمی

- Google Search Central برای SEO
- web.dev برای Performance و Core Web Vitals
- MDN Web Docs برای Web Platform
- W3C برای Accessibility و Privacy
- PHP Documentation
- Git Documentation
- GitHub Actions Documentation
- ICANN برای مفاهیم Domain و DNS
- NIC برای دامنه‌های `.ir`

## معماری پروژه

```text
website-help/
├── index.html
├── term.js
├── assets/
│   ├── app.js
│   └── main.css
├── 404.html
├── manifest.webmanifest
├── robots.txt
├── sitemap.xml
├── .github/workflows/validate.yml
├── LICENSE
├── SECURITY.md
└── README.md
```

### `term.js`

منبع داده دانشنامه است. داده‌ها به‌صورت برنامه‌ای ساخته می‌شوند تا حجم repository کنترل شود، اما تعداد خروجی با assertion دقیق روی **۳۰٬۰۰۰** کنترل می‌شود. هر مدخل دارای عنوان، توضیح فارسی، دسته‌بندی، آیکون، منبع و لینک مرجع است.

### `assets/app.js`

لایه ارائه و تعاملات شامل جستجو، فیلتر، شمارنده نتایج، رندر تدریجی و Empty State است.

## عملکرد

- JavaScript با `defer` اجرا می‌شود.
- داده‌ها یک‌بار در حافظه ساخته و برای جستجو استفاده می‌شوند.
- رندر نتایج به‌صورت صفحه‌ای انجام می‌شود تا DOM همزمان با ۳۰٬۰۰۰ کارت پر نشود.
- جستجو debounce دارد.
- منابع خارجی غیرضروری render-blocking نیستند.
- حالت `prefers-reduced-motion` رعایت می‌شود.
- صفحه بدون framework و bundler سنگین اجرا می‌شود.

## کیفیت محتوا

هر مدخل باید عنوان روشن، توضیح فارسی، دسته‌بندی صحیح و مرجع معتبر داشته باشد. برای APIها و استانداردهای WordPress اولویت با مستندات رسمی WordPress است. برای HTML/CSS/JavaScript اولویت با W3Schools و منابع استاندارد پلتفرم است. برای SEO، Performance، Accessibility و Security نیز باید از منابع رسمی و به‌روز استفاده شود.

## توسعه محلی

```bash
git clone https://github.com/mraliarman/website-help.git
cd website-help
python -m http.server 8000
```

سپس `http://localhost:8000` را باز کنید.

برای بررسی Syntax فایل‌های JavaScript:

```bash
npm run check
```

## مشارکت

برای افزودن دانش جدید، ابتدا منبع رسمی را بررسی کنید، اصطلاح را در دسته مناسب قرار دهید و از تعریف‌های تکراری یا لینک‌های غیررسمی به‌عنوان مرجع اصلی استفاده نکنید.

## امنیت و مجوز

گزارش آسیب‌پذیری طبق [SECURITY.md](SECURITY.md) انجام می‌شود. پروژه تحت مجوز MIT منتشر شده است.

## وضعیت

این پروژه یک دانشنامه زنده است و با تغییر APIهای WordPress، استانداردهای وب، W3Schools، SEO و Core Web Vitals باید به‌صورت دوره‌ای بازبینی و به‌روزرسانی شود.
