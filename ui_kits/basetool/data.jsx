const NEXT_MISSION = {
  id: 1, name: "Operation Tiefschlag", status: "PLANNED",
  description: "Quantanium-Lauf durch Pyro – Geleitschutz und Übergabe an die Raffinerie.",
  teamspeak: "29.05.2026, 18:45", serverJoin: "29.05.2026, 19:00",
  meetingPoint: "Ruin Station", lead: "Valk", registered: 12, checkedIn: 4,
};

const MISSIONS = [
  { id: 1, name: "Operation Tiefschlag", meet: "Ruin Station", status: "PLANNED", start: "Fr., 29.05., 19:00", rel: "in 3 Tagen", owner: "Valk", dept: "raumueberlegenheit", deptLabel: "Raumüberlegenheit", registered: 12 },
  { id: 2, name: "Aaron-Halo-Sweep", meet: "Port Tressler", status: "ACTIVE", start: "Do., 28.05., 20:30", rel: "läuft", owner: "Mara", dept: "profit", deptLabel: "Profit", registered: 6 },
  { id: 3, name: "Pyro-Aufklärung – Ghost Hollow", meet: "Checkmate", status: "PLANNED", start: "So., 31.05., 21:00", rel: "in 5 Tagen", owner: "Hex", dept: "sub-radar", deptLabel: "Sub-Radar", registered: 3 },
  { id: 4, name: "Daymar-Bergung", meet: "Port Olisar", status: "COMPLETED", start: "So., 24.05., 19:00", rel: "vor 2 Tagen", owner: "Dane", dept: "profit", deptLabel: "Profit", registered: 9 },
  { id: 5, name: "Raffinerie-Konvoi ARC-L1", meet: "ARC-L1", status: "COMPLETED", start: "Fr., 22.05., 18:00", rel: "vor 4 Tagen", owner: "Mara", dept: "search-rescue", deptLabel: "Search and Rescue", registered: 7 },
  { id: 6, name: "Checkmate-Übung", meet: "Checkmate", status: "CANCELLED", start: "Mi., 20.05., 20:00", rel: "vor 6 Tagen", owner: "Valk", dept: "marinekorps", deptLabel: "Marinekorps", registered: 0 },
];

const STATUS_LABEL = { PLANNED: "Geplant", ACTIVE: "Aktiv", COMPLETED: "Abgeschlossen", CANCELLED: "Abgesagt" };

const SHIPS = [
  { id: 1, name: "Schwarze Witwe", type: "Constellation Andromeda", maker: "RSI", owner: "Valk", insurance: "LTI", location: "Area18 – ArcCorp", fitted: true },
  { id: 2, name: "Erntemaschine", type: "MOLE", maker: "Argo", owner: "Mara", insurance: "6 Monate", location: "Lorville – Hurston", fitted: true },
  { id: 3, name: "Nadelöhr", type: "Vulture", maker: "Drake", owner: "Dane", insurance: "LTI", location: "GrimHEX – Yela", fitted: false },
  { id: 4, name: "Stiller Bote", type: "Hull C", maker: "MISC", owner: "Hex", insurance: "12 Monate", location: "Everus Harbor", fitted: false },
  { id: 5, name: "Eisenfaust", type: "Hammerhead", maker: "Aegis", owner: "Valk", insurance: "LTI", location: "Seraphim Station", fitted: true },
  { id: 6, name: "Spürhund", type: "Terrapin", maker: "Anvil", owner: "Hex", insurance: "24 Monate", location: "Area18 – ArcCorp", fitted: true },
];

const TERMINALS = [
  { name: "TDD Area18", planet: "ArcCorp" },
  { name: "Baijini Point", planet: "ArcCorp" },
  { name: "CRU-L1", planet: "Crusader" },
  { name: "Lorville TDD", planet: "Hurston" },
];

const MATERIALS = [
  { kind: "Metalle", rows: [
    { name: "Laranite", prices: [3090, 2980, 3010, 2760] },
    { name: "Agricium", prices: [2810, 2700, 2560, 2640] },
    { name: "Titan", prices: [null, 980, 920, 940] },
  ]},
  { kind: "Gase", rows: [
    { name: "Wasserstoff", prices: [120, 110, null, 118] },
    { name: "Chlor", prices: [1580, 1490, 1520, null] },
  ]},
  { kind: "Hochwertig", rows: [
    { name: "Quantanium", prices: [29400, null, 28800, 27200], volatile: true },
    { name: "Bexalite", prices: [42100, 41800, null, 40900] },
  ]},
];

const NAV_GROUPS = [
  { key: "einsatz", label: "Einsatz & Flotte", icon: "wedge", links: [
    { id: "missions", label: "Missionen" }, { id: "hangar", label: "Hangar" } ] },
  { key: "logistik", label: "Logistik", icon: "crate", links: [
    { id: "lager", label: "Lager" }, { id: "refinery", label: "Raffinerie" }, { id: "orders", label: "Aufträge" } ] },
  { key: "handel", label: "Handel", icon: "swap", links: [
    { id: "materials", label: "Material" }, { id: "market", label: "Materialbörse" }, { id: "supply", label: "Beschaffung" } ] },
  { key: "staffel", label: "Staffel", icon: "users", links: [
    { id: "unit", label: "Meine Einheit" } ] },
];

const NAV_ADMIN = [
  { key: "admin-members", label: "Mitglieder & Organisation", icon: "users", links: [
    { id: "members", label: "Mitgliederverwaltung" } ] },
  { key: "admin-data", label: "Stammdaten", icon: "database", links: [
    { id: "uex", label: "Datenimporte" } ] },
  { key: "admin-ops", label: "Betrieb", icon: "gear", links: [
    { id: "settings", label: "Systemeinstellungen" } ] },
];

const LAGER = [
  { material: "Laranite", total: 412, free: 92, entries: [
    { id: 1182, user: "Mara", location: "Area18 – TDD", quality: 740, amount: 240, order: 200, mission: 40 },
    { id: 1190, user: "Mara", location: "Baijini Point", quality: 610, amount: 80, order: 0, mission: 0 },
    { id: 1204, user: "Dane", location: "Lorville – TDD", quality: 830, amount: 92, order: 92, mission: 0 },
  ]},
  { material: "Agricium", total: 186, free: 90, entries: [
    { id: 1211, user: "Hex", location: "CRU-L1", quality: 655, amount: 186, order: 96, mission: 0 },
  ]},
];

Object.assign(window, { NEXT_MISSION, MISSIONS, STATUS_LABEL, SHIPS, TERMINALS, MATERIALS, NAV_GROUPS, NAV_ADMIN, LAGER });
