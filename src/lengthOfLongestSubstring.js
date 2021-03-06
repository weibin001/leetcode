var lengthOfLongestSubstring = function(s) {
  let map = new Map(),max = 0,i=0
  for (let j = 0; j < s.length; j++) {
    if(map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i)
    }
    max = Math.max(max, j - i + 1)
    map.set(s[j], j)
  }
  console.log(map)
  return max
}
lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('pwwkew')
lengthOfLongestSubstring('dvdf')