import Link from "next/link";

const steps = [
  "ثبت‌نام و شناخت شما",
  "بررسی پروژه و ریسک",
  "شبیه‌سازی خرید",
  "پیگیری پیشرفت",
  "بازار ثانویه (پروتوتایپ)",
];

export default function HowItWorks() {
  return (
    <main>
      <nav className="nav">
        <Link href="/" className="brand">
          <span className="brand-mark">M</span>
          <span>مِتریکا</span>
        </Link>
        <Link href="/projects" className="primary-btn">
          مشاهده پروژه‌ها
        </Link>
      </nav>
      <div className="container article">
        <span className="eyebrow">راهنمای مِتریکا</span>
        <h1>سرمایه‌گذاری کسری چطور کار می‌کند؟</h1>
        <p className="lead">
          ما تجربه‌ای شفاف برای بررسی پروژه‌ها طراحی کرده‌ایم. در این MVP،
          «واحد» یک مفهوم نمایشی برای نمایش تجربه کاربری است.
        </p>
        <div className="article-cards">
          {steps.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "۰")}</span>
              <h3>{step}</h3>
              <p>
                اطلاعات، اسناد نمونه و شاخص‌های illustrative را کنار هم ببینید
                و تصمیم آگاهانه‌تری بگیرید.
              </p>
            </div>
          ))}
        </div>
        <div className="notice">
          احراز هویت، قرارداد، پرداخت و مالکیت در این نسخه به‌صورت نمونه هستند
          و به سرویس واقعی متصل نیستند.
        </div>
      </div>
    </main>
  );
}
