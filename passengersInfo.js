function checkPassengersCount() {
  return NoOfTravellers;
}

function checkPassengersOfSameAge() {
  return noOfPassngersWithSimilarAge;
}

const passengerInfo = [
  {
    passengerName: "Noor",
    passengerAge: 24,
    passengerPassportNo: "A123456",
  },
  {
    passengerName: "Zahraa",
    passengerAge: 23,
    passengerPassportNo: "A67899",
  },
  {
    passengerName: "Ahmed",
    passengerAge: 24,
    passengerPassportNo: "A14343",
  },
  {
    passengerName: "ALi",
    passengerAge: 25,
    passengerPassportNo: "A123450",
  },
];

console.log("number of passengers: ", checkPassengersCount(passengerInfo));
console.log(
  "number of passenger who have same age : ",
  checkPassengersOfSameAge(passengerInfo)
);
