describe("Spock Game", function() {
    var juego, fake;

    fake = {
        empate: {uno: 'lagarto',dos: 'lagarto'},
        papelWinPiedra: [[{uno: 'papel',dos: 'piedra'}], [{uno: 'piedra',dos: 'papel'}]],
        papelWinSpock: [[{uno: 'papel',dos: 'spock'}], [{uno: 'spock',dos: 'papel'}]],
        piedraWinLagarto:[[{uno: 'piedra',dos: 'lagarto'}], [{uno: 'lagarto',dos: 'piedra'}]],
        piedraWinTijera: [[{uno: 'piedra',dos: 'tijera'}],  [{uno: 'tijera',dos: 'piedra'}]],
        tijeraWinPapel: [[{uno: 'tijera',dos: 'papel'}], [{uno: 'papel',dos: 'tijera'}]],
        tijeraWinLagarto:[[{uno: 'tijera',dos: 'lagarto'}], [{uno: 'lagarto',dos: 'tijera'}]],
        lagartoWinSpock: [[{uno: 'lagarto',dos: 'spock'}], [{uno: 'spock',dos: 'lagarto'}]],
        lagartoWinPapel: [[{uno: 'lagarto',dos: 'papel'}], [{uno: 'papel',dos: 'lagarto'}]],
        spockWinTijera: [[{uno: 'spock',dos: 'tijera'}], [{uno: 'tijera',dos: 'spock'}]],
        spockWinPiedra: [[{uno: 'spock',dos: 'piedra'}], [{uno: 'piedra',dos: 'spock'}]]
    };

    beforeEach(function() {
        juego = new Juego();
    });

    it("Deben seleccionarse valores por ramdon", function() {
        expect(juego.RandomValor()).toBeGreaterThan(-1);
        expect(juego.RandomValor()).toBeLessThan(5);
    });

    it("Deben existir solo 2 jugadores", function() {
        expect(juego.GetPartida().hasOwnProperty('uno')).toEqual(true);
        expect(juego.GetPartida().hasOwnProperty('dos')).toEqual(true);
        expect(juego.GetPartida().hasOwnProperty('tres')).toEqual(false);
    });

    it("Si las dos elecciones son las mismas es un empate", function() {
        expect(juego.Comprobar(fake.empate)).toEqual(true);
    });

    it("El papel cubre a la piedra", function() {
        expect(juego.Comprobar(fake.papelWinPiedra[0])).toEqual(true);
        expect(juego.Comprobar(fake.papelWinPiedra[1])).toEqual(true);
    });

    it("El papel refuta a Spock", function() {
        expect(juego.Comprobar(fake.papelWinSpock[0])).toEqual(true);
        expect(juego.Comprobar(fake.papelWinSpock[1])).toEqual(true);
    });

    it("La piedra aplasta al lagarto", function() {
        expect(juego.Comprobar(fake.piedraWinLagarto[0])).toEqual(true);
        expect(juego.Comprobar(fake.piedraWinLagarto[1])).toEqual(true);
    });

    it("La piedra aplasta las tijeras", function() {
        expect(juego.Comprobar(fake.piedraWinTijera[0])).toEqual(true);
        expect(juego.Comprobar(fake.piedraWinTijera[1])).toEqual(true);
    });

    it("Las tijeras cortan el papel", function() {
        expect(juego.Comprobar(fake.tijeraWinPapel[0])).toEqual(true);
        expect(juego.Comprobar(fake.tijeraWinPapel[1])).toEqual(true);
    });

    it("Las tijeras decapitan al lagarto", function() {
        expect(juego.Comprobar(fake.tijeraWinLagarto[0])).toEqual(true);
        expect(juego.Comprobar(fake.tijeraWinLagarto[1])).toEqual(true);
    });

    it("El lagarto envenena a Spock", function() {
        expect(juego.Comprobar(fake.lagartoWinSpock[0])).toEqual(true);
        expect(juego.Comprobar(fake.lagartoWinSpock[1])).toEqual(true);
    });

    it("El lagarto se come el papel", function() {
        expect(juego.Comprobar(fake.lagartoWinPapel[0])).toEqual(true);
        expect(juego.Comprobar(fake.lagartoWinPapel[1])).toEqual(true);
    });

    it("Spock destroza las tijeras", function() {
        expect(juego.Comprobar(fake.spockWinTijera[0])).toEqual(true);
        expect(juego.Comprobar(fake.spockWinTijera[1])).toEqual(true);
    });

    it("Spock vaporiza la piedra", function() {
        expect(juego.Comprobar(fake.spockWinPiedra[0])).toEqual(true);
        expect(juego.Comprobar(fake.spockWinPiedra[1])).toEqual(true);
    });
});
