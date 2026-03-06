let user = "Elzero";
console.log(user[0]); 
console.log(user[1]); 
console.log(user[2]); 
console.log(user[3]); 
console.log(user[4]); 
console.log(user[5]); 
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.toLowerCase().includes(letterZ));
console.log(word[0].toLowerCase() === letterE); 
console.log(word[word.length - 1].toUpperCase() === letterO); 
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
console.log(myFriends.slice(0, num));
console.log(myFriends.splice(0, num));
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop(); 
friends.shift();
console.log(friends);
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
console.log(arrOne.concat(arrTwo).sort().reverse()); 
let website = "Go";
let words = ["Google", "Facebook", "Elzero", "Web", "School"];
console.log(words[website.length].slice(website.length).toUpperCase());
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if (haystack.includes(needle)) {
console.log("Found");
}
if (haystack.indexOf(needle) !== -1) {
console.log("Found");
}

if (haystack.find((el) => el === needle)) {
console.log("Found");
}
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
allArrs = arr1.concat(arr2).sort().reverse().slice(true); 
console.log(allArrs); 

let needleVal = "JS";
let haystackArr = ["PHP", "JS", "Python"];

if (haystackArr.includes(needleVal)) { console.log("Found"); }
if (haystackArr.indexOf(needleVal) !== -1) { console.log("Found"); }
if (haystackArr.lastIndexOf(needleVal) !== -1) { console.log("Found"); }

let firstArr = ["A", "C", "X"];
let secondArr = ["D", "E", "F", "Y"];
let combinedArr = firstArr.concat(secondArr).sort().reverse().slice(1);
console.log(combinedArr);

let birthDateObj = new Date("Oct 25, 1982");
let currentDateTime = new Date();
let diffTime = currentDateTime - birthDateObj;

console.log(`${Math.trunc(diffTime / 1000)} Seconds`);
console.log(`${Math.trunc(diffTime / 1000 / 60)} Minutes`);
console.log(`${Math.trunc(diffTime / 1000 / 60 / 60)} Hours`);
console.log(`${Math.trunc(diffTime / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.trunc(diffTime / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.trunc(diffTime / 1000 / 60 / 60 / 24 / 365)} Years`);

let zeroDate = new Date(0);
zeroDate.setFullYear(1980);
zeroDate.setSeconds(1);
console.log(zeroDate);
let targetVal = "JS";
let searchCollection = ["PHP", "JS", "Python"];

if (searchCollection.includes(targetVal)) { console.log("Found"); }
if (searchCollection.indexOf(targetVal) !== -1) { console.log("Found"); }
if (searchCollection.lastIndexOf(targetVal) !== -1) { console.log("Found"); }

let firstGroup = ["A", "C", "X"];
let secondGroup = ["D", "E", "F", "Y"];
let mergedResult = firstGroup.concat(secondGroup).sort().reverse().slice(1);
console.log(mergedResult);

let myBirth = new Date("Oct 25, 1982");
let nowTime = new Date();
let duration = nowTime - myBirth;

console.log(`${Math.trunc(duration / 1000)} Seconds`);
console.log(`${Math.trunc(duration / 1000 / 60)} Minutes`);
console.log(`${Math.trunc(duration / 1000 / 60 / 60)} Hours`);
console.log(`${Math.trunc(duration / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.trunc(duration / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.trunc(duration / 1000 / 60 / 60 / 24 / 365)} Years`);

let epochDate = new Date(0);
epochDate.setFullYear(1980);
epochDate.setSeconds(1);
console.log(epochDate);
let mySeeker = "JS";
let dataContainer = ["PHP", "JS", "Python"];

if (dataContainer.includes(mySeeker)) { console.log("Found"); }
if (dataContainer.indexOf(mySeeker) !== -1) { console.log("Found"); }
if (dataContainer.lastIndexOf(mySeeker) !== -1) { console.log("Found"); }

let alphaPart = ["A", "C", "X"];
let betaPart = ["D", "E", "F", "Y"];
let finalOutput = alphaPart.concat(betaPart).sort().reverse().slice(1);
console.log(finalOutput);

let startPoint = new Date("Oct 25, 1982");
let endPoint = new Date();
let timeDiff = endPoint - startPoint;

console.log(`${Math.trunc(timeDiff / 1000)} Seconds`);
console.log(`${Math.trunc(timeDiff / 1000 / 60)} Minutes`);
console.log(`${Math.trunc(timeDiff / 1000 / 60 / 60)} Hours`);
console.log(`${Math.trunc(timeDiff / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.trunc(timeDiff / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.trunc(timeDiff / 1000 / 60 / 60 / 24 / 365)} Years`);

let customClock = new Date(0);
customClock.setFullYear(1980);
customClock.setSeconds(1);
console.log(customClock);
let searchValue = "JS";
let techList = ["PHP", "JS", "Python"];

if (techList.includes(searchValue)) { console.log("Found"); }
if (techList.indexOf(searchValue) !== -1) { console.log("Found"); }
if (techList.lastIndexOf(searchValue) !== -1) { console.log("Found"); }

let firstArray = ["A", "C", "X"];
let secondArray = ["D", "E", "F", "Y"];
let resultArray = firstArray.concat(secondArray).sort().reverse().slice(1);
console.log(resultArray);

let startDate = new Date("Oct 25, 1982");
let currentDate = new Date();
let difference = currentDate - startDate;

console.log(`${Math.trunc(difference / 1000)} Seconds`);
console.log(`${Math.trunc(difference / 1000 / 60)} Minutes`);
console.log(`${Math.trunc(difference / 1000 / 60 / 60)} Hours`);
console.log(`${Math.trunc(difference / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.trunc(difference / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.trunc(difference / 1000 / 60 / 60 / 24 / 365)} Years`);

let specialDate = new Date(0);
specialDate.setFullYear(1980);
specialDate.setSeconds(1);
console.log(specialDate);
let birthDate = new Date("Oct 25, 1982");
let currentTime = new Date();
let timeDifference = currentTime - birthDate;

console.log(`${Math.trunc(timeDifference / 1000)} Seconds`);
console.log(`${Math.trunc(timeDifference / 1000 / 60)} Minutes`);
console.log(`${Math.trunc(timeDifference / 1000 / 60 / 60)} Hours`);
console.log(`${Math.trunc(timeDifference / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.trunc(timeDifference / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.trunc(timeDifference / 1000 / 60 / 60 / 24 / 365)} Years`);