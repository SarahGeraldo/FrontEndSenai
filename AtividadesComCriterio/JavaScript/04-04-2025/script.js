console.log("JAVASCRIPT CONECTADO");

class Funcionario {
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
  }

  calcularBonus() {
    return this.salario * 0.1;
  }

  exibirDetalhes() {
    console.log(
      `${this.nome} tem como salário R$${
        this.salario
      } e recebe de bônus R$${this.calcularBonus()} desde ${this.dataAdmissao}`
    );
  }
}

class Gerente extends Funcionario {
  #bonus;
  constructor(nome, salario, dataAdmissao, deperatamneto) {
    super(nome, salario, dataAdmissao);
    this.deperatamneto = deperatamneto;
  }

  calcularBonus() {
    return this.salario * 0.2;
  }

  mostrarGer() {
    console.log(
      `${this.nome} recebe de bônus R$${this.calcularBonus()} desde ${
        this.dataAdmissao
      } gerenciando o departamento de ${this.deperatamneto}`
    );
  }
}

const funcionario = new Funcionario("Marilia", 2000, "5/10/2009");
funcionario.exibirDetalhes();
const gerente = new Gerente("Rebeca", 7000, "23/1/2000", "Logística");
gerente.mostrarGer();
