function reverse_words(input){
        function split(str,delimiter){
            const words=[];
            let word='';
            for(let i=0;i<str.length;i++){
                if(str[i]===delimiter){
                    words.push(word);
                    word='';
                }
                else{
                    word+=str[i];
                }
            }
            words.push(word);
            return words;
        }
        const words=split(inputSentence,' ')
        const reversedwords=[];
        for(let word of words){
            let reversedword='';
            for(let i=word.length-1;i>=0;i--){
                reversedword+=word[i];
            }
            reversedwords.push(reversedword);
        }
        const reversedsentence=reversedwords.join(' ');
        return reversedsentence;
}
const inputSentence = "This is a sunny day";
const reversed = reverse_words(inputSentence);
console.log(reversed);