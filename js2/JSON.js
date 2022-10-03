let hallgato = {
    nev: {
        titulus: "ifj.",
        vezetekNev: "Nagy",
        keresztNev: "Istvan"
    },
    neptun: "a1b2c3",
    szuletett: new Date(2000, 5, 23),
    aktiv: true,
    lezartFelevek: ["2021/22/1", "2021/22/2"]
}

let szoveg = JSON.stringify(hallgato);
console.log(szoveg)
console.log(JSON.parse(szoveg))