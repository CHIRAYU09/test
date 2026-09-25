// Says "Hi" and responds "Hello how are you" at exactly 5:30 AM every day.
//
// Usage:
//   node scripts/morning-greeting.js
//   TZ=Asia/Kolkata node scripts/morning-greeting.js   # pin the time zone
//
// The process stays running and fires once per day at 05:30:00 local time.

const HOUR = 5;
const MINUTE = 30;

function nextRunTime(now = new Date()) {
  const next = new Date(now);
  next.setHours(HOUR, MINUTE, 0, 0);
  if (next <= now) {
    next.setDate(next.getDate() + 1);
  }
  return next;
}

function greet() {
  const stamp = new Date().toLocaleString();
  console.log(`[${stamp}] Hi`);
  console.log(`[${stamp}] Hello how are you`);
}

function schedule() {
  const next = nextRunTime();
  console.log(`Next greeting scheduled for ${next.toLocaleString()}`);
  setTimeout(() => {
    greet();
    schedule();
  }, next.getTime() - Date.now());
}

schedule();
