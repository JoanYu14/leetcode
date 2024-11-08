// 給定一個字串 s 和一個整數 k，傳回 s 中長度為 k 的任何子字串中元音字母的最大數量。
// 英文的母音字母有「a」、「e」、「i」、「o」和「u」。
// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.
var maxVowels = function (s, k) {
  const VowelLetters = ["a", "e", "i", "o", "u"];
  // windowStart紀錄當前window的起始index
  let windowStart = 0;
  // windowEnd紀錄下一個window的結尾index
  let windowEnd = 0;
  // 紀錄長度為k的window最大有幾個母音
  let ansCount = 0;
  // 製作第一個window內有幾個母音
  while (windowEnd < k) {
    if (VowelLetters.includes(s[windowEnd])) {
      ansCount++;
    }
    windowEnd++;
  }

  // ansCount等於k代表第一個window就所有字母都是母音了，直接return ansCount就好
  if (ansCount === k) {
    return ansCount;
  }

  // 紀錄目前window有幾個母音
  let nowCount = ansCount;
  while (windowEnd < s.length) {
    // console.log(`windowStart:${windowStart}, windowEnd:${windowEnd}`);
    // 因為window滑動要減掉windowStart加上windowEnd，所以要判斷是否為母音
    if (VowelLetters.includes(s[windowStart])) {
      nowCount--;
    }
    if (VowelLetters.includes(s[windowEnd])) {
      nowCount++;
    }
    if (nowCount > ansCount) {
      ansCount = nowCount;
      if (ansCount === k) {
        return ansCount;
      }
    }

    // 向右滑動window
    windowStart++;
    windowEnd++;
  }
  return ansCount;
};

console.log(maxVowels((s = "abciiidef"), (k = 3)));
console.log(maxVowels((s = "aeiou"), (k = 2)));
console.log(maxVowels((s = "leetcode"), (k = 3)));
