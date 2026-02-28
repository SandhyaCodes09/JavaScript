// Scenario: User Permission System for a Corporate Application

// User Status Flags
// Add your code here
const isLoggedIn = true;
const isEmailVerified = true;
const isPremiumUser = false;
const isAdmin = false;

// Account Status
// Add your code here

const accountActive = true;
const accountSuspended = false;
const hasPendingPayments = true;
const hasCompletedTraining = false;

// Access Level Permissions
// Add your code here

const canAccessDashboard = isLoggedIn && isEmailVerified && accountActive;
const canAccessAdminPanel = isLoggedIn && isAdmin && !accountSuspended
const canAccessPremiumFeatures = isPremiumUser && !hasPendingPayments;
const canModifySettings = isAdmin || (isPremiumUser && hasCompletedTraining);

// Security Checks
// Add your code here

const needsPasswordReset = false;
const hasSecurityAlert = true;
const isInRestrictedRegion = false;
const hasTwoFactorEnabled = true;

// System Access Decisions
// Add your code here

const allowSystemAccess = isLoggedIn && !accountSuspended && !needsPasswordReset;
const requiresAdditionalVerification = hasSecurityAlert || isInRestrictedRegion;
const canPerformSensitiveOperations = hasTwoFactorEnabled && isAdmin && !hasSecurityAlert;



// Notification Settings
// Add your code here

const showPremiumUpgrade = isLoggedIn && !isPremiumUser && !hasPendingPayments;
const showSecurityWarning = isLoggedIn && (hasSecurityAlert || !hasTwoFactorEnabled);
const showTrainingReminder = isLoggedIn && !hasCompletedTraining && (isAdmin || isPremiumUser);

// DO NOT MODIFY THE CODE BELOW THIS LINE
try {
  console.log("User Access Status:");
  console.log("Can access dashboard:", canAccessDashboard);
  console.log("Can access admin panel:", canAccessAdminPanel);
  console.log("Can access premium features:", canAccessPremiumFeatures);
  console.log("Can modify settings:", canModifySettings);

  console.log("\nSystem Security Status:");
  console.log("System access allowed:", allowSystemAccess);
  console.log(
    "Requires additional verification:",
    requiresAdditionalVerification
  );
  console.log(
    "Can perform sensitive operations:",
    canPerformSensitiveOperations
  );

  console.log("\nNotification Status:");
  console.log("Show premium upgrade prompt:", showPremiumUpgrade);
  console.log("Show security warning:", showSecurityWarning);
  console.log("Show training reminder:", showTrainingReminder);
} catch {
  console.error("Please read the instructions carefully and try again.");
}
