'use strict';

console.log('funguju');

const kosileBila = document.getElementById('bila');
const kosileCervena = document.getElementById('cervena');
const kosileCerna = document.getElementById('cerna');
const kosileModra = document.getElementById('modra');
const kosile = document.getElementById('product-image');
const objednat = document.getElementById('objednat');
const productColors = document.querySelector('.product__colors');

// kosileBila.addEventListener('click', console.log('bilá klik'));

kosileBila.addEventListener('click', function () {
  kosile.style = 'fill: #ffffff';
  console.log('mám bílou košili');
});
kosileCerna.addEventListener('click', function () {
  kosile.style = 'fill: #242222';
  console.log('mám černou košili');
});
kosileCervena.addEventListener('click', function () {
  kosile.style = 'fill: #a32424';
  console.log('mám červenou košili');
});
kosileModra.addEventListener('click', function () {
  kosile.style = 'fill: #087596';
  console.log('mám modrou košili');
});

objednat.addEventListener('click', function () {
  productColors.innerHTML = `<p>Objednáno</p>`;
});
