def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dict_map = {}
    
        for s in strs:
            key = ''.join(sorted(s))
            if key in dict_map:
                dict_map[key].append(s)
            else:
                dict_map[key] = [s]
        
        return [dict_map[k] for k in dict_map]