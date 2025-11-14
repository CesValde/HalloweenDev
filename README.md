> Retos Creados por MiduDev --> Link a la pagina https://www.halloween.dev/

# 🧟‍♂️ Challenge 1: - Code Possession

## codePossession.js

Regan has been possessed and now speaks in a strange language 😱. Father Karras has discovered that when Regan is possessed, she completely reverses the words she says, but keeps the order of the phrases.

Your mission is to create a program that translates Regan's possessed messages into normal human language.

For example:

```js
const message = 'i yojne gnihctaw uoy'
translatePossessed(message) // "i enjoy watching you"
The spaces between words must be preserved:
```

```js
const message = 'siht si gnorw'
translatePossessed(message) // "this is wrong"
If the message is empty or contains only spaces, return an empty string:
```

```js
const message = '      '
translatePossessed(message) // ""
Words may contain uppercase and lowercase letters, and they should be preserved:
```

```js
const message = 'dooG secitcarP'
translatePossessed(message) // "Good Practices"
```

---

# 🐑 Challenge 2: Freddy Krueger - "Count the Sheep"

## countTheSheep.js

📖 Story
It's midnight on **Elm Street** and you desperately need to sleep. You try to count sheep, but the letters in your mind are completely **scrambled by Freddy**.

You have a chaotic string of text with mixed letters. Your only escape is to count how many times you can form the word **"sheep"** before Freddy catches you in the nightmare.

**Your mission:** Count how many complete sheep you can form with the available letters.

💻 The Challenge
Create a function countSheep(letters) that:

- **Receives a string with scrambled letters**
- **Counts how many times you can form the word "sheep"**
- **Returns the number of complete sheep you can count**
**Important:** To form "sheep" you need: `s`,` h`, `e`, `e`, `p` (the '`e`' appears 2 times)

📝 Examples

```js
countSheep('sheepxsheepy')
// → 2 (you can form "sheep" twice)

countSheep('sshhheeeepppp')
// → 2 (s=2, h=3, e=4, p=4 → only 2 complete "sheep")

countSheep('hola')
// → 0 (not enough letters)

countSheep('peesh')
// → 1 (letters are scrambled but they're all there)
```

🧠 Explanation
To form **"sheep"** you need:

- s → 1 time
- h → 1 time
- e → 2 times ⚠️
- p → 1 time

If you have `"sshhheeeepppp"`:

- s = 2 (you can form 2 words)
- h = 3 (you can form 3 words)
- e = 4 (you can form 4÷2 = 2 words, because you need 2 'e' per "sheep")
- p = 4 (you can form 4 words)
The result is the minimum: `min(2, 3, 2, 4) = 2`

---

# 🐑 Challenge 3: It's Friday the 13th

## friday_13th.js

Michael Myers has left a pattern on his calendar…

Every year he attacks on Halloween night (October 31st) or on any Friday the 13th.

**Your mission is to find all the terror nights of a specific year 🩸**

You will receive a year (for example 2025) and must return an array with all the dates in `'YYYY-MM-DD'` format where Michael Myers could attack.

- If the year is not valid, return an empty array.
- Return all dates in the year that are October 31st, and/or Friday the 13th.
- Dates must be sorted chronologically.
- The format must be exactly `'YYYY-MM-DD'` (with leading zeros if needed).

```js
myersCalendar(2025)
// → ['2025-06-13', '2025-09-13', '2025-10-31']

myersCalendar(2026)
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

myersCalendar(2024)
// → ['2024-09-13', '2024-10-31', '2024-12-13']
```

---

# 🔪 Challenge 4: Which is your favorite algorithm

### favorite_algorithm.js

Ring, ring… 📞

**Ghostface**: "Hello, Sidney… I have a list of 1000 potential victims with their phone numbers. Your friend is somewhere on this list. Can you find them before it's too late?"

You're given a **SORTED** array of phone numbers (from lowest to highest) and you need to find a specific one as quickly as possible.

**The problem**: With 1000 numbers, searching one by one would be too slow. You need a smarter algorithm…

💻 **The Challenge**
Implement the function `searchPhone(phones, target)` using **BINARY SEARCH**

Inputs:

- phones: Array of numbers sorted from lowest to highest (e.g., [1001, 1002, 1005, 1008, ...])
- target: Phone number you're looking for

Output:

- The index (position) where the number is found
- -1 if it doesn't exist in the list

📝 Examples
```js
const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]

searchPhone(phones, 1008)
// → 3 (it's at index 3)

searchPhone(phones, 1001)
// → 0 (it's at index 0)

searchPhone(phones, 1020)
// → 6 (it's at index 6)

searchPhone(phones, 9999)
// → -1 (doesn't exist)
```

The advice…
You have no time to waste. You need to find the number as quickly as possible so Ghostface doesn't finish off his victim. That's why the best approach would be to use a Binary Search Algorithm:

Look at the middle element of the array
If it's the number you're looking for → you found it!
If the target is smaller → search in the left half
If the target is larger → search in the right half
Repeat until you find it or run out of elements

---

🧠 Algorithm Visualization
Let's search for the number `1008` in `[1001, 1002, 1005, 1008, 1010, 1015, 1020]`:

```js
Step 1: Check the middle
[1001, 1002, 1005, |1008|, 1010, 1015, 1020]
                                   ↑
Middle = index 3 → Found! Return 3
``` 

---

Let's search for the number `1015`:

```js
Step 1: Check the middle
[1001, 1002, 1005, |1008|, 1010, 1015, 1020]
                                   ↑
1015 > 1008 → Search in the RIGHT half

Step 2: New range [1010, 1015, 1020]
[1010, |1015|, 1020]
               ↑
Middle = index 5 → Found! Return 5
```

Keep in mind that the list of numbers can be very long for a linear search.

---

# 🧩 Challenge 5: I want to play a game

### playGame.js

**Jigsaw**: "Hello, I want to play a game…"

You have a combination lock with 4 wheels. Each wheel shows a digit from 0 to 9. The lock currently shows a code, but you need to change it to another code.

"You can turn each wheel up (+1) or down (-1). The wheels are circular: after 9 comes 0, and before 0 is 9.

You must change the combination with the minimum number of moves. If you make one wrong move… you're dead.

Implement the function `changeLock(current, target)` with the input:

- `current`: Current code (4-digit string, e.g., `'0022'`)
- `target`: Target code (4-digit string, e.g., `'0044'`)

The expected output is the minimum number of moves needed to reach the target combination.

**Rules:**

- Each wheel can turn +1 or -1
- Wheels are circular: 9→0 and 0→9
- Each turn counts as 1 move
- The 4 wheels are independent

📝 Examples

```js
changeLock('0022', '0044')
// → 4
// Wheel 2: 2→4 (2 moves forward)
// Wheel 3: 2→4 (2 moves forward)
// Total: 2+2 = 4

changeLock('0000', '9999')
// → 4
// Each wheel: 0→9 (1 move backward is faster than 9 forward)
// Total: 1+1+1+1 = 4

changeLock('1234', '5678')
// → 16
// Wheel 0: 1→5 (4 moves)
// Wheel 1: 2→6 (4 moves)
// Wheel 2: 3→7 (4 moves)
// Wheel 3: 4→8 (4 moves)
// Total: 4+4+4+4 = 16

changeLock('0000', '0000')
// → 0
// We're already at the target code

changeLock('1357', '2468')
// → 4
// Wheel 0: 1→2 (1 move)
// Wheel 1: 3→4 (1 move)
// Wheel 2: 5→6 (1 move)
// Wheel 3: 7→8 (1 move)
// Total: 1+1+1+1 = 4
```

Remember… your life is on the line. Don't make a mistake!

---

# 🤡 Challenge 6: The chaos

### theChaos.js

Art the Clown 🤡 has captured some victims and seated them in a circle 🎪, numbered from 0 to `N-1`, where `N` is the number of victims.

Art, being a methodical clown in his madness, decides to play a "game". He starts at position 0 and counts K victims clockwise (including the current person in the count). The victim where the count ends is eliminated from the circle.

Then, Art continues counting K positions from the next living person. The process repeats until only one person remains.

In his twisted mind, Art wants to know: Who will be the last survivor?

Implement the function surviveRoulette(victims, count) that returns the position of the last victim to survive.

The input parameters are:

- victims: Total number of victims (seated in positions 0 to n-1)
- count: Number to count to eliminate the next victim

```js
surviveRoulette(4, 2)
// Result: 0

// Explanation:
// Start with 4 victims: [0, 1, 2, 3]
// Count 2 from position 0: eliminates 1 → [0, 2, 3]
// Count 2 from last victim: eliminates 3 → [0, 2]
// Count 2 from last victim: eliminates 2 → [0]
// Survivor: 0

surviveRoulette(5, 3)
// Result: 3

// Explanation:
// Start with 5 victims: [0, 1, 2, 3, 4]
// Count 3 from 0: eliminates 2 → [0, 1, 3, 4]
// Count 3 from 3: eliminates 0 → [1, 3, 4]
// Count 3 from 1: eliminates 4 → [1, 3]
// Count 3 from 1: eliminates 1 → [3]
// Survivor: 3

surviveRoulette(5, 10)
// Result: 3

// Explanation:
// Start with 5 victims: [0, 1, 2, 3, 4]
// Count 10 from 0: eliminates 4 → [0, 1, 2, 3]
// Count 10 from 0: eliminates 2 → [0, 1, 3]
// Count 10 from 0: eliminates 0 → [1, 3]
// Count 10 from 1: eliminates 1 → [3]
// Survivor: 3
```

`Note:` This is a classic problem known as the "Josephus Problem". You must find an efficient solution, as n can be very large.

Then, Art continues counting K positions from the next living person. The process repeats until only one person remains.

In his twisted mind, Art wants to know: **Who will be the last survivor?**

**💻 The Challenge**
Implement the function `surviveRoulette(n, k)` that returns the position (0-indexed) of the last victim to survive.

Input:

- n: Total number of victims (seated in positions 0 to n-1)
- k: Every k-th victim is eliminated

Output:

- The index of the last victim to survive

Examples

**Example 1:**
```js
surviveRoulette(4, 2)
// Result: 0

// Explanation:
// Start: [0, 1, 2, 3]
// Count 2 from position 0: eliminates 1 → [0, 2, 3]
// Count 2 from position 2: eliminates 3 → [0, 2]
// Count 2 from position 0: eliminates 2 → [0]
// Survivor: 0
```

**Example 2:**

```js
surviveRoulette(5, 3)
// Result: 3

// Explanation:
// Start: [0, 1, 2, 3, 4]
// Count 3 from 0: eliminates 2 → [0, 1, 3, 4]
// Count 3 from 3: eliminates 0 → [1, 3, 4]
// Count 3 from 1: eliminates 4 → [1, 3]
// Count 3 from 1: eliminates 1 → [3]
// Survivor: 3
```

**Example 3:**

```js
surviveRoulette(6, 2)
// Result: 4

// Explanation:
// Start: [0, 1, 2, 3, 4, 5]
// Round 1: eliminates 1 → [0, 2, 3, 4, 5]
// Round 2: eliminates 3 → [0, 2, 4, 5]
// Round 3: eliminates 5 → [0, 2, 4]
// Round 4: eliminates 2 → [0, 4]
// Round 5: eliminates 0 → [4]
// Survivor: 4
```

**Example 4:**
```js
surviveRoulette(1, 1)
// Result: 0

// Explanation:
// There is only one victim, therefore they survive
```

**🎯 Note**

This is a classic problem known as the "Josephus Problem". You must find an efficient solution, as n can be very large.
