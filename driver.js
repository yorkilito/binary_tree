import { Tree } from "./tree_class.js";

class Driver{
    constructor (number_array = []){
        this.number_array = number_array;
        this.tree;


    }

    generateRandomNumbers(amount){
        if(amount > 100 || amount < 1){
            console.log(`Sorry, this program can only work with 1 to 100 numbers`);
            return;
        }else{
            this.number_array = [];
            for (let i = 0; i < amount ; i++){
                this.number_array.push(Math.floor(Math.random() * 100) + 1);
            }
        }

        return this.number_array;

    }

    generateRangeNumbers(floor, ceiling){
        if(floor > ceiling){
            console.log("ERROR: The range is not valid");
            return;
        }else{
            this.number_array = [];
        }

        for(let index = floor; index <= ceiling ;index++){
            
            this.number_array.push(index);
        }

        return this.number_array;

    }

    buildTree(){
        this.tree = new Tree(this.number_array);

        return this.tree;

    }

    generateTreeInfo(){

        const info =  `
Here's all related info on this binary tree:\n
This tree has ${this.number_array.length} element(s).\n
The height of this tree is ${this.tree.height()}.\n
If this tree is traversed with breadth first search(BFS), the order of traversal will be: ${this.tree.levelOrder()}.\n
If this tree is traversed in PreOrder, the order of traversal will be: ${this.tree.preOrder()}.\n
If this tree is traversed in InOrder, the order of traversal will be: ${this.tree.inOrder()}.\n
If this tree is traversed in PostOrder, the order of traversal will be: ${this.tree.postOrder()}.\n
Is this tree balanced? ${this.tree.isBalanced()}`;

        return info;

    }

}


export {
    Driver

};