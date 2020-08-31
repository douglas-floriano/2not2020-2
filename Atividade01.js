/*

   DADOS PARA O EXERCÃCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   ParaÃ­ba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   CearÃ¡;CE;148920.47;9075649
   PiauÃ­;PI;251577.74;3264531
   MaranhÃ£o;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

estadosNe.push(estado1)

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/

/*
   2) Escreva uma arrow function que receba dois parÃ¢metros, Ã¡rea e populaÃ§Ã£o, e
      calcule a densidade demogrÃ¡fica retornando o resultado da divisÃ£o da
      segunda pela primeira. 
*/

/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cÃ¡lculo correspondente.
      Com o resultado do cÃ¡lculo, crie uma propriedade chamada 'densidade
      demogrÃ¡fica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/

/* 4) Escreva uma arrow function que receba um objeto. Na funÃ§Ã£o, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/

/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a funÃ§Ã£o escrita em 4) para exibi-lo.

/*
   6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. FaÃ§a as inserÃ§Ãµes de 
         modo que o vetor final esteja em ordem alfabÃ©tica. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabÃ©tica. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         jÃ¡ existentes, e assim por diante.

*/