var prices = [33, 26, 99, 120, 12, 45]
var sum = 0;

for (let i=0; i<prices.length; i++){
  sum += prices[i];
}
console.log("The sum is ", sum);

var crow= " crows on the wall.";
var crow0= " crows.";
var crow1= " 1 fell down and became a wight.";
var crow2= " crows on the wall.";
var san = i-1;
for (var i=99; i>0; i--){
  var san = i-1;
  if (i===1){
    crow=" crow on the wall.";
    crow0= " single crow."
    crow1=" It fell down and became a wight."
    crow2="There's no one left to defend Westeros now."
    san = '' ;
  }
console.log(i + crow +' '+ i + crow0 + crow1 +' '+ san + crow2);

}
