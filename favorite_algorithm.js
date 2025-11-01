function searchPhone(phones, target) {
   return phones.findIndex(phone => phone == target)
}

const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]
const result = searchPhone(phones, 1008)
console.log(result)