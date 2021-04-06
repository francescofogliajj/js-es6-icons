// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.

$(document).ready(function() {

  const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "car",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];

  const colors = [
    "green",
    "red",
    "blue"
  ];

  const container = $(".icons");

  const types = getTypes(icons);

  const coloredIcons = addColors(icons, colors, types);

  print(coloredIcons, container);

  const selectedField = $("#type");

  printOptions(selectedField, types);

  selectedField.change( {whereToWrite: container}, function() {
      const selectedType = $(this).val();

      if (selectedType == "") {
        print(coloredIcons, container);
      } else {
        const filteredIcons = coloredIcons.filter((element) => {
          return element.type == selectedType;
        });
        print(filteredIcons, container);
      };

    } );

});


// Funzioni---------------------------------------------------------------------
function print(array, container) {

  container.html('');

  array.forEach((element, index) => {

    const {name, prefix, family, color} = element;

    container.append(`
      <div>
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div class="title">${name.toUpperCase()}</div>
      </div>
    `);

  });

};

function getTypes(array) {
  const types = [];

  array.forEach((element) => {

    if (types.includes(element.type) == false) {
      types.push(element.type);
    }

  });

  return types;
};

function addColors(iconsArray, colorsArray, typesArray) {

  const newArray = iconsArray.map((element) => {

    const typeIndex = typesArray.indexOf(element.type);

    const color = colorsArray[typeIndex];

    const newElement = {
      ...element,
      color
    };

    return newElement;

  });

  return newArray;

};

function printOptions(select, types) {

  types.forEach((element) => {

    select.append(`
      <option value="${element}">${element}</option>
    `);

  });

};
