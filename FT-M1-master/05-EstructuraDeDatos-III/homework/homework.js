'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(valor){
      if(valor > this.value){
          if(!this.right){
              this.right = new BinarySearchTree(valor);
          }else{
              this.right.insert(valor);
          }
      }else{
          if(!this.left){
              this.left = new BinarySearchTree(valor);
          }else{
              this.left.insert(valor)
          }
      } 
      
};


BinarySearchTree.prototype.contains = function(valorBuscado){
  if(this.value === valorBuscado)return true;
           if(valorBuscado > this.value){
           if(!this.right)return false;
           else return this.right.contains(valorBuscado);
  }else{
           if(!this.left)return false;
           else return this.left.contains(valorBuscado);
  }
};


BinarySearchTree.prototype.depthFirstForEach = function(cb, metodo){
  if(!metodo || metodo === `in-order`){
     if(this.left)this.left.depthFirstForEach(cb,metodo)
     cb(this.value)
     if(this.right)this.right.depthFirstForEach(cb,metodo)


  }else if(metodo === `pre-order`){
    cb(this.value)
    if(this.left)this.left.depthFirstForEach(cb,metodo)
    if(this.right)this.right.depthFirstForEach(cb,metodo)
  
  
  }else if(metodo === `post-order`){
    if(this.left)this.left.depthFirstForEach(cb,metodo)
    if(this.right)this.right.depthFirstForEach(cb,metodo)
    cb(this.value)
  }
};



BinarySearchTree.prototype.breadthFirstForEach = function(cb, array){
  if(!array) var array = [];
  if(this.left)array.push(this.left);
  if(this.right)array.push(this.right);
  cb(this.value);
  if(array.length > 0)array.shift().breadthFirstForEach(cb, array)
};

BinarySearchTree.prototype.size = function(){
  if(!this.left && !this.right)return 1;
  if(this.left && this.right) return 1 + this.left.size() + this.right.size();
  if(this.left)return 1 + this.left.size();
  if(this.right)return 1 + this.right.size();
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
