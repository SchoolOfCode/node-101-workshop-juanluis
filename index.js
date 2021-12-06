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
//console.log(myCollection);

function describeItem(item){
  for (let i=0;i <myCollection.length;i++){
    if(myCollection[i].count=== 1){
      console.log(`I have a ${myCollection[i].name} Here's what I like about it:${myCollection[i].whatILike}`)
    }
   // console.log(myCollection[i].count);
  }  
}
//console.log(myCollection[0].count);
describeItem();