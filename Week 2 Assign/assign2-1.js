const factorial=(num)=>{
    if(num==0)
        return 1;
    return num*factorial(num-1);
}
const permutation=(n,r)=>{
    return factorial(n)/factorial(n-r);
}
const combination=(n,r)=>{
    return factorial(n)/(factorial(n-r)*factorial(r));
}
const multiPermutation=(n,r)=>{
    return n**r;
}
const multiCombination=(n,r)=>{
    return combination(n+r-1,r);
}
module.exports = {
    combination,
    permutation,
    multiCombination,
    multiPermutation,
};