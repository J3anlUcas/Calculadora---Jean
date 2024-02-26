class Calculadora {
    // atributo / dado (privado)
    #memoria;

    // método / operação de construção do objeto Calculadora
    constructor() {
        this.#memoria = 0;
    }

    // métodos / operações (públicos)
    memoria() {
        console.log("Memoria: ", this.#memoria);
    }

    zerar() {
        console.log("Zerar", this.#memoria = 0);
    }

    somar(valor) {
        console.log("Somar: ", this.#memoria, "+", valor, "=", this.#memoria += valor);
    }

    subtrair(valor) {
        console.log("Subtrair: ", this.#memoria, "+", valor, "=", this.#memoria -= valor);
    }

    multiplicar(valor) {
        console.log("Multiplicar: ", this.#memoria, "+", valor, "=", this.#memoria *= valor);
    }

    dividir(valor) {
        if (valor <= 0) {
            console.error("Divisão ilegal por zero");
            return;
        }
        console.log("Dividir: ", this.#memoria, "+", valor, "=", this.#memoria /= valor);
    }
}

module.exports = Calculadora; // exporta a classe Calculadora