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
let ligado: boolean = false;
let nome: string = "Priscila";
let idade: number = 43;
let altura: number = 1.60;

//tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno:void;
let retornoView: any = false;

//tipo objeto
let produto: object = {
  name: "Priscila",
  cidade: "pr",
  idade: 43
};

//tipo objeto tipado com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.90,
  unidades: 5
};
