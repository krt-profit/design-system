const { useState: useMD } = React;

function Panel({ title, count, defaultOpen, children }) {
  const [open, setOpen] = useMD(defaultOpen !== false);
  return (
    <div className={"mcol" + (open ? "" : " collapsed")}>
      <button type="button" className="panel-header" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <h2>{title}{count != null ? <span className="panel-count">{count}</span> : null}</h2>
        <span className="toggle-icon" aria-hidden="true"></span>
      </button>
      <div className="col-body">{children}</div>
    </div>
  );
}

function MissionDetailScreen({ push, onBack }) {
  const [parts, setParts] = useMD([
    { id: 1, user: "valk", org: "ALP", job: "Pilot", state: "in" },
    { id: 2, user: "mara.k", org: "ALP", job: "Bordschütze", state: "out" },
    { id: 3, user: "hex_07", org: null, job: "Sanitäter", state: "pre" },
  ]);
  const checkIn = (id) => { setParts((p) => p.map((x) => x.id === id ? { ...x, state: "in" } : x)); push("Check-In", "Teilnehmer eingecheckt."); };
  const del = (id) => { setParts((p) => p.filter((x) => x.id !== id)); push("Entfernt", "Teilnehmer entfernt."); };

  return (
    <React.Fragment>
      <PageHead back={{ label: "Missionen", onClick: onBack }} title="Operation Tiefschlag"
                actions={<Btn variant="btn--cta" icon="user-plus" onClick={() => push("Anmeldung", "Du bist angemeldet.")}>Anmelden</Btn>} />
      <div className="facts-bar">
        <span><span className="fact-k">Status</span><StatusPill status="PLANNED" /></span>
        <span><span className="fact-k">Serverjoin</span><span className="fact-v">29.05. · 19:00</span></span>
        <span><span className="fact-k">Angemeldet</span><span className="fact-v">{parts.length}</span></span>
        <span><span className="fact-k">Eingecheckt</span><span className="fact-v">{parts.filter((p) => p.state === "in").length}</span></span>
      </div>

      <div className="mission-cols">
        <Panel title="Details">
          <Card>
            <div className="form-group">
              <label htmlFor="md-name">Name</label>
              <input id="md-name" type="text" defaultValue="Operation Tiefschlag" />
            </div>
            <div className="form-group">
              <label htmlFor="md-desc">Beschreibung</label>
              <textarea id="md-desc" rows="2" defaultValue="Quantanium-Lauf durch Pyro – Geleitschutz und Übergabe an die Raffinerie."></textarea>
            </div>
            <div className="kit-row">
              <div className="form-group kit-grow">
                <label htmlFor="md-status">Status</label>
                <select id="md-status" defaultValue="PLANNED"><option value="PLANNED">Geplant</option><option value="ACTIVE">Aktiv</option><option value="COMPLETED">Abgeschlossen</option></select>
              </div>
              <div className="form-group kit-grow">
                <label htmlFor="md-start">Geplanter Start</label>
                <input id="md-start" type="text" defaultValue="29.05.2026  19:00" />
              </div>
            </div>
            <div className="detail-actions">
              <Btn variant="btn-quiet-danger" icon="trash" onClick={() => push("Bestätigung", "Wirklich löschen?", true)}>Löschen</Btn>
              <span className="kit-grow"></span>
              <Btn variant="btn-ghost" onClick={onBack}>Abbrechen</Btn>
              <Btn variant="btn--cta" icon="save" onClick={() => push("Gespeichert", "Mission gespeichert.")}>Speichern</Btn>
            </div>
          </Card>
        </Panel>

        <Panel title="Organisation">
          <Card>
            <div className="kv-row"><span className="kv-key">Einsatzleiter</span><span className="data-value">valk</span></div>
            <div className="kv-row"><span className="kv-key">Flottenfunk</span><span className="kv-right"><span className="data-value data-value--mono">123.450</span><Btn variant="btn-ghost" xs icon="edit" label="Flottenfunk bearbeiten" onClick={() => push("Frequenz", "Bearbeiten …")} /></span></div>
            <div className="kv-row"><span className="kv-key">Bodenfunk</span><span className="kv-right"><span className="data-value data-value--mono">88.200</span><Btn variant="btn-ghost" xs icon="edit" label="Bodenfunk bearbeiten" onClick={() => push("Frequenz", "Bearbeiten …")} /></span></div>
          </Card>
        </Panel>

        <Panel title="Teilnehmer" count={parts.length}>
          <div className="card card--flush">
            <table className="data-table data-table--compact data-table--stack">
              <thead><tr><th>Teilnehmer</th><th>Aufgabe</th><th className="cell-status">Status</th><th className="cell-actions"><span className="visually-hidden">Aktionen</span></th></tr></thead>
              <tbody>
                {parts.map((p) => (
                  <tr key={p.id}>
                    <td><span className="cell-title">{p.user}</span>{p.org ? <span className="cell-sub">{p.org}</span> : null}</td>
                    <td data-label="Aufgabe">{p.job}</td>
                    <td className="cell-status"><span className={"status-pill " + (p.state === "in" ? "status-active" : p.state === "pre" ? "status-planned" : "status-completed")}>{p.state === "in" ? "EINGECHECKT" : p.state === "pre" ? "ANGEMELDET" : "AUSGECHECKT"}</span></td>
                    <td className="cell-actions"><span className="row-action">
                      {p.state === "pre" ? <Btn variant="btn-success" xs icon="login" label={"Check-In: " + p.user} onClick={() => checkIn(p.id)} /> : null}
                      {p.state === "in" ? <Btn variant="btn-ghost" xs icon="logout" label={"Check-Out: " + p.user} onClick={() => push("Check-Out", "Ausgecheckt.")} /> : null}
                      <Btn variant="btn-quiet-danger" xs icon="trash" label={"Entfernen: " + p.user} onClick={() => del(p.id)} />
                    </span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Einheiten">
          <Card>
            <div className="panel-toolbar">
              <Btn variant="btn-outline" icon="plus" onClick={() => push("Einheit", "Einheit hinzufügen …")}>Einheit hinzufügen</Btn>
            </div>
            <div className="unit-list">
              {[{ n: "Schwarze Witwe", t: "Constellation Andromeda" }, { n: "Eisenfaust", t: "Hammerhead" }].map((u) => (
                <div className="card card--inset unit-box" key={u.n}>
                  <div className="unit-head">
                    <span><span className="unit-name">{u.n}</span><span className="text-muted"> — {u.t}</span></span>
                    <div className="detail-actions">
                      <Btn variant="btn-outline" xs onClick={() => push("Crew", "Crew zuweisen …")}>Crew zuweisen</Btn>
                      <Btn variant="btn-ghost" xs icon="edit" label={"Bearbeiten: " + u.n} onClick={() => push("Bearbeiten", u.n)} />
                      <Btn variant="btn-quiet-danger" xs icon="trash" label={"Löschen: " + u.n} onClick={() => push("Einheit", "Einheit gelöscht.")} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Panel>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { MissionDetailScreen });
