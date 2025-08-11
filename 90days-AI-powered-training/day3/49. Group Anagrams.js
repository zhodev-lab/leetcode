/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const dict = {};
    for(let i = 0 ; i< strs.length; i++){
        const _key = strs[i].slice().split('').sort().join('');
        if(_key in dict){
            dict[_key].push(strs[i])
        }else{
            dict[_key]= [strs[i]]
        }
    }

    // console.log(dict)

    return Object.keys(dict).map(key => {
        return dict[key] 
    })
};