let min = 1000;
minLimit =100;
maxLimit =999; 
for (i=0;i<5;i++)
{
    threeDigitNumber = Math.floor(Math.random()*(maxLimit -minLimit +1)+minLimit);
    console.log(threeDigitNumber); 
    if(min>threeDigitNumber)
    {
        min = threeDigitNumber;
    }
    if(min<threeDigitNumber)
    {
        maxLimit;
    }

}
console.log("minimum number  is : "+min);
console.log("Maximum number:"+maxLimit);
