// 1. getUserInitials
function getUserInitials(user) {
  return (user.firstName[0] + user.lastName[0]).toUpperCase();
}

// 2. countProperties
function countProperties(obj) {
  return Object.keys(obj).length;
}

// 3. invertObject
function invertObject(obj) {
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[obj[key]] = key;
    }
  }
  return result;
}

// 4. removeFalsyValues
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// 5. groupByAge
function groupByAge(people) {
  const result = {};
  for (let person of people) {
    if (!result[person.age]) {
      result[person.age] = [];
    }
    result[person.age].push(person);
  }
  return result;
}

// 6. findMostFrequentElement
function findMostFrequentElement(arr) {
  const count = {};
  let max = 0;
  let result;

  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;
    if (count[item] > max) {
      max = count[item];
      result = item;
    }
  }

  return result;
}

// 7. flatten (any depth)
function flatten(arr) {
  return arr.flat(Infinity);
}

// 8. mergeObjects (deep merge)
function mergeObjects(...objects) {
  const result = {};

  for (let obj of objects) {
    for (let key in obj) {
      if (
        obj[key] &&
        typeof obj[key] === "object" &&
        !Array.isArray(obj[key])
      ) {
        result[key] = mergeObjects(result[key] || {}, obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }

  return result;
}

// 9. rotateArray
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  return arr.slice(-k).concat(arr.slice(0, n - k));
}

// 10. intersection (no duplicates)
function intersection(nums1, nums2) {
  const set2 = new Set(nums2);
  return [...new Set(nums1.filter(n => set2.has(n)))];
}

// 11. groupAnagrams
function groupAnagrams(words) {
  const map = {};

  for (let word of words) {
    const key = word.split("").sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }

  return Object.values(map);
}

// 12. moveZerosToEnd (in-place)
function moveZerosToEnd(arr) {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos++] = arr[i];
    }
  }

  while (pos < arr.length) {
    arr[pos++] = 0;
  }

  return arr;
}

// 13. longestConsecutiveSequence
function longestConsecutiveSequence(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

// 14. productExceptSelf (no division)
function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

// 15. deepEqual
function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

// 16. serializeObject & deserializeObject
function serializeObject(obj) {
  return JSON.stringify(obj, function (key, value) {
    if (value === undefined) {
      return { __type: "undefined" };
    }
    if (value instanceof Date) {
      return { __type: "Date", value: value.toISOString() };
    }
    if (value instanceof Map) {
      return { __type: "Map", value: [...value.entries()] };
    }
    if (value instanceof Set) {
      return { __type: "Set", value: [...value] };
    }
    return value;
  });
}

function deserializeObject(str) {
  return JSON.parse(str, function (key, value) {
    if (value && value.__type === "undefined") {
      return undefined;
    }
    if (value && value.__type === "Date") {
      return new Date(value.value);
    }
    if (value && value.__type === "Map") {
      return new Map(value.value);
    }
    if (value && value.__type === "Set") {
      return new Set(value.value);
    }
    return value;
  });
}
