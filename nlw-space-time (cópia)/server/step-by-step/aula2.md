# aula2

## Importa font
No layout.tsx
```tsx
// faz a importação das fontes usando o next

import { Roboto_Flex  as  Roboto, Bai_Jamjuree  as  BaiJanjuree } from  'next/font/google'

  

// armazena a fonte em uma variável, nesse caso com uso **Flex** é uma font adaptavél

const  roboto  =  Roboto({ subsets: ['latin'] })

// armazena font em uma variável, por não ser uma fonte adaptavél é necessario passar o weight que indica qual parte da fonte vai ser utilizado

const  baiJajuree  =  BaiJajuree({subsets: ['latin'], weight:  '700'})
```

No arquivo tailwind.config 
```
theme: {

extend: {

// para extender as configuraões padrões de font do tailwind

fontFamily: {

// cria propriedade sans e passa para ela a variavel da font roboto definida no arquivo **layout.tsx**, fazendo o mesmo para a font bui-jamjuree mas defindo ela como font alternativa

sans: "var(--font-roboto)",

alt: "var(--font-bai-jamjuree)",

},
```
E no layout.tsx
```ts
{/* altera a font do **className** para **roboto.variable** que é a variable definida acima */}

<body  className={`${roboto.variable} ${baiJamjuree.variable} font-sans`}>

{children}

</body>
```

## Importando as cores

No figma na parte **Styele-Guide**  procuramos no lado esquerdo  a seleção das cores gray, selecionamos **HEX** e para selecionar todosos hexadecimais das cores **ctrl shift e clicamos sobre os hexadecimais**.

No arquivo tailwind.config 
```json
colors: {

gray: {

50: "#eaeaea",

100: "#bebebf",

200: "#9e9ea0",

300: "#727275",

400: "#56565a",

500: "#2c2c31",

600: "#28282d",

700: "#1f1f23",

800: "#18181b",

900: "#121215",

},

purple: {

50: "#f3eefc",

100: "#d8cbf71",

200: "#c6b2f3",

300: "#ab8eee",

400: "#9b79ea",

500: "#8257e5",

600: "#764fd0",

700: "#5c3ea3",

800: "#48307e",

900: "#372560",

},

green: {

50: "#e6fbef",

100: "#b1f1ce",

200: "#8cebb6",

300: "#57e295",

400: "#36dc81",

500: "#04d361",

600: "#04c058",

700: "#039645",

800: "#027435",

900: "#025929",

},

},
```

Exportamos a imagem icon para dentro da pasta app que quando está dentro da pasta app com nome de **icon** automaticamente se torna um **favicon** da página.

Feito isso ainda dentro do arquivo layout.tsx adiciona altera o  título da página original e sua descrição
```ts
export  const  metadata  = {

title:  'NLW Spacetime',

description:

'Uma cápsula do tempo construida com React, Next.js, TailwindCSS e Typescript',

}
```

E também vamos definir uma cor padrão para usar nos textos **text-gray-100**  e adicionamos também **bg-gray-900** para a cor de fundo da aplicação 
```ts
<body  className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 text-gray-100`}>
```
```ts
{/* Blur */}

{/* **absolute** posição relativa ao eleemnto pai, **right-0** elemento alihandoo a direita do elemento pai com uma distãncia de 0 pixels **top-1/2** alinhado ao topo do elemento pai com uma distãncia vertical de 50% do elemento pai ficando verticalmente centralizado, **h-[288px]** altura, **w-[526px]** largura, **-translate-y-1/2 desloca elemento verticalmente para cima em 50% da sua altura. Isso também, **translate-x-1/2** **rounded-full** arredondamento de bordas deixando circular, **opacity-50** defineaopacidae do elemento como 50% parcialmente transparente, **blur-3xl** alica desfoque no elemento com uma alta intensidade */}

<div  className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-3xl"  />
```

mas como não ficou legal vamos no  arquivo tailwind.config dentro de **extands**

```json
blur: {

full: "194px",

},
```

Pra fazer essa sequencia de linha na vertical da parte direita  na divisão do lado direito vamos no arquivo tailwind.config em extends
```json
backgroundImage: {

stripes:

// definimos um linear-gradient e o **to-bottom** indica que será aplicado na posição de cima para baixo, começa com uma cor branca opacidade de 0.1% e o segundo rgba é a cor branca novamente opacidade de 0.1% que será aplicada 12.5% apartir da altura do elemento **transparent** 12.5% indica não terá uma cor visivel mas uma listra vazia a partir 12.5% do elemento, **transparent** indica que as proximas listras do elemento também será vazia

  

"linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)",

},
```

-   `linear-gradient`: É uma forma de criar um efeito de gradiente, onde as cores vão se misturando gradualmente.
    
-   `to bottom`: Significa que o gradiente vai ser aplicado de cima para baixo, como um degradê vertical.
    
-   `rgba(255, 255, 255, 0.1)`: Representa uma cor branca com uma transparência bem leve. A cor branca é usada para preencher algumas partes do gradiente.
    
-   `rgba(255, 255, 255, 0.1) 12.5%`: Indica que a cor branca vai começar a aparecer a partir de 12.5% da altura do elemento.
    
-   `transparent 12.5%`: Indica que a próxima parte do gradiente será transparente, ou seja, sem cor. Isso cria uma faixa vazia no elemento.
    
-   `transparent`: Indica que as próximas partes do gradiente também serão transparentes. Isso faz com que as faixas vazias se repitam, criando o efeito de listras.

Mas ainda não formou o efeito para finalizar ainda dentro tailwind.config 
```JSON
backgroundSize: {

stripes: "100% 8px",

},
```

Pra qu ele não fique tão colodo na divisão no page.tsx podemos mudar right para **right-2**
```ts
<div  className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-3xl"  />
```

E para criar uma linha bem fina como divisão e uma um espaçamento na direita passa **border-r border-white/10**
```ts
<div  className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
```

Dentro da pasta src cria uma pasta assets e nela cria bg-stars.svg e  para aplicar essa div **bg-[url(../assets/bg-stars.svg)] bg-cover**
```ts
{/* RIGHT */}

{/* *flex* é o display flex, **flex** é o flex colum que faz com que um item fique abaixo do outro, **p-16** é um padding de 16 */}

<div  className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
```

e faz o mesmo para parte da esquuerda
```ts
{/* LEFT */}

{/* **flex-start** para alinhar todos os itens para a esquerda, **justify-between** espaçamento entre os elementos, **px-28** padding na esquerda e na direita de 112 pixels, **py-16** padding em cima e em baixo de 64 pixels, **relative** para que tudo que eu posicione dentro da div fique relativo centralizado */}

<div  className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
```

agora trazemos a logo  como svg do figma e colocamos na pasta assets. Agora vamos criar uma ancora 
```ts
<div  className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"  />

  

<a  href=""  className="flex items-center gap-3 text-left">

<div  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400"></div>

</a>
```

Pra usar icones colocamos vamos instalar a biblioteca lucide-react

```bash
npm i lucide-react
```
E importa a biblioteca para o page.tsx


# Mobile

Do tailwind.config do **web** pegamos dentro do **extends** a parte de ** colors** e colamos ela dentro do tailwind.config do **mobile** dentro de **extends**.

O arquivo App.tsx está assim
```ts
import { StatusBar } from  'expo-status-bar'

import { View, Text } from  'react-native'

  

export  default  function  App() {

return (

<View  className="bg-gray-950 flex-1 items-center justify-center bg-gray-900">

<Text  className="text-gray-50 font-bold text-5xl">Rocketseat</Text>

<StatusBar  style="light"  translucent  />

</View>

)

}
```
## Configuração da fonte

```bash
npx expo install @expo-google-fonts/roboto @expo-google-fonts/bai-jamjuree expo-font
```

E no App.tsx fazemos a importação das fonts 
```ts
import {

useFonts,

Roboto_400Regular,

Roboto_700Bold,

} from  '@expo-google-fonts/roboto'

import {

BaiJamjuree_700Bold,

}from  '@expo-google-fonts/bai-jamjuree'
```

E criamos uma constante que chama função useFonts passando como argumento para ela um objeto com cada uma das fonts
```ts
export  default  function  App() {

  

const [] =  useFonts({

Roboto_400Regular,

Roboto_700Bold,

BaiJamjuree_700Bold,

})
```

Ele vai ficar exibindo erro que é do eslint para resolver no arquivo **eslintrc.json** passamos 
```json
{

"extends": [

"@rocketseat/eslint-config/react"

],

"rules": {

// desabilita o camelcase

"camelCase
`":"off"

}

} 
```
E para a variável que utiliza o useFonts para o array eu preciso passar argumento que retorne um booleano que avisa quando as fonts terminaram de carregar 
```ts
const [hasLoaderFonts] =  useFonts({
```

Vamos fazer uma condição que enquanto as fonts não carregarem ele vai mostrar um valor nulo, fazendo com que o react native não mostre nada em tela, apenas depois que as fonts estiverem carreagadas.
```ts
const [hasLoadedFonts] =  useFonts({

Roboto_400Regular,

Roboto_700Bold,

BaiJamjuree_700Bold,

})
if (!hasLoadedFonts) {

return  null

}
```

No arquivo tailwind.config 
```json
extend: {

fontFamily: {

title: 'Roboto_700Bold',

body: 'Roboto_400Regular',

alt: 'BaiJamjuree_700Bold',

},
```

Se eu passar para **Text**  e para o tailwind passar a propriedade **text-alt**
Podemos trocar o Text do nosso código por **ImageBackground** para que eu consiga colocar uma imagem como fundo da aplicação
```ts
<ImageBackground  source={blurBg} className="bg-gray-950 flex-1 items-center justify-center bg-gray-900">

<Text  className="font-body text-gray-50 text-5xl">Rocketseat</Text>

<StatusBar  style="light"  translucent  />

</ImageBackground>
```

Agora para posicionar o Blur no **ImageBackground** vamos remover todo o conteúdo 
```ts
<ImageBackground  source={blurBg} className=" flex-1 items-center bg-gray-900">
```

Removemos o texto **Rocketseat**, no **ImageBackground** temos uma propriedade chamada **imageStyle={{}}** ele permite uma estilização especificamente para imagem, mas nele não consigamos passar o tailwind
```ts
<ImageBackground  source={blurBg} className=" flex-1 items-center bg-gray-900"  imageStyle={{position:  'absolute', left:  '-100%'}}>
```

~~Uma sugestão do chat Gpt para o erro que eu estava tentar renderizar na tela o bgBlur foi criar um arquivo com a extenção **.d.ts** e colocar nele **declare  module  ' *.png' ;** e damoso coma **npm i** e em seguida para instalar **npm install expo-asset
**~~

Na pasta src na pasta cria arquivo **stripes.svg** Para que eu consiga usar um arquivo svg eu tenho que instalar uma biblioteca, procuramos por **react native svg transformer** no google e clicamos no primeiro que é o repositorio nogithub onde no readme contém todo passo
o primeiro passo no terminal
```bash
npx expo install react-native-svg
```

em seguida outra instalação
```bash
npm i -D react-native-svg-transformer
```

Agora para versões do expo superiores a v41, vamo precisar na raiz do projeto criar um arquivo 

```js
const { getDefaultConfig } =  require("expo/metro-config");

  

module.exports  = (() => {

const  config  =  getDefaultConfig(__dirname);

  

const { transformer, resolver } =  config;

  

config.transformer  = {

...transformer,

babelTransformerPath: require.resolve("react-native-svg-transformer"),

};

config.resolver  = {

...resolver,

assetExts: resolver.assetExts.filter((ext) =>  ext  !==  "svg"),

sourceExts: [...resolver.sourceExts, "svg"],

};

  

return  config;

})();
```

E dentro do arquivo ~~sugerido pelo chat gpt que tem extensão .d.ts que  eu havia colocado o nome de configuracao provisoria.d.ts alterei para assets.d.ts e movi para pasta assets~~ nele adicionamos o seguinte código
```ts
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

E no arquivo App.tsx vamos importa o svg
```ts
import  Stripes  from  './src/assets/stripes.png'
```
ele transforma o svg em um componente 
para aplicar ele 
```ts
<ImageBackground source={blurBg} className=" flex-1 items-center bg-gray-900" imageStyle={{position: 'absolute', left: '-100%'}}>
  <Stripes />
```
Para que ele não rode normamente precisamos reestartar o react-native, limpar o cash
```bash
nps expo start --clear
```
Se eu tentar posicionar utilizando o tailwind não irá funcionar, por padrão ele só suporta os componentes globais para resolver isso posso criar uma variável e nela chamar uma função que vem de dentro nativeWind **styled()**

```ts
const  StyledStripes  =  styled(Stripes)
```

E para usar troco o nome de onde passamos o svg como componente e substituímos para o nome da variável, fazendo com que seja possível utilizar o tailwind e podemos passar para esse componente  uma porprieddae do tailwind
```ts
      {/* flex-1 para ocupar a tela inteira  */}
      <View className='flex-1 items-center justify-center gap-6'>

      </View>
```

Agora trazemos a logo como svg na pasta assets 
```ts
import  NlwLogo  from  './src/assets/nlw-sapacetime-logo.svg'
```

```ts
      <View className='flex-1 items-center justify-center gap-6'>
        <NlwLogo />
      </View>
```


```ts
      <View className='flex-1 items-center justify-center gap-6'>
        <NlwLogo />
        <View className='space-y-2'>
        <Text className='text-center font-title text-2xl leading-tight text-gray-50'>
        Sua cápsula do tempo
        </Text>
        <Text className='text-center font-body text-base leading-relaxed text-gray-100'>
        Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
        </Text>
        </View>
```

Ficando no final assim todo arquivo App.tsx
```ts
import { StatusBar } from  'expo-status-bar'

import { View, Text, ImageBackground, TouchableOpacity } from  'react-native'

import { useFonts, Roboto_400Regular, Roboto_700Bold } from  '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from  '@expo-google-fonts/bai-jamjuree'

  
  

import  blurBg  from  './src/assets/luz.png'

import  Stripes  from  './src/assets/stripes.svg'

import  NlwLogo  from  './src/assets/nlw-sapacetime-logo.svg'

  

import { styled } from  'nativewind'

export  default  function  App() {

const [fontsLoaded] =  useFonts({

Roboto_400Regular,

Roboto_700Bold,

BaiJamjuree_700Bold,

})

  

if (!fontsLoaded) {

return  null

}

  

const  StyledStripes  =  styled(Stripes)

  

return (

<ImageBackground  source={blurBg} className=" flex-1 items-center bg-gray-900 px-8 py-10"  imageStyle={{position:  'absolute', left:  '-100%'}}>

<StyledStripes  className='absolute left-2'  />

<Text  className="font-body text-gray-50 text-5xl"  ></Text>

{/* flex-1 para ocupar a tela inteira */}

<View  className='flex-1 items-center justify-center gap-6'>

<NlwLogo  />

<View  className='space-y-2'>

<Text  className='text-center font-title text-2xl leading-tight text-gray-50'>

Sua cápsula do tempo

</Text>

<Text  className='text-center font-body text-base leading-relaxed text-gray-100'>

Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!

</Text>

</View>

{/* Botão que aoclicar diminui levemente a opacidade */}

<TouchableOpacity  activeOpacity={0.7} className='rounded-full bg-green-500 px-5 py-2'>

<Text  className='font alt text-sm uppercase text-black'>Cadastrar lembrança</Text>

</TouchableOpacity>

</View>

<Text  className="text-center font-body text-sm leading-relaxed text-gray-200">Feito com 💜 no NLW da Rocketseat</Text>

<StatusBar  style="light"  translucent  />

</ImageBackground>

)

}
```

## Backend

No arquivo Schema.prisma
```prisma
// This is your Prisma schema file,

// learn more about it in the docs: https://pris.ly/d/prisma-schema

  

generator  client  {

provider  =  "prisma-client-js"

}

  

datasource  db  {

provider  =  "sqlite"

url  =  env("DATABASE_URL")

}

  

// cria tabela

model  User  {

// cria o campo id e determina que por padrão ele vai ser uma chave ùnica gerada de forma aleatória (pela lib uuid)

id  String  @id  @default(uuid())

githubId  Int  @unique

name  String

// login do github

login  String

// avatar do github

avatarUrl  String

  

// cria um relacionamento inverso com tabela Memory onde um usuário pode conter varias memórias

memories  Memory[]

}

  

model  Memory  {

id  String  @id  @default(uuid())

userId  String

// endereço da imagem ou video de fundo

coverUrl  String

content  String

isPublic  Boolean  @default(false)

createdAt  DateTime  @default(now())

  

// Toda memória pertence a um usuário criando um relacionamento entre as tabelas

user  User  @relation(fields: [userId], references: [id])

}
```

E vamos executar para salvar e fazer alterações no banco de dados
```bash
npx prisma migrate dev
```

E ele detecta alterações que não podem serem feitas, por estar adicionando algumas colunas não banco de dados que não são opcionais como por exemplo avatar e login 
```bash
npx prisma  studio
```

Ele vai me voltar um erro rodo um comando para resetar o banco
```bash
npx migrante reset
```
E agora
```bash
npx prisma migrate dev
```

### Crud de memórias

vamos separa as rotas do server.ts para não ficar tudoem  únco arquivo, cria uma pasta **routes** e nela o  arquivo **memories.ts** 
```ts
import { FastifyInstance } from  "fastify";

// configuraçãopadrão do fastify o nome da função é vocẽ que define, ela recebe app como parâmetro que é do tipo FastifyInstance

export  async  function  memoriesRoutes (app:  FastifyInstance) {


}
````
agora  pegamos  a rota e colocamos dentro dessa função
```ts
import { FastifyInstance } from  'fastify'

// configuraçãopadrão do fastify o nome da função é vocẽ que define, ela recebe app como parâmetro que é do tipo FastifyInstance

export  async  function  memoriesRoutes(app:  FastifyInstance) {

app.get('/users', async () => {

// acessa a tabela de Usr do banco de dados e o findMany é onde pegamos vários usuários

const  users  =  await  prisma.user.findMany()

return  users

})

}
```

Criamos uma pasta chamada **libs** e dentro dessa um  arquivo **prisma.ts** e movemos para ela do arquivo server.ts  a definição da variável prisma para esse arquivo
```ts
import { PrismaClient } from  '@prisma/client'

export  const  prisma  =  new  PrismaClient()
```

também podemos passar uma configuração de log, isso faz com que o  primas faça log de todas as querys executadas no  banco de dados, para visualizar exatamente o  que cada chamada no backend resulta em querys 

E dentro do arquivo **memories.ts** 

importamos 
```ts
import { prisma } from  '../libs/prisma'
```

No arquivo server.ts
```ts
// O método **register** do fastify serve para registrar um app de rota separado importando a rota do arquivo memoriesRoutes

app.register(memoriesRoutes)
```
e eu rodo 
```bash
npm run dev
```
e já posso testar as rotas. No arquivo mememories.ts removendo as rotas anteriores
```ts
const  memories  =  await  prisma.memory.findMany({

// Eu quero ordenar as memória s pelo campo createdAt de forma crescente

orderBy: {

createdAt:  'asc',

},

})
return  memories
```

rodamos 
```bash
npx prisma studio
```
E criar uma memória, primero criamos um usuário e depois abre a tabela de memória e cria a primeira memória.

Para que o retorno volte um pouco mais reduzido alteramos para
```ts
app.get('/memories', async () => {

const  memories  =  await  prisma.memory.findMany({

// Eu quero ordenar as memória s pelo campo createdAt de forma crescente

orderBy: {

createdAt:  'asc',

},

})

return  memories.map((memory) => {

return {

id:  memory.id,

coverUrl:  memory.coverUrl,

excerpt:  memory.content.substring(0, 115).concat('...'),

}

})

})
```

Agora vamos criar rota de listagem de memoria

```ts
  // lista memoria em especifico e para eu ter acesso eu preciso do id e utilizamos os **:** para passar o identificador para buuscar cada memoria
  app.get('/memories/:id', async (request) => {
    // const { id } = request.params

    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)
    // o findUniqueOrThrow é para encontarar ua única memória ou disparar um erro
    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })
```

Para testar eu faço uma requisição em ```http://localhost:3000/memories``` copio o id gerado  e faço outra requisição ```http://localhost:3000/memories/01693968-3311-4da8-881c-036694cebe58``` passando o id como último argumento para rota 

Agora vãos criar uma rota para criar, quando criamos uma memória existem campos que são obrigatórios, e para passar esses campos uttilizamos o body
```ts
  // Cria memória
  app.post('/memories/:id', async (request) => {
    // valida o body da reuisição
    const bodySchema = z.object({
      content: z.string(),
      // verficamos se a informação é pública ou não, que vai ser um booleano que inicia como false
      isPublic: z.boolean().default(false),
    })
  })
```

um ponto a se analisar que o isPublic é um booleano e na maioria das vezes eu não vou conseguir enviar um booleano no corpo da minha requisição, o formulário no html da web ele não retorna u booleano, ele retornará 0 ou 1.

No **zod** podemos passar uma função antes do boolean chada **coerse**   e ele vai converter o valor que chegar nesse campo 
```ts
isPublic:  z.coerce.boolean().default(false),
```
qualquer coisa que seja comparável a false coo undefined, null ele vai retornar false, e qualquer coisa que seja comparável a true como por exemplo 1 ele vai retornar true 
```ts
  // Cria memória
  app.post('/memories/:id', async (request) => {
    // valida o body da reuisição
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      // verficamos se a informação é pública ou não, que vai ser um booleano que inicia como false, e usa a função coerce para fazer essa validação em booleano para o html
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request. Body)
  })
```
criando uma nova memória no banco de dados 
```ts
    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    // salva memória no banco de dados
    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })
  })
```

ficou faltando uma informação que é **userId** e para fazer isso vamos pegar la do prisma studio 
```bash
npx prisma studio
```
E copia o userId
```ts
    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: '1197fe28-916d-40fe-8fd0-72c7a584aa80',
      },
    })
```

Agora vamos fazer uma requisição POST para essa rota, e precisamos enviar alguns como estouu usando a extensão thunder client do vs code

 1. primeiro cria umma nova requisição clicando em new request
 2. lembrando de altarar a requisição que está usando **GET** para **POST**  em Headers clique no header que etsiver vazio digite no primeiro campo **Content-Type** e clique sobre esse mesmo nome para preencher, no segundo campo **application/json**
 3. clique em body e adicione o trecho
 ```json

  {
  "content": "test",
  "coverUrl": "http://github.com/diego3g.png",
  "isPublic": true
}

```
4. Em seguida no campo send **http://localhost:3333/memories/01693968-3311-4da8-881c-036694cebe58** é a rota seguida do userId

Agora vamos criar rota **Delete** 
```ts
  app.delete('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)
    // o findUniqueOrThrow é para encontarar ua única memória ou disparar um erro
    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
```
E em seguida faremo a rota **Put** 
```ts
  app.put('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      // verficamos se a informação é pública ou não, que vai ser um booleano que inicia como false, e usa a função coerce para fazer essa validação em booleano para o html
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })

    return memory
  })

```

Cria uma nova requisição, muda para **PUT** 

fazendo o mesmo processo da anterio porém passando para o body
```json

  {
  "content": "oiiiiiiiii",
  "coverUrl": "http://github.com/diego3g.png",
  "isPublic": true
}

```

Agora vamos instalar o cors no fastify
```bash
npm i @fastify/cors
```

O cors é uma técnica des segurança usado no backend para determinar quais urls, quais endereços vão poder acessar a api. Como estamos usando o frontend separado do backend precisamos instalar o **cors** para  instruir o cors quais urls do frontend o backend vai ser acessado.

faz o import do cors
```ts
import cors from '@fastify/cors'
```

e usamos o método register 
```ts
app.register(cors, {
  origin: true, //Todas as URLs de frontend poderão acessar o backend
})
```

O correto é que em **origin** passamos quais os endereços irão acessar o backend, no caso de colocar aplicação em produção
