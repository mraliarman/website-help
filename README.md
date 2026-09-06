# راهنمای توسعه و استانداردهای وب

مرجع فارسی و کاربردی برای توسعه‌دهندگان، طراحان و مدیران وب‌سایت که می‌خواهند اصطلاحات، استانداردها و الگوهای صحیح توسعه را در یک نقطه در اختیار داشته باشند.

[![Language](https://img.shields.io/badge/language-Persian-7b61ff)](https://github.com/mraliarman/website-help)
[![License](https://img.shields.io/badge/license-MIT-00d5ff)](LICENSE)

## معرفی

این repository یک وب‌سایت استاتیک، سبک و RTL است که به‌عنوان یک مرجع سریع برای مفاهیم توسعه وب طراحی شده است. نسخه فعلی علاوه بر واژه‌نامه عمومی، حوزه‌های تخصصی زیر را پوشش می‌دهد:

- اصول و چک‌لیست‌های SEO
- Core Web Vitals و بهینه‌سازی سرعت
- HTML، CSS، JavaScript و اصول Front-end
- UI/UX، دسترس‌پذیری و Responsive Design
- اصول توسعه قالب کلاسیک و Block Theme وردپرس
- اصول توسعه افزونه وردپرس
- Hooks، Actions و Filters
- Template Hierarchy، Template Tags و Template Parts
- REST API، WP-CLI، Cron، Transients و Metadata
- امنیت وردپرس و توسعه امن
- WooCommerce و مفاهیم فروشگاه اینترنتی
- Tailwind CSS و مفاهیم مدرن CSS
- DNS، HTTPS، CDN، Cache، Hosting و زیرساخت وب

## هدف پروژه

هدف پروژه ایجاد یک مرجع قابل جستجو و قابل توسعه است؛ به‌گونه‌ای که توسعه‌دهنده بتواند هنگام طراحی سایت، توسعه قالب یا افزونه، رفع خطا، بررسی SEO یا بهینه‌سازی عملکرد، سریعاً به تعریف و مرجع رسمی هر مفهوم برسد.

محتوای فنی وردپرس تا حد امکان به مستندات رسمی WordPress Developer Resources متصل شده و برای SEO و Performance نیز از منابع رسمی Google Search Central، web.dev و MDN استفاده می‌شود.

## ساختار repository

```text
website-help/
├── index.html
├── term.js
├── og-logo.png
├── README.md
├── SECURITY.md
└── LICENSE
```

### `index.html`

صفحه اصلی و رابط کاربری پروژه است. صفحه با HTML، CSS و JavaScript ساده ساخته شده و برای اجرای آن نیازی به framework، bundler یا build step ندارد.

### `term.js`

منبع داده اصطلاحات و استانداردها و منطق جستجو و نمایش کارت‌ها است. داده‌ها دارای عنوان، توضیح، دسته‌بندی، لینک مرجع و آیکون هستند.

### `og-logo.png`

تصویر Open Graph، favicon و تصویر اشتراک‌گذاری پروژه است.

## دسته‌بندی محتوای مرجع

### ۱. SEO

این بخش اصول مهمی مانند Search Intent، Title، Meta Description، Canonical، Robots، Sitemap، Internal Linking، Structured Data، Schema، Open Graph، Crawlability، Indexability، Mobile SEO، Image SEO، Technical SEO، Core Web Vitals و Search Console را پوشش می‌دهد.

مرجع اصلی: Google Search Central.

### ۲. Performance

استانداردهای Performance شامل TTFB، LCP، INP، CLS، Critical Rendering Path، Render Blocking، Cache-Control، Compression، Brotli، Gzip، CDN، Image Optimization، WebP، AVIF، Lazy Loading، Preload، Preconnect، DNS Prefetch، Code Splitting، Minification و کاهش JavaScript غیرضروری است.

هدف پروژه این است که توصیه‌ها فقط به «سریع‌تر کردن سایت» محدود نشوند و تفاوت بین اندازه فایل، زمان شبکه، زمان سرور، زمان parse/compile و زمان render نیز مشخص باشد.

### ۳. توسعه قالب وردپرس

مباحث کلاسیک و Block Theme در نظر گرفته شده‌اند؛ از `style.css`، `functions.php`، Template Hierarchy، Template Tags و `theme.json` تا Templates، Template Parts، Patterns، Block Styles، Global Styles، Enqueue کردن assetها، Localization و Accessibility.

### ۴. توسعه افزونه وردپرس

مفاهیم Plugin Architecture، Plugin Header، Activation/Deactivation/Uninstall، Settings API، Options API، Metadata API، Shortcodes، Custom Post Types، Taxonomies، REST API، AJAX، Nonces، Capabilities، Sanitization، Validation، Escaping، Cron، Transients، HTTP API و Internationalization پوشش داده شده‌اند.

### ۵. Hooks، Actions و Filters

هوک‌ها به دو گروه Action و Filter تقسیم می‌شوند. Action برای اجرای رفتار در یک نقطه مشخص و Filter برای تغییر داده در مسیر پردازش استفاده می‌شود. مرجع رسمی WordPress فهرست Action و Filter را جداگانه ارائه می‌کند.

این پروژه مجموعه‌ای از مهم‌ترین هوک‌های عمومی، Front-end، Admin، Query، Template، Authentication، Media، REST، Cron و Content را به‌عنوان مرجع سریع ارائه می‌کند و در هر مورد به مستندات رسمی متصل می‌شود.

### ۶. Templateها و Template Hierarchy

ساختار قالب‌های کلاسیک و Block Theme از جمله `front-page`، `home`، `single`، `page`، `archive`، `category`، `tag`، `taxonomy`، `author`، `date`، `search`، `404`، `attachment` و `embed` پوشش داده شده است.

در Block Theme نیز `/templates` و `/parts` و فایل‌های `.html` مورد توجه قرار گرفته‌اند.

## استانداردهای محتوا

هر استاندارد جدید باید:

1. عنوان دقیق و قابل جستجو داشته باشد.
2. توضیح فارسی کوتاه و کاربردی داشته باشد.
3. دسته‌بندی مشخص داشته باشد.
4. لینک مرجع معتبر داشته باشد.
5. تا حد امکان به منبع رسمی یا مستندات اولیه متصل باشد.
6. از ادعاهای قدیمی یا منسوخ جلوگیری کند.
7. برای توسعه‌دهنده قابل استفاده عملی باشد.
8. در صورت تغییر استاندارد، لینک و توضیح آن بازبینی شود.

## استانداردهای توسعه کد

کد پروژه باید ساده، قابل نگهداری و بدون وابستگی غیرضروری باشد. JavaScript باید در حد امکان با APIهای استاندارد مرورگر نوشته شود. دستکاری DOM باید حداقل باشد و event listenerهای سنگین نباید در مسیر تعامل اصلی صفحه قرار بگیرند.

برای منابع JavaScript خارجی از `defer` یا الگوی بارگذاری مناسب استفاده می‌شود. منابع خارجی غیرضروری نباید باعث render-blocking شدن صفحه شوند.

## اصول Performance خود پروژه

- JavaScript با `defer` بارگذاری می‌شود.
- رندر کارت‌ها به‌صورت تدریجی انجام می‌شود.
- جستجو با debounce اجرا می‌شود.
- افکت‌های سنگین در دستگاه‌های ضعیف و حالت reduced-motion محدود می‌شوند.
- eventهای pointer تا حد امکان با `requestAnimationFrame` کنترل می‌شوند.
- منابع فونت خارجی نباید بی‌دلیل مسیر رندر اولیه را مسدود کنند.
- لینک‌های خارجی با `noopener noreferrer` باز می‌شوند.
- تصاویر دارای ابعاد مشخص هستند تا از Layout Shift جلوگیری شود.
- داده‌های تکراری حذف و ساختار داده‌ها ساده نگه داشته می‌شود.

## UI/UX

سبک بصری پروژه عمداً حفظ شده است: پس‌زمینه تیره، glassmorphism، گرادیان‌های بنفش/آبی، کارت‌های نرم و RTL. در کنار حفظ هویت بصری، موارد زیر بهبود یافته‌اند:

- سلسله‌مراتب بصری واضح‌تر
- خوانایی بهتر متن فارسی
- وضعیت جستجوی واضح‌تر
- تعامل بهتر کارت‌ها
- کنترل انیمیشن با `prefers-reduced-motion`
- رفتار بهتر در موبایل
- focus state قابل مشاهده
- اندازه touch target مناسب
- پیام empty state بهتر
- کاهش افکت‌های غیرضروری در موبایل

## منابع رسمی

- WordPress Developer Resources: https://developer.wordpress.org/
- WordPress Plugin Handbook: https://developer.wordpress.org/plugins/
- WordPress Theme Handbook: https://developer.wordpress.org/themes/
- WordPress Hooks: https://developer.wordpress.org/apis/hooks/
- WordPress Action Reference: https://developer.wordpress.org/apis/hooks/action-reference/
- WordPress Filter Reference: https://developer.wordpress.org/apis/hooks/filter-reference/
- Google Search Central: https://developers.google.com/search/docs
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- web.dev: https://web.dev/
- MDN Web Docs: https://developer.mozilla.org/

## اجرای محلی

از آنجا که پروژه کاملاً استاتیک است، کافی است repository را clone کرده و `index.html` را در یک وب‌سرور ساده اجرا کنید.

```bash
git clone https://github.com/mraliarman/website-help.git
cd website-help
python -m http.server 8000
```

سپس آدرس زیر را باز کنید:

```text
http://localhost:8000
```

## انتشار

repository برای میزبانی استاتیک مناسب است و می‌تواند روی GitHub Pages، Cloudflare Pages، Netlify، Vercel یا هر وب‌سرور معمولی قرار گیرد.

## مشارکت

برای افزودن استاندارد جدید، ابتدا مرجع رسمی را بررسی کنید، سپس یک عنوان دقیق، توضیح فارسی کاربردی، دسته‌بندی و لینک معتبر اضافه کنید. از ایجاد اصطلاحات تکراری یا لینک‌های جستجوی عمومی به‌جای مستندات رسمی خودداری کنید.

## مجوز

این پروژه تحت مجوز MIT منتشر شده است. متن کامل مجوز در فایل [LICENSE](LICENSE) قرار دارد.

## امنیت

برای گزارش آسیب‌پذیری یا مشکل امنیتی، دستورالعمل [SECURITY.md](SECURITY.md) را مطالعه کنید.

## وضعیت پروژه

این پروژه یک مرجع زنده است و محتوای آن باید با تغییر APIها، استانداردهای SEO، Core Web Vitals و نسخه‌های جدید WordPress به‌صورت دوره‌ای بازبینی شود.
