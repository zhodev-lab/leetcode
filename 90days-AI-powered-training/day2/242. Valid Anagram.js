/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const objS = new Map();
    const objT = new Map();

    for(let i= 0;i<s.length; i++){
        if(objS.has(s[i])){
            const num = objS.get(s[i]) + 1
            objS.set(s[i], num);
        }else{
            objS.set(s[i], 1);
        }
    }

    for(let i= 0;i<t.length; i++){
        if(objT.has(t[i])){
            const num = objT.get(t[i]) + 1
            objT.set(t[i], num);
        }else{
            objT.set(t[i], 1);
        }
    }
  
    for(const key of objS.keys()){
        if(objS.get(key) === objT.get(key)){
            objS.delete(key)
            objT.delete(key)
        }else{
            return false;
        }
    }

    return objS.size === objT.size
};