const selectElement = document.querySelector('#pagina');

selectElement.addEventListener('change', () => {
  const selectedPage = selectElement.value;
  if (selectedPage) {
    retornarValores(selectedPage, (data) => {
      const contenido = document.querySelector(".contenedor-principal");
      contenido.innerHTML = '';
      data.results.forEach((personaje) => {
        const article = document.createRange().createContextualFragment(`
            <div class="card">
                <img src="${personaje.image}" alt="Imagen Personaje" />
                <div class="contenido-card">
                    <h2 class="">${personaje.name}</h2>
                    <p class="letras">${personaje.status} - ${personaje.species}</p>
                    <br>
                    <p class="letra">Last Known location:</p>
                    <p class="title">${personaje.location.name}</p>
                    <br>
                    <p class="letra">First seen in:</p>
                    <p class="title">${personaje.origin.name}</p>
                </div>
            </div>
        `);
        contenido.appendChild(article);
      });
    });
  }
});

function retornarValores(page, done) {
  const results = fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

  results
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  retornarValores(1, (data) => {
    const contenido = document.querySelector(".contenedor-principal");
    data.results.forEach((personaje) => {
      const article = document.createRange().createContextualFragment(`
            <div class="card">
                <img src="${personaje.image}" alt="Imagen Personaje" />
                <div class="contenido-card">
                    <h2 class="">${personaje.name}</h2>
                    <p class="letras">${personaje.status} - ${personaje.species}</p>
                    <br>
                    <p class="letra">Last Known location:</p>
                    <p class="title">${personaje.location.name}</p>
                    <br>
                    <p class="letra">Orginin in:</p>
                    <p class="title">${personaje.origin.name}</p>
                </div>
            </div>
        `);
      contenido.appendChild(article);
    });
    selectElement.value = 1;
  });
});