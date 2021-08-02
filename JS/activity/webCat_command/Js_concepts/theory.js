var a = 10 ; 
function fn(){
    console.log("line no. 101" , a);
    if(true){
        a = 30 ;
        a++;
        console.log("line no. 102" , a);
    }
    console.log("line no. 103" , a);
}
fn();
console.log("line no. 111" , a);