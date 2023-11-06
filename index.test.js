const yams = require('.');

describe('Différents module de suite',() =>{

    it('Having a BRELAN, 3 same dices', ()=>{
        expect(yams(1,1,1,2,3)).toBe(28);
    });

    it('Having a Carré, 4 same dices', ()=>{
        expect(yams(1,1,1,1,3)).toBe(35);
    });

    // it('FULL = Having a BRELAN and one PAIR', ()=>{
    //     expect(yams(1,1,1,2,2)).toBe(30);
    // });
    //
    // it('GRANDE SUITE = the dice\'s number are following ', ()=>{
    //     expect(yams(1,2,3,4,5)).toBe(40);
    // });

    it('Having a YAMS, 5 same dices', ()=>{
        expect(yams(1,1,1,1,1)).toBe(50);
    });

    // it('Having a CHANCE, the dices are not the same', ()=>{
    //     expect(yams(1,3,5,6,2)).toBe(17);
    // });
})