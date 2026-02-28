// Scenario: A tech company calculating server storage and data processing

// BigInt numbers for very large storage capacities (in bytes)
// Declare BigInt variables here

const totalServerStorage = 9007199254740992n; // ~9 petabytes
const dailyDataIngestion = 1099511627776n; // ~1 terabyte per day
const backupStorage = 4503599627370496n; // ~4.5 petabytes

// Regular numbers for smaller values
const numberOfServers = 150;
const hoursPerDay = 24;
const daysPerWeek = 7;

// BigInt arithmetic operations
// Addition - calculating total storage after daily ingestion. Add your code here

const storageAfterOneDay = totalServerStorage + dailyDataIngestion;

// Multiplication - calculating weekly data ingestion. Add your code here
const weeklyDataIngestion = dailyDataIngestion * BigInt(daysPerWeek);
// Subtraction - calculating available storage after backup. Add your code here
const availableStorage = totalServerStorage - backupStorage;
// Division - calculating daily storage per server (converting to BigInt first). Add your code here
const dailyStoragePerServer = dailyDataIngestion / BigInt(numberOfServers);
// Comparison operations with BigInt
// Comparing two BigInt values
// Add your code here
const isBackupLessThanTotal = backupStorage < totalServerStorage;

// Comparing BigInt with regular number (must convert regular number to BigInt)
// Add your code here

const isWeeklyDataLarge = weeklyDataIngestion > BigInt(1000000000000); // > 1TB


// Checking if storage capacity is sufficient for a month
// Add your code here

const monthlyDataIngestion = dailyDataIngestion * 30n;

const isSufficientForMonth = totalServerStorage > monthlyDataIngestion;

// Mixed type comparison requires conversion
// Add your code here

const serverStorageInTB = totalServerStorage / 1099511627776n; // Convert to TB
const isMoreThan8000TB = serverStorageInTB > 8000n;

// DO NOT MODIFY THE CODE BELOW THIS LINE
try {
  console.log("Total server storage (bytes):", totalServerStorage);
  console.log("Storage after one day of ingestion:", storageAfterOneDay);
  console.log("Weekly data ingestion (bytes):", weeklyDataIngestion);
  console.log("Available storage after backup:", availableStorage);
  console.log("Daily storage per server:", dailyStoragePerServer);
  console.log("Is backup less than total storage?", isBackupLessThanTotal);
  console.log("Is weekly data > 1TB?", isWeeklyDataLarge);
  console.log("Is storage sufficient for a month?", isSufficientForMonth);
  console.log("Total storage in TB:", serverStorageInTB);
  console.log("Is total storage > 8000 TB?", isMoreThan8000TB);
} catch {
  console.error("Please read the instructions carefully and try again.");
}
