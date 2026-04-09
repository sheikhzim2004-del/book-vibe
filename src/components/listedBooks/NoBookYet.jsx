import { useEffect, useRef } from "react";

const BOOKS = [
  { color: "#C8B8F8", spine: "#7C6FCD", lines: ["#A99EE0", "#A99EE0", "#A99EE0"], w: 52, h: 76 },
  { color: "#8EDCBE", spine: "#1D9E75", lines: ["#5DCAA5", "#5DCAA5", "#5DCAA5", "#5DCAA5"], w: 48, h: 84 },
  { color: "#F4B8A2", spine: "#D85A30", lines: ["#F0997B", "#F0997B", "#F0997B"], w: 44, h: 70 },
];

function BookSvg({ book, className }) {
  return (
    <svg
      className={className}
      width={book.w}
      height={book.h}
      viewBox={`0 0 ${book.w} ${book.h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={book.w} height={book.h} rx="4" fill={book.color} />
      <rect x="6" y="6" width={book.w - 12} height={book.h - 12} rx="3" fill="white" fillOpacity="0.45" />
      {book.lines.map((lc, i) => (
        <rect
          key={i}
          x="8"
          y={18 + i * 8}
          width={book.w - 20 - (i % 2) * 6}
          height="2"
          rx="1"
          fill={lc}
          fillOpacity="0.7"
        />
      ))}
      <rect x="0" y="0" width="6" height={book.h} rx="2" fill={book.spine} />
    </svg>
  );
}

export default function NoBookYet() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@400;500&display=swap');

        .nby-wrap {
          font-family: 'DM Sans', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 420px;
          padding: 3rem 1.5rem;
          text-align: center;
          background: #FAFAF8;
          border-radius: 16px;
          border: 1px solid #EDEDEA;
        }

        .nby-shelf {
          position: relative;
          width: 196px;
          height: 116px;
          margin-bottom: 2rem;
        }

        .nby-book {
          position: absolute;
          bottom: 12px;
          transform-origin: bottom center;
        }

        .nby-book-1 { left: 8px;   animation: nbyFloatA 3.8s ease-in-out infinite; }
        .nby-book-2 { left: 74px;  animation: nbyFloatB 4.4s ease-in-out infinite; }
        .nby-book-3 { left: 136px; animation: nbyFloatA 3.2s ease-in-out infinite 0.6s; }

        @keyframes nbyFloatA {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50%       { transform: translateY(-10px) rotate(2deg); }
        }

        @keyframes nbyFloatB {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50%       { transform: translateY(-7px) rotate(-1.5deg); }
        }

        .nby-plank {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 190px;
          height: 5px;
          background: #E0DDD5;
          border-radius: 3px;
        }

        .nby-shadow {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          height: 4px;
          background: #D8D4CB;
          border-radius: 3px;
          opacity: 0.5;
        }

        .nby-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #F0EDE6;
          border: 1px solid #E5E1D8;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 12px;
          color: #888780;
          letter-spacing: 0.04em;
          margin-bottom: 1rem;
        }

        .nby-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C8C4BB;
        }

        .nby-title {
          font-family: 'Lora', serif;
          font-size: 22px;
          font-weight: 500;
          color: #2C2C2A;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .nby-sub {
          font-size: 14px;
          color: #888780;
          margin: 0 0 2rem;
          max-width: 250px;
          line-height: 1.65;
        }

        .nby-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2C2C2A;
          color: #F1EFE8;
          border: none;
          border-radius: 10px;
          padding: 11px 22px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.18s, transform 0.15s;
          letter-spacing: 0.01em;
        }

        .nby-btn:hover  { background: #444441; transform: translateY(-1px); }
        .nby-btn:active { transform: scale(0.97); }
      `}</style>

      <div className="nby-wrap my-8" ref={wrapRef}>

        <div className="nby-shelf">
          <BookSvg book={BOOKS[0]} className="nby-book nby-book-1" />
          <BookSvg book={BOOKS[1]} className="nby-book nby-book-2" />
          <BookSvg book={BOOKS[2]} className="nby-book nby-book-3" />
          <div className="nby-plank" />
          <div className="nby-shadow" />
        </div>

        <div className="nby-badge">
          <span className="nby-dot" />
          your library
        </div>

        <p className="nby-title">No books yet</p>
        <p className="nby-sub">
          Start reading and add your first book — your shelf is waiting.
        </p>

      </div>
    </>
  );
}
