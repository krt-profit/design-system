const { useState, useCallback } = React;

const LOGO = "../../assets/basetool-logo.svg";

function HudBox({ children, className, style }) {
  return <div className={"hud-box" + (className ? " " + className : "")} style={style}>{children}</div>;
}

function Card({ title, actions, inset, flush, children, className }) {
  const cls = "card" + (inset ? " card--inset" : "") + (flush ? " card--flush" : "") + (className ? " " + className : "");
  return (
    <section className={cls}>
      {title ? (
        <div className="card-head">
          <h2 className="card-title">{title}</h2>
          {actions || null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

function Btn({ variant, children, onClick, type, disabled, icon, xs, label }) {
  const cls = "btn" + (variant ? " " + variant : "") + (xs ? " btn-xs" : "") + (label && !children ? " btn-icon" : "");
  return (
    <button className={cls} onClick={onClick} type={type || "button"} disabled={disabled}
            aria-label={label} title={label}>
      {icon ? <Icon name={icon} /> : null}{children}
    </button>
  );
}

function Badge({ variant, children }) {
  return <span className={"squadron-badge" + (variant ? " squadron-badge-" + variant : "")}>{children}</span>;
}

function StatusPill({ status }) {
  const map = { PLANNED: "status-planned", ACTIVE: "status-active", COMPLETED: "status-completed", CANCELLED: "status-cancelled" };
  return <span className={"status-pill " + (map[status] || "status-completed")}>{(STATUS_LABEL[status] || status).toUpperCase()}</span>;
}

function PageHead({ eyebrow, back, title, count, actions }) {
  return (
    <div className="page-head">
      <div className="page-head__main">
        {back ? (
          <a className="page-eyebrow" href="#" onClick={(e) => { e.preventDefault(); back.onClick(); }}>
            <Icon name="arrow-left" /><span>{back.label}</span>
          </a>
        ) : eyebrow ? <span className="page-eyebrow">{eyebrow}</span> : null}
        <div className="page-title">
          <h1>{title}</h1>
          {count != null ? <span className="count-badge count-badge--sm">{count}</span> : null}
        </div>
      </div>
      {actions ? <div className="page-actions">{actions}</div> : null}
    </div>
  );
}

function Header({ onHamburger, onHome, unread }) {
  const slot = document.getElementById("kit-header");
  return ReactDOM.createPortal(
      <nav>
        <button className="hamburger-btn" type="button" aria-label="Menü" aria-controls="sidebar" onClick={onHamburger}>
          <span></span><span></span><span></span>
        </button>
        <a href="#" className="brand" onClick={(e) => { e.preventDefault(); onHome(); }}>
          <img src={LOGO} alt="" height="50" />
          <span className="logo-text">Profit Basetool</span>
        </a>
        <span className="header-spacer"></span>
        <span className="admin-mode-chip">ADMIN</span>
        <button type="button" className="palette-trigger" aria-haspopup="dialog">
          <Icon name="search" />
          <span className="palette-trigger-text">Seite oder Aktion suchen …</span>
          <span className="nav-kbd" aria-hidden="true">STRG K</span>
        </button>
        <button type="button" className="header-search-btn" aria-label="Suchen"><Icon name="search" /></button>
        <div className="notification-bell">
          <button type="button" className="notification-bell-btn" aria-label={"Benachrichtigungen, " + unread + " ungelesen"}>
            <Icon name="bell" />
            {unread > 0 ? <span className="notification-badge" aria-hidden="true">{unread}</span> : null}
          </button>
        </div>
      </nav>,
    slot
  );
}

function NavGroup({ group, current, onNavigate }) {
  const active = group.links.some((l) => l.id === current);
  const [open, setOpen] = useState(true);
  return (
    <section className={"nav-group" + (active ? " is-active" : "")}>
      <button type="button" className="nav-group-head" aria-expanded={open || active} onClick={() => setOpen((o) => !o)}>
        <Icon name={group.icon} className="nav-group-icon" />
        <span className="nav-group-label">{group.label}</span>
        <span className="nav-group-count">{group.links.length}</span>
        <Icon name="chevron-right" className="nav-group-chevron" />
      </button>
      {open || active ? (
        <div className="nav-group-links">
          {group.links.map((l) => (
            <div className="nav-row" key={l.id}>
              <a href="#" className={"nav-link" + (l.id === current ? " is-active" : "")}
                 aria-current={l.id === current ? "page" : undefined}
                 onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}>{l.label}</a>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function Sidebar({ open, onClose, current, onNavigate, admin, onToggleAdmin, onLogout }) {
  const go = (id) => { onNavigate(id); onClose(); };
  const groups = admin ? NAV_ADMIN : NAV_GROUPS;
  return (
    <React.Fragment>
      <div id="sidebar" className={"sidebar" + (open ? " open" : "") + (admin ? " is-admin-mode" : "")}
           role="navigation" aria-label="Navigation" inert={open ? undefined : ""}>
        <div className="nav-grip" aria-hidden="true"></div>
        <div className="nav-head">
          <img src={LOGO} alt="" width="30" height="30" />
          <span className="nav-head-title">Profit Basetool</span>
          <button className="close-sidebar-btn" type="button" aria-label="Schließen" onClick={onClose}><Icon name="close" /></button>
        </div>
        <div className="nav-context">
          <form className="squadron-switcher" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="kit-ou" className="squadron-switcher-label">Aktive Org-Einheit</label>
            <select id="kit-ou" className="squadron-switcher-select" defaultValue="alp">
              <option value="">Alle meine Einheiten</option>
              <option value="alp">ALP — ALPHA</option>
              <option value="agn">AGN — Spezialkommando Argon</option>
            </select>
          </form>
          <div className="nav-filter">
            <Icon name="filter" />
            <input type="search" className="nav-filter-input" placeholder="Menü filtern …" aria-label="Menü filtern" />
          </div>
        </div>
        <div className="nav-list">
          {admin ? (
            <div className="nav-admin-bar">
              <button type="button" className="nav-admin-back" onClick={onToggleAdmin}><Icon name="arrow-left" /><span>Hauptmenü</span></button>
              <span className="admin-mode-chip">ADMIN</span>
            </div>
          ) : null}
          {groups.map((g) => <NavGroup key={g.key} group={g} current={current} onNavigate={go} />)}
        </div>
        <div className="nav-foot">
          {!admin ? (
            <button type="button" className="nav-admin-entry" onClick={onToggleAdmin}>
              <Icon name="gear" className="nav-admin-entry-icon" />
              <span className="nav-admin-entry-label">Administration</span>
              <Icon name="chevron-right" className="nav-admin-entry-chevron" />
            </button>
          ) : null}
          <div className="nav-user-row">
            <button type="button" className="nav-user-toggle" aria-expanded="false">
              <span className="nav-user-avatar" aria-hidden="true"><Icon name="user" /></span>
              <span className="nav-user-text"><span className="nav-user-name">valk</span><span className="nav-user-meta">ALPHA · Logistiker</span></span>
              <Icon name="chevron-up" className="nav-user-chevron" />
            </button>
            <div className="nav-lang"><button type="button" className="nav-lang-btn" aria-label="Sprache"><span>DE</span></button></div>
            <button type="button" className="nav-logout-btn" aria-label="Abmelden" title="Abmelden" onClick={onLogout}><Icon name="logout" /></button>
          </div>
        </div>
      </div>
      <div className={"sidebar-overlay" + (open ? " visible" : "")} onClick={onClose}></div>
    </React.Fragment>
  );
}

function Footer() {
  return (
    <footer className="krt-footer">
      <div className="krt-footer-links">
        <a href="#" onClick={(e) => e.preventDefault()}>Impressum</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Datenschutz</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Nutzungsbedingungen</a>
      </div>
      <div className="krt-footer-meta">
        <a href="#" onClick={(e) => e.preventDefault()}>Handbuch</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Star-Citizen-Links</a>
        <span className="krt-footer-version">v1.23.4</span>
      </div>
    </footer>
  );
}

function Toast({ t }) {
  return (
    <div className={"notification-toast toast-enter" + (t.error ? " error-toast" : "")}>
      <h4>{t.title}</h4>
      <p>{t.body}</p>
    </div>
  );
}

function ToastViewport({ toasts }) {
  return <div className="toast-vp">{toasts.map((t) => <Toast key={t.id} t={t} />)}</div>;
}

function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((title, body, error) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((p) => [...p, { id, title, body, error }]);
    setTimeout(() => setToasts((p) => p.filter((x) => x.id !== id)), 3200);
  }, []);
  return { toasts, push };
}

Object.assign(window, {
  HudBox, Card, Btn, Badge, StatusPill, PageHead, Header, Sidebar, Footer,
  Toast, ToastViewport, useToasts,
});
