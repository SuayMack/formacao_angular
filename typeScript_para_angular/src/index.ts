// type heroi = {
//   name: string;
//   vulgo: string;
// };

// function printObjects(pessoa: heroi){
//   console.log(pessoa);
// }
// printObjects({
//   name: "Bruce Wayne",
//   vulgo: "Batman"
// })

/* Variáveis */
// primitivas
// let ligado: boolean = false;
// let nome: string = "Priscila";
// let idade: number = 43;
// let altura: number = 1.60;

// //tipos especiais: null, undefined
// let nulo: null = null;
// let indefinido: undefined = undefined;

// //tipos abrangentes: any, void
// let retorno:void;
// let retornoView: any = false;

// //tipo objeto
// let produto: object = {
//   name: "Priscila",
//   cidade: "pr",
//   idade: 43
// };

// //tipo objeto tipado com previsibilidade
// type ProdutoLoja = {
//   nome: string;
//   preco: number;
//   unidades: number;
// };

// let meuProduto: ProdutoLoja = {
//   nome: "Tênis",
//   preco: 89.90,
//   unidades: 5
// };

// //arrays
// let dados: string[] = ["Priscila", "Wagner", "Davi", "Nick"];
// let dados2: Array<string> = ["Priscila", "Wagner", "Davi", "Nick"];

// // arrays multi Types
// let infos: (string | number)[] = ["Priscila", 43, "Wagner"];

// // Tuplas **Tem que respeitar a ordem das informações
// let boleto:[string, number, number] = ["agua", 215.20, 6765446];

// //datas
// let aniversario: Date = new Date("2023-08-11 03:50");
// console.log(aniversario.toString());

// *** FUNÇÔES *** //

function addNumber(x: number, y: number): number {
  return x + y;
}

let soma: number = addNumber(4, 7);
console.log(soma);


function addHello(name: string): string {
  return `Hello ${name}`;
}

console.log(addHello("Priscila"));

//tipo funções Multi Tipos
function CallPhone(phone: number | string): number| string {
  return phone;
}

console.log(CallPhone("9 9618767"));

//tipo funções async
async function getDatabase(id:number) : Promise<string>{
  return "Priscila";
}
