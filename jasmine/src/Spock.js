/**
 * Created with JetBrains PhpStorm.
 * User: bruno
 * Date: 5/28/12
 * Time: 4:26 PM
 * To change this template use File | Settings | File Templates.
 */

var Juego = function () {
    var partida, elecciones, inicio, fin;

    partida = {};
    partida['uno'] = '';
    partida['dos'] = '';
    elecciones = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];
    inicio = 0;
    fin = elecciones.length -1;

    this.GetPartida = function () {
        console.log(partida);
        return partida;
    };

    this.Iniciar = function () {
        var key;
        for (key in partida) {
            var numero = this.RandomValor();
            partida[key] = elecciones[numero];
        }
        return partida;
    };

    this.RandomValor = function () {
        var numero;
        numero = Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
        return numero;
    };

    this.Comprobar = function (partidas) {
        var uno, dos,
            iguales, distintos,
            papel, piedra, tijera, lagarto, spock;

        uno = partidas['uno'];
        dos = partidas['dos'];

        iguales = (uno === dos);
        distintos = (uno !== dos);

        papel = (uno === 'papel' || dos === 'papel');
        piedra = (uno === 'piedra' || dos === 'piedra');
        tijera = (uno === 'tijera' || dos === 'tijera');
        lagarto = (uno === 'lagarto' || dos === 'lagarto');
        spock = (uno === 'spock' || dos === 'spock');

        if (iguales) {
            return true;
        } else if (distintos) {
            if (papel && !(tijera || lagarto)) {
                if (piedra || spock) {
                    return true;
                }
            } else if (piedra && !(papel || spock)) {
                if (tijera || lagarto) {
                    return true;
                }
            } else if (tijera && !(piedra || spock)) {
                if (papel || lagarto) {
                    return true;
                }
            } else if (lagarto && !(piedra || tijera)) {
                if (papel || spock) {
                    return true;
                }
            } else if (spock && !(papel || lagarto)) {
                if (piedra || tijera) {
                    return true;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    this.Iniciar();
};