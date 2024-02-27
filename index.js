import { Driver } from "./driver.js";
import promptSync from "prompt-sync";
import inquirer from "inquirer";



let new_driver = new Driver();
const prompt = promptSync();

function buildTree(array = null){
    console.log("Awesome, here's your binary tree");
    if(array === null){
        new_driver.buildTree().prettyPrint();
        console.log(new_driver.generateTreeInfo()); 
        
    }else{
        let new_driver2 = new Driver(array);
        new_driver2.buildTree().prettyPrint();
        console.log(new_driver2.generateTreeInfo()); 
    }
    
    
    
    return;
}


console.log(`
BST Project by Samuel Yorke Aidoo Jr.
======
Hey there!
I created this program to build binary search trees (BST) from random numbers, or a range of numbers.

You can also build a binary tree with your own numbers.

This program also provides information on the tree. You'll will know the height of the tree, the various orders of traversal and wether it\'s balanced or not.

So, let's get started!
`);

const response = await inquirer.prompt([
    {
      type: 'list',
      name: 'node_choice',
      message: 'What do you want to fill your binary tree with?',
      choices: ['random numbers', 'a range of numbers', 'my own numbers'],
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.node_choice);
    switch (answers.node_choice){
        case 'random numbers':
            const random_numbers = prompt('How many random numbers do you want in this binary tree? (Max:100)');
            if((parseInt(random_numbers)) && (!(parseInt(random_numbers) < 1) && !(parseInt(random_numbers) > 100))){
                new_driver.generateRandomNumbers(parseInt(random_numbers));
                buildTree();            
            }else{
                console.log('Sorry! I don\'nt recognize that number. Or maybe the number you input is above 100');
            }
            break;
        case 'a range of numbers':
            const range_floor = prompt('What is the floor of your range?');
            const range_ceiling = prompt('What is the ceiling of your range?');

            if(parseInt(range_ceiling) > parseInt(range_floor)){
                new_driver.generateRangeNumbers(parseInt(range_floor), parseInt(range_ceiling));
                buildTree();
            }else{
                console.log("Sorry, the ranges you input are not valid")
            }

            break;
        case 'my own numbers':
            console.log('3');
            const own_number_size = prompt('How many numbers do you want to input for your tree? (Max: 10)');
            let tree_array = [];
            if(parseInt(own_number_size) >= 1 && parseInt(own_number_size) <= 10){
                let tree_array = [];
                for(let index = 1; index <= own_number_size; index ++){
                    const tree_input = prompt(`Input number ${index}:`);
                    if(parseInt(tree_input)){
                        tree_array.push(parseInt(tree_input));
                    }else{
                        console.log("Sorry. I don't recognize that input");
                        return;
                    }
                    
                }

                buildTree(tree_array);

            }else{
                console.log('Sorry, I don\'t recognize that number. Either that or it\'s out of range' );
                return;
            }
            break;
        default:
            console.log('You have to choose one of these options');
    
    }
  });


  


console.log(`

`);