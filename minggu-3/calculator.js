
/* function tambah(nilai1, nilai2) {
    return nilai1 + nilai2;
} */
// const tambah = (nilai, nilai2) => nilai + nilai2;
const tambah = (nilai, nilai2) => {
    return nilai + nilai2;
}

/* function luasLingkaran(jari) {
    return 3.14 * jari * jari;
} */
// const luasLingkaran = jari => 3.14 * jari * jari;
const luasLingkaran = jari => {
    return 3.14 * jari * jari;
}

function konversiCtoF(celcius) {
    return (celcius * 9/5) + 32
}
// const konversiCtoF = celcius => (celcius * 9/5) + 32;

module.exports = {tambah, luasLingkaran, konversiCtoF};