let stages = prompt ("how many stages do you want");
let index = 1;

while (index <= stages){
    let difference = stages - index;
    let space = " ".repeat(difference);
    let hashtags = "#".repeat(index);
    console.log(space + hashtags);
    index++;
}