  //2b
let myCollection = [        
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!"
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory"
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)"
  }
];
console.log(myCollection[0]['name']);
/*/2c
Create a function called describeItem, which should take in an item as a parameter
 (the argument handed to this function would be an item from our collection). The function 
 should console.log a message according to how many of the item you have.
 If there's only one of the item in your collection, it should log "I have a name.
  Here's what I like about it: whatILike". If you have more than one of it, the message should log 
  "I have count names. Here's what I like about them: whatILike".
  For example, the result of calling the describeItem function with the first item in our collection 
  would be: "I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!
 */
  function describeItem(item){
    if (myCollection[0]['name']=== item && myCollection[0]['count']=== 1)  {
    console.log(`I have a ${myCollection[0]['name']}. Here's what I like about it: ${myCollection[0]['whatILike']}`)
  
    } else if (myCollection[1]['name']=== item && myCollection[1]['count']=== 1)  {
      console.log(`I have a ${myCollection[1]['name']}. Here's what I like about it: ${myCollection[1]['whatILike']}`)
    
    } else if (myCollection[2]['name']=== item && myCollection[2]['count']=== 1)  {
      console.log(`I have a ${myCollection[2]['name']}. Here's what I like about it: ${myCollection[2]['whatILike']}`)
    
    } else if (myCollection[0]['name']=== item && myCollection[0]['count'] > 1)  {
      console.log(`I have ${myCollection[0]['count']} ${myCollection[0]['name']}s. Here's what I like about it: ${myCollection[0]['whatILike']}`)
    
    } else if (myCollection[1]['name']=== item && myCollection[1]['count'] > 1)  {
        console.log(`I have ${myCollection[1]['count']} ${myCollection[1]['name']}s. Here's what I like about it: ${myCollection[1]['whatILike']}`)
      
    } else if (myCollection[2]['name']=== item && myCollection[2]['count'] > 1)  {
      console.log(`I have ${myCollection[2]['count']} ${myCollection[2]['name']}s. Here's what I like about it: ${myCollection[2]['whatILike']}`)
    
      }
  }
describeItem( "School of Code mug");
describeItem( "School of Code hat")
describeItem( "School of Code pillow");