import React from 'react';

const ErrorPage = ({ code = 404, title = "Page not found", description = "The page you're looking for doesn't exist or has been moved. Check the URL or head back home." }) => {
  return (
    <div style={styles.page}>
      {/* Decorative graphic */}
      <div style={styles.graphic}>
        <div style={{ ...styles.circle, ...styles.c1 }} />
        <div style={{ ...styles.circle, ...styles.c2 }} />
        <div style={{ ...styles.circle, ...styles.c3 }} />
        <div style={styles.iconWrapper}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              stroke="#E24B4A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Status badge */}
      <div style={styles.badge}>
        <span style={styles.dot} />
        Something went wrong
      </div>

      {/* Error code */}
      <h1 style={styles.code}>{code}</h1>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.desc}>{description}</p>

      {/* Actions */}
      <div style={styles.actions}>
        <button style={styles.btnPrimary} onClick={() => window.location.href = '/'}>
          Go back home
        </button>
        <button style={styles.btnGhost} onClick={() => window.history.back()}>
          Go back
        </button>
      </div>

      {/* Footer links */}
      <div style={styles.divider} />
      <div style={styles.meta}>
        {['Support', 'Status', 'Documentation'].map(link => (
          <a key={link} href="#" style={styles.metaLink}>{link}</a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1.5rem',
    textAlign: 'center',
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: '#fff',
  },
  graphic: {
    position: 'relative',
    width: 120,
    height: 80,
    margin: '0 auto 2rem',
  },
  circle: {
    position: 'absolute',
    borderRadius: '50%',
  },
  c1: { width: 80, height: 80, background: '#f5f5f5', top: 0, left: 20 },
  c2: { width: 48, height: 48, background: '#FCEBEB', opacity: 0.6, top: 16, left: 0 },
  c3: { width: 32, height: 32, background: '#FCEBEB', opacity: 0.9, top: 24, right: 0 },
  iconWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    background: '#FCEBEB',
    color: '#A32D2D',
    fontSize: 12,
    fontWeight: 500,
    padding: '4px 12px',
    borderRadius: 999,
    marginBottom: '2rem',
    border: '0.5px solid #F09595',
    letterSpacing: '0.04em',
  },
  dot: {
    display: 'inline-block',
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#A32D2D',
  },
  code: {
    fontSize: 72,
    fontWeight: 500,
    color: '#111',
    lineHeight: 1,
    marginBottom: '0.75rem',
    letterSpacing: -3,
  },
  title: {
    fontSize: 22,
    fontWeight: 500,
    color: '#111',
    marginBottom: '0.75rem',
  },
  desc: {
    fontSize: 15,
    color: '#666',
    lineHeight: 1.7,
    maxWidth: 380,
    marginBottom: '2rem',
  },
  actions: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnPrimary: {
    background: '#111',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
  },
  btnGhost: {
    background: 'transparent',
    color: '#555',
    border: '0.5px solid #ccc',
    padding: '10px 20px',
    borderRadius: 8,
    fontSize: 14,
    cursor: 'pointer',
  },
  divider: {
    width: 40,
    height: 1,
    background: '#e5e5e5',
    margin: '2.5rem auto',
  },
  meta: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  metaLink: {
    fontSize: 13,
    color: '#999',
    textDecoration: 'none',
  },
};

export default ErrorPage;