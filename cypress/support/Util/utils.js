/// <reference types="cypress"/>

class Utils {
  gerarDataHojePadraoISO(d) {
    if (!d) {
      //quando chamar o método sem parâmetro
      cy.log("Iniciando processo de geração da data atual, sem parâmetros.");
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      return today.toISOString().substring(0, 10);
    } else {
      //quando chamar o método com parâmetro
      cy.log("Iniciando processo de geração da data atual, com parâmetros.");
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      const dataHoje = this.addDays(today, d);
      return dataHoje.toISOString().substring(0, 10);
    }
  }
  addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
  }
  gerarDataHoje() {
    cy.log("Geração da data de hoje na utils");
    const dataHoje = Date.now();
    const dataDeHoje = new Date(dataHoje);
    return dataDeHoje.toISOString().substring(0, 10);
  }
  gerarDataOntem() {
    cy.log("Geração da data de ontem na utils");
    const dataHoje = new Date();
    const dataOntem = new Date(dataHoje.setDate(dataHoje.getDate() - 1));
    return dataOntem.toISOString().substring(0, 10);
  }
  gerarData(d) {
    cy.log("Geração da data de hoje atual na utils, com parametrização");
    const um = 1;
    let data = new Date("April 1, 2023 08:00:00");
    let dia = data.getDate();
    let dia_sem = data.getDay();
    let mes = data.getMonth();
    let ano2 = data.getYear();
    let ano4 = data.getFullYear();
    let string_dataDeHoje = `${ano4}-0${+mes + um}-0${dia + d}`;
    return string_dataDeHoje;
  }
  gerarDiaVigente() {
    cy.log("Geração do dia vigente na utils");
    const um = 1;
    let data = new Date();
    let dia = data.getDate();
    let stringDiaVigente = dia;
    return stringDiaVigente;
  }
  gerarAnoVigente() {
    cy.log("Geração do ano vigente na utils");
    let data = new Date();
    let stringoAnoVigente = data.getFullYear();
    return stringoAnoVigente;
  }

  gerarMesVigente(m) {
    if (!m) {
      //quando chamar o método sem parâmetro
      cy.log("Geração do mês vigente sem parâmetro");
      const um = 1;
      let data = new Date();
      let mes = data.getMonth();
      let mesVigente = mes + um;
      return mesVigente;
    } else {
      //quando chamar o método com parâmetro
      cy.log("Geração do mês vigente com parâmetro");
      const um = 1;
      let data = new Date();
      //para compreensão deste comando, (chamo o mês vigente + o valor da variável), ajusto o indice da lista de data com o +1 e depois converto para string (.toString()) e preencho com zero se o campo for menos de 2 caracteres
      let mesVigente = ((data.getMonth() + m) + 1).toString().padStart(2, "0");
      return mesVigente;
    }
  }
  conversaoMes(mesAtual) {
    switch (mesAtual) {
      case 1:
        mesAtual = "Janeiro";
        break;
      case 2:
        mesAtual = "Fevereiro";
        break;
      case 3:
        mesAtual = "Março";
        break;
      case 4:
        mesAtual = "Abril";
        break;
      case 5:
        mesAtual = "Maio";
        break;
      case 6:
        mesAtual = "Junho";
        break;
      case 7:
        mesAtual = "Julho";
        break;
      case 8:
        mesAtual = "Agosto";
        break;
      case 9:
        mesAtual = "Setembro";
        break;
      case 10:
        mesAtual = "Outubro";
        break;
      case 11:
        mesAtual = "Novembro";
        break;
      case 12:
        mesAtual = "Dezembro";
        break;
      default:
        throw new Error(`Erro ao verificar o mês vigente`);
    }
    return mesAtual;
  }

  numeroRandomico(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

  }

}
export default new Utils();
