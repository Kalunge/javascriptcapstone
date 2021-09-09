const addAlert = (field, message) => {
  const body = document.querySelector('form');
  const section = document.createElement('div');
  section.innerHTML = `<div class="alert alert-${message}" role="alert">
  ${field} is required
</div>`;
  body.appendChild(section);
  setTimeout(() => body.removeChild(section), 1500);
};

export default addAlert;
