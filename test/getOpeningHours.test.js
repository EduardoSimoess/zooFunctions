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
    expect(getOpeningHours('segunda-feira', '05:00-PM')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('Ao escrever um horário seja um número menor ue 0 ou maior que 12 é retornado um erro', () => {
    expect(getOpeningHours('Tuesday', '13:00-PM')).toThrow(/^The hour must be between 0 and 12$/);
  });
  // algo errado aqui!!
});
