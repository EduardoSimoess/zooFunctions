const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Ao não inserir dado algum a função retorna todos os horários de cada dia da semana', () => {
    const hours = { Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 } };
    expect(getOpeningHours()).toEqual(hours);
  });

  it('Ao escrever na primeira string um dia inválido é retornado um erro', () => {
    expect(() => getOpeningHours('segunda-feira', '05:00-PM')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('Ao escrever um horário que contenha horas menores que 0 ou maior que 12 é retornado um erro', () => {
    expect(() => getOpeningHours('Tuesday', '13:00-PM')).toThrow(/^The hour must be between 0 and 12$/);
  });
  it('Ao escrever um horário que contenha minutos maiores que 59 ou menores que 0 é retornado um erro', () => {
    expect(() => getOpeningHours('Tuesday', '11:61-PM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
  it('Ao inserir um horário no qual o zoologico ertá fechado é esperada a string "The zoo is closed" como retorno', () => {
    expect(getOpeningHours('Tuesday', '07:00-PM')).toBe('The zoo is closed');
  });
  it('Ao escrever o identificador PM ou AM incorretamente um erro deve ser retornado', () => {
    expect(() => getOpeningHours('Tuesday', '11:59-PN')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('Ao escrever o escrever algum caractere que não corresponde a umm número a função deve retornar um erro', () => {
    const what = 'hour';
    expect(() => getOpeningHours('Tuesday', '1P:59-PN')).toThrow(`The ${what} should represent a number`);
  });
  it('Ao escrever o dia e horário em que o zoológico está aberto espera-se o retorno "The zoo is opened"', () => {
    expect(getOpeningHours('Tuesday', '04:00-PM')).toBe('The zoo is open');
  });
  it('Ao inserir um horário no qual o zoologico ertá fechado é esperada a string "The zoo is closed" como retorno', () => {
    expect(getOpeningHours('Monday', '07:00-PM')).toBe('The zoo is closed');
  });
});
