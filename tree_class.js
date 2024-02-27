import { Node } from "./node_class.js";

class Tree{
    constructor(tree_array = []){
        this.tree_array = tree_array;
        this.root = this.buildTree();
        this.pre_order_array = [];
        this.in_order_array = [];
        this.post_order_array = [];
        this.tree_depth = 0;

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

      return null;

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

    levelOrder(node = this.buildTree()){
      let queue = [];
      let level_order = [];
      if (node === null){
        return;
      }
      queue.push(node);

      while(!(queue.length === 0)){
        let current_node  = queue.shift();
        level_order.push(current_node.value);
        if (current_node.left_child !== null){
          queue.push(current_node.left_child);
        }
        if (current_node.right_child !== null){
          queue.push(current_node.right_child);
        }
      }
      return level_order;

    }

    inOrder(node = this.buildTree()){
      if(node === null){
        return;
      }     
      this.inOrder(node.left_child);
      this.in_order_array.push(node.value);
      this.inOrder(node.right_child);

      return (this.in_order_array);

    }

    preOrder(node = this.buildTree()){
      if(node === null){
        return;
      }

      this.pre_order_array.push(node.value);
      this.preOrder(node.left_child);
      this.preOrder(node.right_child);

      return (this.pre_order_array);
    }

    postOrder(node = this.buildTree()){
      if(node === null){
        return;
      }     
      this.postOrder(node.left_child);
      this.postOrder(node.right_child);
      this.post_order_array.push(node.value);

      return (this.post_order_array);

    }

    height(node = this.buildTree()){
      if (node === null){
        return 0;
      }

      let left_node = this.height(node.left_child);
      let right_node = this.height(node.right_child);

      return 1 + Math.max(left_node, right_node);
    }

    isBalanced(node = this.buildTree()){
      if (node === null){
        return null;
      }

      let left_node_height = this.height(node.left_child);
      let right_node_height = this.height(node.right_child);

      return left_node_height === right_node_height ? true : false;

    }    

}


export{
    Tree
}