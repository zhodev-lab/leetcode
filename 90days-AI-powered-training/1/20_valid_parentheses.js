/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const dict = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for(const ele of s){
        if(ele in dict){
            const last_ele = stack.pop();
            if(dict[ele] !== last_ele){
                return false;
            }
        } else{
            stack.push(ele)
        }
    }

    if(stack.length === 0){
        return true;
    }
    return false
};