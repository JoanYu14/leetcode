// 給定一個僅包含字元 '(', ')', '{', '}', '[' and ']'的字串 s，確定輸入字串是否有效。
// 輸入字串在以下情況下有效：
// 左括號必須由相同類型的括號封閉。
// 左括號必須以正確的順序關閉。
// 每個右括號都有一個對應的相同類型的左括號。
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // leftBrackets用來儲存左括號
  let leftBrackets = [];
  // memo用來儲存左括號對應的右括號
  let memo = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let len = s.length;
  // 如果len/2不為0的話代表括號一定無法完全配對
  if (len % 2 !== 0) {
    return false;
  }
  // 先預設ans為true
  let ans = true;
  let i = 0;
  // 如果i小於len並且ans還為true就繼續while loop
  while (i < len && ans) {
    // 如果s[i]是memo中的其中一個key代表是左括號，將s[i] push到leftBrakcets中
    if (memo[s[i]]) {
      console.log(`第${i}個是左括號:${s[i]}`);
      leftBrackets.push(s[i]);
    } else {
      // 如果s[i]不是memo的key代表是右括號
      // 把leftBrakcets中的最後一個括號pop出來
      let lastBracket = leftBrackets.pop();
      console.log(`遇到右括號:${s[i]}，目前最後一個左括號為:${lastBracket}`);
      // 如果s[i]與memo[lastBracket]的value不同代表他們沒有對應成功，就將ans改為false
      if (s[i] !== memo[lastBracket]) {
        console.log(`右括號:${s[i]}與左括號:${lastBracket}不符合`);
        ans = false;
      }
    }
    // while loop最後i+1
    i++;
  }
  // 如果while loop結束leftBrackets.length還不為0代表有多餘的左括號
  if (leftBrackets.length !== 0) {
    ans = false;
  }
  return ans;
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("(([]){})"));
