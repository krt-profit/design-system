const { useState: useS } = React;

const fmt = (n) => n == null ? null : n.toLocaleString("de-DE");

function LoginScreen({ onLogin }) {
  return (
    <div className="login-stage">
      <HudBox className="login-card">
        <div className="login-logo">
          <img src="../../assets/basetool-logo.svg" alt="" />
          <div className="name">Profit Basetool</div>
          <div className="sub">Zugang für Mitglieder</div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="field">
            <label htmlFor="kit-user">Benutzername</label>
            <input id="kit-user" type="text" defaultValue="valk" autoComplete="username" />
          </div>
          <div className="field">
            <label htmlFor="kit-pass">Passwort</label>
            <input id="kit-pass" type="password" defaultValue="••••••••" autoComplete="current-password" />
          </div>
          <Btn variant="btn--cta" type="submit">Anmelden</Btn>
        </form>
        <div className="login-foot">Anmeldung über Keycloak · nur für Mitglieder von DAS KARTELL.</div>
      </HudBox>
    </div>
  );
}

function Dashboard({ onOpenMission }) {
  const m = NEXT_MISSION;
  return (
    <React.Fragment>
      <div className="greeting">
        <h1>Willkommen, Commander Valk</h1>
        <p>Zentrale Plattform für Einsatzplanung, Hangar, Lager und Finanzen der Staffel.</p>
      </div>
      <div className="alert alert-warning">
        <Icon name="warning" /> &nbsp;UEX-Preisdaten zuletzt vor 3 Std. synchronisiert – Raffinerie-Margen können veraltet sein.
      </div>
      <div className="dash-grid">
        <Card title="Nächster Einsatz" actions={<StatusPill status={m.status} />}>
          <h3 className="dash-mission">{m.name}</h3>
          <p className="dash-sub">{m.description}</p>
          <div className="tile-grid">
            <div className="card card--inset tile"><div className="kpi-label">Teamspeak</div><div className="tile-val">{m.teamspeak}</div></div>
            <div className="card card--inset tile"><div className="kpi-label">Serverjoin</div><div className="tile-val">{m.serverJoin}</div></div>
            <div className="card card--inset tile"><div className="kpi-label">Treffpunkt</div><div className="tile-val">{m.meetingPoint}</div></div>
            <div className="card card--inset tile"><div className="kpi-label">Einsatzleiter</div><div className="tile-val">{m.lead}</div></div>
          </div>
          <div className="dash-foot">
            <span><strong>{m.registered}</strong> angemeldet · <span className="text-success"><strong>{m.checkedIn}</strong> eingecheckt</span></span>
            <span className="dash-actions">
              <Btn variant="btn-ghost" onClick={onOpenMission}>Details</Btn>
              <Btn variant="btn--cta" icon="user-plus">Anmelden</Btn>
            </span>
          </div>
        </Card>
        <Card title="Staffelstatus">
          <div className="tile-grid tile-grid--2">
            <div className="kpi-total kpi-total--inset"><div className="kpi-label">Aktive Piloten</div><div className="kpi-value">18</div></div>
            <div className="kpi-total kpi-total--inset"><div className="kpi-label">Schiffe</div><div className="kpi-value">42</div></div>
            <div className="kpi-total kpi-total--inset"><div className="kpi-label">Offene Aufträge</div><div className="kpi-value">7</div></div>
            <div className="kpi-total kpi-total--inset"><div className="kpi-label">Gewinn 30 T. (aUEC)</div><div className="kpi-value text-success">2,4 Mio.</div></div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
}

function MissionsScreen({ push, onOpen }) {
  const [q, setQ] = useS("");
  const [period, setPeriod] = useS("upcoming");
  let rows = MISSIONS.filter((m) => m.name.toLowerCase().includes(q.toLowerCase()));
  if (period === "upcoming") rows = rows.filter((m) => m.status === "PLANNED" || m.status === "ACTIVE");
  if (period === "past") rows = rows.filter((m) => m.status === "COMPLETED" || m.status === "CANCELLED");
  const seg = (id, label, n) => (
    <a className="krt-segmented__item" href="#" aria-current={period === id ? "page" : undefined}
       onClick={(e) => { e.preventDefault(); setPeriod(id); }}>{label} <span className="krt-segmented__count">{n}</span></a>
  );
  return (
    <React.Fragment>
      <PageHead eyebrow="Einsatz & Flotte" title="Missionen" count={MISSIONS.length}
                actions={<Btn variant="btn--cta" icon="plus" onClick={() => push("Neue Mission", "Formular geöffnet.")}>Neue Mission</Btn>} />
      <nav className="tab-nav" aria-label="Seiten-Tabs">
        <a href="#" className="tab active" aria-current="page" onClick={(e) => e.preventDefault()}>Missionen</a>
        <a href="#" className="tab" onClick={(e) => e.preventDefault()}>Operationen</a>
      </nav>
      <section className="list-panel kit-gap" aria-label="Missionen">
        <div className="list-panel__toolbar">
          <div className="list-panel__search">
            <Icon name="search" />
            <input type="search" placeholder="Missionsnamen eingeben …" aria-label="Mission suchen" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <nav className="krt-segmented" aria-label="Zeitraum">
            {seg("upcoming", "Kommend", 3)}{seg("past", "Vergangen", 3)}{seg("all", "Alle", 6)}
          </nav>
        </div>
        {rows.length === 0 ? (
          <div className="empty-state kit-empty"><span className="empty-title">Keine Missionen</span><span className="empty-text">Für diesen Filter gibt es keine Einträge.</span></div>
        ) : (
          <table className="data-table data-table--stack">
            <thead><tr>
              <th>Mission</th><th>Bereich</th><th className="cell-status">Status</th><th>Serverjoin</th><th className="num">Angemeldet</th><th className="cell-actions"><span className="visually-hidden">Öffnen</span></th>
            </tr></thead>
            <tbody>
              {rows.map((m) => (
                <tr key={m.id}>
                  <td><a className="row-link" href="#" onClick={(e) => { e.preventDefault(); onOpen(m.id); }}><span className="cell-title">{m.name}</span></a><span className="cell-sub">Treffpunkt: {m.meet}</span></td>
                  <td data-label="Bereich"><span className={"dept-tag dept-tag--" + m.dept}>{m.deptLabel}</span></td>
                  <td className="cell-status"><StatusPill status={m.status} /></td>
                  <td data-label="Start">{m.start}<span className="cell-sub">{m.rel}</span></td>
                  <td className="num" data-label="Angemeldet">{m.registered}</td>
                  <td className="cell-actions"><Icon name="chevron-right" className="row-chevron" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="list-panel__footer"><span>{rows.length} von {MISSIONS.length}</span></div>
      </section>
    </React.Fragment>
  );
}

function HangarScreen({ push }) {
  const [ships, setShips] = useS(SHIPS);
  const del = (id) => { setShips((p) => p.filter((s) => s.id !== id)); push("Gelöscht", "Schiff erfolgreich gelöscht."); };
  return (
    <React.Fragment>
      <PageHead eyebrow="Einsatz & Flotte" title="Hangar" count={ships.length}
                actions={<Btn variant="btn--cta" icon="plus" onClick={() => push("Schiff hinzufügen", "Formular geöffnet.")}>Schiff hinzufügen</Btn>} />
      <div className="card card--flush">
        <table className="data-table data-table--stack">
          <thead><tr><th>Schiff</th><th>Hersteller</th><th>Besitzer</th><th>Versicherung</th><th className="cell-status">Bereit</th><th className="cell-actions"><span className="visually-hidden">Aktionen</span></th></tr></thead>
          <tbody>
            {ships.map((s) => (
              <tr key={s.id}>
                <td><span className="cell-title">{s.name}</span><span className="cell-sub">{s.type} · {s.location}</span></td>
                <td data-label="Hersteller">{s.maker}</td>
                <td data-label="Besitzer">{s.owner}</td>
                <td data-label="Versicherung">{s.insurance === "LTI" ? <span className="chip chip--primary">LTI</span> : s.insurance}</td>
                <td className="cell-status"><span className={"status-pill " + (s.fitted ? "status-active" : "status-completed")}>{s.fitted ? "EINSATZBEREIT" : "UNAUSGERÜSTET"}</span></td>
                <td className="cell-actions">
                  <span className="row-action">
                    <Btn variant="btn-ghost" xs icon="edit" label={"Bearbeiten: " + s.name} onClick={() => push("Bearbeiten", s.name)} />
                    <Btn variant="btn-quiet-danger" xs icon="trash" label={"Löschen: " + s.name} onClick={() => del(s.id)} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

function LagerScreen({ push }) {
  const [storage, setStorage] = useS("all");
  return (
    <React.Fragment>
      <PageHead eyebrow="Logistik" title="Lager" count={LAGER.reduce((n, g) => n + g.entries.length, 0)}
                actions={<Btn variant="btn--cta" icon="plus" onClick={() => push("Einbuchen", "Formular geöffnet.")}>Einbuchen</Btn>} />
      <nav className="tab-nav" aria-label="Seiten-Tabs">
        <a href="#" className="tab active" aria-current="page" onClick={(e) => e.preventDefault()}>Lager</a>
        <a href="#" className="tab" onClick={(e) => e.preventDefault()}>Mindestbestände</a>
      </nav>
      <div className="kit-gap kit-row">
        <nav className="krt-segmented" aria-label="Lager">
          <a className="krt-segmented__item" href="#" aria-current={storage === "my" ? "page" : undefined} onClick={(e) => { e.preventDefault(); setStorage("my"); }}>Mein Lager</a>
          <a className="krt-segmented__item" href="#" aria-current={storage === "all" ? "page" : undefined} onClick={(e) => { e.preventDefault(); setStorage("all"); }}>Globales Lager</a>
        </nav>
      </div>
      <div className="hud-scroll scroll-x kit-gap">
        <div className="tree-table" style={{ "--tree-cols": "minmax(160px,1.3fr) minmax(170px,1.4fr) 120px 110px 150px" }}>
          <div className="tree-row tree-head">
            <div className="tree-cell">Bestand</div>
            <div className="tree-cell">Ort / Zuordnung</div>
            <div className="tree-cell tree-cell--num">Qualität</div>
            <div className="tree-cell tree-cell--num">Menge</div>
            <div className="tree-cell" style={{ textAlign: "right" }}>Aktion</div>
          </div>
          {LAGER.map((g) => (
            <React.Fragment key={g.material}>
              <div className="tree-row tree-row--group">
                <div className="tree-cell tree-name"><span className="tree-chevron is-open">▶</span><span className="tree-label">{g.material}</span></div>
                <div className="tree-cell"><span className="chip chip--muted">{g.free} SCU frei</span></div>
                <div className="tree-cell"></div>
                <div className="tree-cell tree-cell--num tree-amount">{fmt(g.total)} <span className="tree-unit">SCU</span></div>
                <div className="tree-cell"></div>
              </div>
              {g.entries.map((e) => (
                <div className="tree-row tree-row--mid" key={e.id}>
                  <div className="tree-cell tree-name"><span className="tree-label">#{e.id} · {e.user}</span></div>
                  <div className="tree-cell" style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", alignItems: "center" }}>
                    <span>{e.location}</span>
                    {e.order ? <span className="chip chip--primary">Auftrag {e.order}</span> : null}
                    {e.mission ? <span className="chip chip--info">Einsatz {e.mission}</span> : null}
                  </div>
                  <div className="tree-cell tree-cell--num"><span className="tree-gauge"><span className="tree-gauge-val">{e.quality}</span><span className="tree-gauge-track"><span style={{ width: (e.quality / 10) + "%" }}></span></span></span></div>
                  <div className="tree-cell tree-cell--num tree-amount">{fmt(e.amount)} <span className="tree-unit">SCU</span></div>
                  <div className="tree-cell tree-cell--actions">
                    <Btn variant="btn-ghost" xs icon="bookout" label={"Ausbuchen: #" + e.id} onClick={() => push("Ausbuchen", "Eintrag #" + e.id)} />
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

function MaterialsScreen() {
  const [collapsed, setCollapsed] = useS({});
  const toggle = (k) => setCollapsed((p) => ({ ...p, [k]: !p[k] }));
  return (
    <React.Fragment>
      <PageHead eyebrow="Handel" title="Material" />
      <nav className="tab-nav" aria-label="Seiten-Tabs">
        <a href="#" className="tab" onClick={(e) => e.preventDefault()}>Liste</a>
        <a href="#" className="tab active" aria-current="page" onClick={(e) => e.preventDefault()}>Übersicht</a>
        <a href="#" className="tab" onClick={(e) => e.preventDefault()}>Profitberechnung</a>
      </nav>
      <Card title="Preisübersicht" className="kit-gap">
        <p className="kit-hint">Verkaufspreise in <span className="price-sell">Grün (+)</span>, Einkaufspreise in <span className="price-buy">Rot (−)</span>, je Terminal. Kategorie anklicken zum Einklappen.</p>
        <div className="hud-scroll scroll-x">
          <table className="matrix-table">
            <thead>
              <tr><th>Ware</th>{TERMINALS.map((t) => <th key={t.name} className="num" title={t.planet}>{t.name}</th>)}</tr>
            </thead>
            <tbody>
              {MATERIALS.map((grp) => (
                <React.Fragment key={grp.kind}>
                  <tr className="kind-row" onClick={() => toggle(grp.kind)}>
                    <td colSpan={TERMINALS.length + 1}>{collapsed[grp.kind] ? "+" : "−"} &nbsp;{grp.kind}</td>
                  </tr>
                  {!collapsed[grp.kind] && grp.rows.map((r) => (
                    <tr key={r.name}>
                      <td>{r.volatile ? <span className="text-warning" title="Volatil" style={{ marginRight: 6 }}>⚠</span> : null}{r.name}</td>
                      {r.prices.map((p, i) => (
                        <td key={i} className="num">{p == null ? <span className="text-muted">–</span> : <span className="price-sell">+{fmt(p)}</span>}</td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </React.Fragment>
  );
}

function MembersScreen() {
  const members = [
    { name: "Valk", roles: "Admin · Leitung", sk: null, status: "Aktiv" },
    { name: "Mara", roles: "Logistikerin", sk: "AGN", status: "Aktiv" },
    { name: "Hex", roles: "Einsatzmanager", sk: "AGN", status: "Aktiv" },
    { name: "Dane", roles: "Mitglied", sk: null, status: "Ausstehend" },
  ];
  return (
    <React.Fragment>
      <PageHead eyebrow="Mitglieder & Organisation" title="Mitgliederverwaltung" count={members.length} />
      <div className="card card--flush">
        <table className="data-table data-table--stack">
          <thead><tr><th>Mitglied</th><th>Rollen</th><th>SK</th><th className="cell-status">Status</th><th className="cell-actions"><span className="visually-hidden">Aktionen</span></th></tr></thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.name}>
                <td><span className="cell-title">{m.name}</span></td>
                <td data-label="Rollen">{m.roles}</td>
                <td data-label="SK">{m.sk ? <Badge variant="sk">{m.sk}</Badge> : <span className="text-muted">—</span>}</td>
                <td className="cell-status"><span className={"status-pill " + (m.status === "Aktiv" ? "status-active" : "status-planned")}>{m.status.toUpperCase()}</span></td>
                <td className="cell-actions"><Btn variant="btn-ghost" xs icon="edit" label={"Bearbeiten: " + m.name} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

function PlaceholderScreen({ eyebrow, title, note }) {
  return (
    <React.Fragment>
      <PageHead eyebrow={eyebrow} title={title} />
      <div className="empty-state">
        <span className="empty-title">Nicht nachgebaut</span>
        <span className="empty-text">{note}</span>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, {
  LoginScreen, Dashboard, MissionsScreen, HangarScreen, LagerScreen, MaterialsScreen,
  MembersScreen, PlaceholderScreen,
});
