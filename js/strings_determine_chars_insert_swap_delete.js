/* Problem: 
   Given two strings, s and t, with lengths of n and m, 
   create a function that returns one of the following strings:
	* "insert C" if string t can be obtained from s by inserting character C
	* "delete C" (same logic as above) 
	* "swap c d" if string t can be obtained from string s by swapping two adjacent characters (c and d) which appear in that order in the original string. 
	* "Nothing" if no operation is needed 
	* "impossible" if none of the above works ie LevenShtein distance is greater than 1.
 */
 
function solution(S, T) {
    // for equal strings
    if(S === T){
        return "NOTHING";
    }    
    // checking part
    var i = 0;
    var sLen = S.length;
    var tLen = T.length;
    
    // determine the length difference
    var diff = sLen - tLen;
    
    // make array out of strings
    var arrS = S.split("");
    var arrT = T.split("");
    
    // swapping logic
    if(diff === 0){
        // iterate for arrS
        for(i; i<sLen; i++){
            if (arrS[i] !== arrT[i]) {
                // swap elements
                var tmp = arrS[i];
                arrS[i] = arrS[i+1];
                arrS[i+1] = tmp;
                // check if swapped one matches and return message
                if (arrS.join("") == T) {
                    return "SWAP " + arrS[i+1] + " " + arrS[i];
                }
                else break;
            }
        }
    }else if(diff === 1){ 
        // delete logic
        i = 0;
        // iterate for arrS
        for(i; i<sLen; i++){
            if (arrS[i] !== arrT[i]) {
                var c = arrS.splice(i, 1)[0];
                if (arrS.join("") === T) {
                    return "DELETE " + c;
                }
                else break;
            }
        }
    }else if(diff === -1){ 
        // insert logic
        i = 0;
        // iterate for arrT
        for(i; i<tLen; i++){
            if (arrS[i] !== arrT[i]) {
                arrS.splice(i, 0, arrT[i]);
                if (arrS.join("") === T) {
                    return "INSERT " + arrS[i];
                }
                else break;
            }
        }
    }
    // if none of the above works
    return "IMPOSSIBLE";
}