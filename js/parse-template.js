export default function (string) {
  const template = document.createElement(`div`);
  template.innerHTML = string;
  return template.firstChild;
}
