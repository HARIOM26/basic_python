console.log("19012011092 Abhishek V Jani \n");
var book={
 title:"Harry Potter and the Sorcerer's Stone",
 author:"J.K Rowling",
 price:1000,
};
function print_info(book){
 for(var b in book){
 console.log(b +": " + book[b]+"\n");
 }
}
print_info(book);
