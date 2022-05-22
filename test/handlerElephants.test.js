const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Ao não receber nenhum parâmetro a funções retorna um valor "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Ao receber um parâmetro diferente de uma string é retornada a frase "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Ao receber um dos parâmetros deve ser retornado o parâmetro referente ao elefante', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('Ao receber "count" é retornada a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Ao receber "names" é retornada um array com o npmde dos elefantes', () => {
    const array = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(array);
  });
  it('Ao receber "averageAge" é retornada a média da idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 5);
  });
});
