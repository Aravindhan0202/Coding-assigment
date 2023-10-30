function arraySorting(array){
    const length=array.length;
    for(let i=0;i<length-1;i++){
        for(let j=0;j<length-i-1;j++){
            if(array[j]<array[j+1]){
                const temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array;
}
const array=[7,2,5,5,3,0,3,9,0,1];
console.log(arraySorting(array));