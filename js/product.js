function getPersonaFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function loadPersona() {
  const id = getPersonaFromURL();
  const persona = personas.find(p => p.id === id);

  if (!persona) {
    document.querySelector(".product-page").innerHTML = "<p>Persona not found.</p</br><p>Return back to Home</p>";
    return;
  }

  document.getElementById("persona-image").src = persona.image;
  document.getElementById("persona-image").alt = persona.name;
  document.getElementById("persona-name").textContent = persona.name;
  document.getElementById("persona-arcana").textContent = `Arcana: ${persona.arcana}`;
  document.getElementById("persona-price").textContent = `Buy now for ${persona.price}`;
  document.getElementById("persona-description").textContent = persona.description;
  document.getElementById("persona-title").textContent = `The Velvet Room - ${persona.name}`

  const statsList = document.getElementById("persona-stats");
  statsList.innerHTML = "";
  for (const [stat, value] of Object.entries(persona.stats)) {
    const li = document.createElement("li");
    li.textContent = `${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${value}`;
    statsList.appendChild(li);
  }
}

loadPersona();