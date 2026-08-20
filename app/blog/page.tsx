import Link from "next/link";

const articles = [
  "NAV illustrative چیست؟",
  "چطور پیشرفت ساخت را بخوانیم؟",
  "تنوع در ملک یعنی چه؟",
];

export default function Blog() {
  return (
    <main>
      <nav className="nav">
        <Link href="/" className="brand">
          <span className="brand-mark">M</span>
          <span>مِتریکا</span>
        </Link>
      </nav>
      <div className="container page-head">
        <span className="eyebrow">مجله مِتریکا</span>
        <h1>دانستن، بخشی از سرمایه‌گذاری است.</h1>
      </div>
      <div className="container article-cards">
        {articles.map((title, index) => (
          <article key={title}>
            <span>مقاله {String(index + 1).padStart(2, "۰")}</span>
            <h2>{title}</h2>
            <p>
              راهنمای کوتاه و غیرتخصصی برای خواندن داده‌های پروژه و پرسیدن
              سؤال‌های درست.
            </p>
            <Link href="/faq">ادامه مطلب ←</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
