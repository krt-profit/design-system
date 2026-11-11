const SPRITE_URL = "../../assets/krt-icons.svg";

const KRT_SPRITE = null;

function Icon({ name, size, className }) {
  const cls = "krt-icon" + (size === "lg" ? " krt-icon-lg" : size === "xl" ? " krt-icon-xl" : "") + (className ? " " + className : "");
  return <svg className={cls} aria-hidden="true"><use href={SPRITE_URL + "#krt-icon-" + name} /></svg>;
}

Object.assign(window, { KRT_SPRITE, Icon, SPRITE_URL });
