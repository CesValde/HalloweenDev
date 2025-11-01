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