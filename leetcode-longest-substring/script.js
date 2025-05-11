const lengthOfLongestSubstring = function(s) {
    let map = new Map();  
    let left = 0;  
    let maxLength = 0;  

    // Traverse the string using right pointer
    for (let right = 0; right < s.length; right++) {
        // If we encounter a repeating character, update the left pointer
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);  }
        
        map.set(s[right], right);  // Store the latest index of the character
        
        maxLength = Math.max(maxLength, right - left + 1);  
    }

    return maxLength;
};
/// the second methods 
function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let left = 0;
    const seen = new Set();
  
    for (let right = 0; right < s.length; right++) {
      while (seen.has(s[right])) {
        seen.delete(s[left]);
        left++;
      }
      seen.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
    }
  
    return maxLen;
  }
  
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('bbbbbb'))
