// define a função double que recebe um parâmetro **x** do tipo **number** e retorna um valor do tipo  number
export function double(x: number): number {
  // dobra o valor de **x** retornando o resulatado
  return x * 2;
}

// **...args** retorna um valor variável de arqumentos que são  do tipo **string[]** um array de string. O retorno da função é  do tipo **string**
export function concat(...args: string[]): string {

  return args.reduce((result, param)  => result + param, "")
}

export function waitSeconds(seconds: number): Promise<string> {
  return new Promise((resolve, reject)=>{

    setTimeout(() => {
      resolve(`waited ${seconds} seconds`)
    },seconds * 1000)
  })
}