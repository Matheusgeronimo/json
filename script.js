const aluno = {
nome:"Ramonio Nariga",
idade:"58",
email:"Narigareidelas@hotmail.com",
curso:"Dar capa e gelo agachado",
notas:[10,10,10,9],
media : function(){
    let mediaNotas = 0
for (let i=0; i<this.notas.length; i++){
    mediaNotas += this.notas[i];
}
 
mediaNotas /= this.notas.length;
return mediaNotas;

}
}
console.log(aluno.media())

