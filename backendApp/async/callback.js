function async(name, fn) {
  setTimeout(() => {
    console.log('Hola, ' + name);
    fn();
  }, 5000)
}

console.log('Iniciando proceso');

async('mauricio', () => {
  console.log('Como te encuentras');
  setTimeout(() => {
    console.log('Terminando proceso');
  }, 2000);
});