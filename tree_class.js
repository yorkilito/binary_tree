import { Node } from "./node_class.js";

class Tree{
    constructor(tree_array){
        this.tree_array = tree_array;
        this.root = this.buildTree();

    }

    exists(value){
        for (const node of this.tree_array){
            if(value === node){
                return true;
            }
        }
        return false;
    }

    sortAndRemoveDuplicates(){
        this.tree_array = [...new Set(this.tree_array)];
        this.tree_array.sort(function(number1, number2) {
            return number1 - number2;
        });
    }

    sortedArrayToBST(start, end) {
        if (start > end) {
          return null;
        }
        const middle = parseInt((start + end) / 2, 10);
        const node = new Node(this.tree_array[middle]);
        node.left_child = this.sortedArrayToBST(start, middle - 1);
        node.right_child = this.sortedArrayToBST(middle + 1, end);
        
        return node;
      }


    buildTree(){
        this.sortAndRemoveDuplicates();
        const initial_node = this.sortedArrayToBST(0, this.tree_array.length -1);
        return initial_node;
    }

    prettyPrint (node = this.buildTree(), prefix = "", isLeft = true){
      if (node === null) {
        
        return;
      }
      if (node.right_child !== null) {
        this.prettyPrint(node.right_child, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
      if (node.left_child !== null) {
        this.prettyPrint(node.left_child, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }

    };

  

    insert(value){
      if (isNaN(value)){
        console.log(`ERROR: ${value} is not a number`);
        return;
      }else{
        const new_insert = parseInt(value);
        this.tree_array.push(new_insert);
      } 
    }

    delete(value){
      let counter = 0
      for (const node of this.tree_array){       
        if(value == node){        
          const value_index = this.tree_array.indexOf(value);
          this.tree_array.splice(value_index, 1);
          counter ++;            
        }
      }

      if (counter == 0){
        console.log(`ERROR: ${value} does not exist in this tree`);
      }      

    }

    find(value){
      let counter = 0
      for (const node of this.tree_array){       
        if(value == node){  
          this.sortAndRemoveDuplicates();
          const value_index = this.tree_array.indexOf(value);
          const value_node = this.sortedArrayToBST(value_index - 1, value_index + 1);  
          return value_node;              
        }
      }

      if (counter == 0){
        console.log(`ERROR: ${value} does not exist in this tree.`);
      }   

    }


    


}

let binary_tree = new Tree([2,4,4,9,1,2,3,3,3,4,5,6, 22, 12]);

binary_tree.insert(30);
binary_tree.insert(31);
binary_tree.insert(51);
binary_tree.insert(61);
binary_tree.delete(61);
binary_tree.delete(100);

//console.log(binary_tree);

//console.log(binary_tree.buildTree());
binary_tree.prettyPrint();
//console.log(binary_tree.exists(22));

console.log(binary_tree.find(51));



export{
    Tree
}