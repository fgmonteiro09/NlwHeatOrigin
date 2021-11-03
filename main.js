const links = {
  github: 'fgmonteiro09',
  youtube: 'UC-PB_WvJpOPmNemzQ66xz6A',
  facebook:'fgmonteirorj',
  instagram:'fgmonteirorj',
  twitter: 'fgmonteirorj'
 }
 /* funcao para retornar o conteudo da classe na tag li 
 essa CONST so existe dentro do FOR, o FOR morre tudo 
 dentro dele vai junto = variavel de ESCOPO */
 function changeSocialMediaLinks() {
   
     for (let list of socialLinks.children){
       const social=list.getAttribute('class')
       //para usar a varivel dentro de uma string tem que usar o acento
       // o acento grave
       list.children[0].href = `https://${social}.com/${links[social]}`
     }
 }
 changeSocialMediaLinks()

 function getGitHubProfileInfos(){
   const url=`https://api.github.com/users/${links.github}`
/* o fetch pega a informação da URL joga para dentro do prmeiro THEN
esse then converte em JSON e joga para o segundo THEN e esse faz o filtro 
do que é necessário*/
   fetch(url).then(response => response.json()).then(data => {
    userName.textContent = data.name,
    userBio.textContent = data.bio,
    userLink.href = data.html_url,
    userPhoto.src = data.avatar_url,
    userLogin.textContent = data.login 


   })
 }

 getGitHubProfileInfos()