//EDUARDO MACHADO LUCAS
const chai = require ('chai');
//verificar se o resultado está correto
const expect  = chai.expect;
//lib do chai
//----------------------------------------------------------------------------------------------------------------------

//const somarNumeros = (a,b) => a + b;

const somarNumeros = (a,b) =>{
   if (typeof a === "number" && typeof b === "number" ) return a + b;
   else return undefined;
}

const subtrairNumeros = (a,b) =>{
    if (typeof a === "number" && typeof b === "number" ) return (a) - (b);
    else return undefined;
 } 

 const multiplicarNumeros = (a,b) =>{
     if (typeof a === "number" && typeof b === "number" ) return (a) * (b);
     else return undefined;
 }
describe('Somas', () =>{
    it('Soma de dois numeros  10 e 10', (done) =>{
        const resultado = somarNumeros(10,10);
        expect(resultado).be.equal(20);
        done();
    })
    it('Soma de dois numeros  -10 e 10', (done) =>{
        const resultado = somarNumeros(-10,10);
        expect(resultado).be.equal(0);
        done();
    })
    it('Soma de dois numeros  "teste" e 10', (done) =>{
        const resultado = somarNumeros("teste",10);
        expect(resultado).be.equal(undefined);
        done();
    })
    it('Soma de dois numeros  null e 10', (done) =>{
        const resultado = somarNumeros(null,10);
        expect(resultado).be.equal(undefined);
        done();
    })
})
describe('Subtração',()=>{
    it('Subtração de dois números  20 e 10',(done)=>{
        const resultado = subtrairNumeros(20,10);
        expect(resultado).be.equal(10);
        done();
    })
    it('Subtração de dois números  -20 e -10',(done)=>{
        const resultado = subtrairNumeros(-20,-10);
        expect(resultado).be.equal(-10);
        done();
    })

})
describe('Multiplicação',()=>{
    it('Multiplicação de dois números  2 e 3', (done) =>{
        const resultado = multiplicarNumeros(2,3);
        expect(resultado).be.equal(6);
        done();
    })
    it('Multiplicação de dois números  -2 e 3', (done) =>{
        const resultado = multiplicarNumeros(-2,3);
        expect(resultado).be.equal(-6);
        done();
    })
})