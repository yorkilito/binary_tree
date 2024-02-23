import { Node } from "./node_class.js";

class Tree{
    constructor(tree_array = []){
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
        //console.log(this.tree_array);
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

    buildTree(start, end){
        this.sortAndRemoveDuplicates();
        const node = this.sortedArrayToBST(0, this.tree_array.length -1);
        const prettyPrint = (node, prefix = "", isLeft = true) => {
          if (node === null) {
            return;
          }
          if (node.right_child !== null) {
            prettyPrint(node.right_child, `${prefix}${isLeft ? "│   " : "    "}`, false);
          }
          console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
          if (node.left_child !== null) {
            prettyPrint(node.left_child, `${prefix}${isLeft ? "    " : "│   "}`, true);
          }
        };
        return node;
    }

    


}

let binary_tree = new Tree([2,4,4,9,1,2,3,3,3,4,5,6]);

console.log(binary_tree.buildTree());


export{
    Tree
}