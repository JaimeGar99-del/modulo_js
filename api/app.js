fetch('https://rickandmortyapi.com/api/episode')
  .then(response => response.json()) // Convierte la respuesta a JSON
  .then(data => {
    console.log(data.results);
  })
  .catch(error => console.error('Error:', error));


async function cargarCartas() {
    const contenedor = document.getElementById("R&M-grid");
    
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        const personajes = data.results;

        contenedor.innerHTML = ""; 
        personajes.forEach((personaje) => {
            contenedor.innerHTML += `
                <div class="card">
                    <img src="${personaje.image}" alt="${personaje.name}">
                    <div class="card-body">
                        <h3 class="card-title">${personaje.name}</h3>
                        <p>Especie: ${personaje.species}</p>
                        <button class="btn-ver-mas" onclick="mostrarInfo(this)">Ver más</button>
                        <div class="info-extra">
                            <p><span>Gender:</span> ${personaje.gender}</p>
                            <p><span>Status:</span> ${personaje.status}</p>
                            <p><span>Origin:</span> ${personaje.origin.name}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error cargando personajes:", error);
        contenedor.innerHTML = "<p>Error al cargar los personajes.</p>";
    }
}

function mostrarInfo(boton) {
    let info = boton.nextElementSibling;
    info.classList.toggle("show");
    
    if (info.classList.contains("show")) {
        boton.innerText = "Ver menos";
        boton.style.backgroundColor = "#555";
    } else {
        boton.innerText = "Ver más";
        boton.style.backgroundColor = "#e63946";
    }
}

cargarCartas();