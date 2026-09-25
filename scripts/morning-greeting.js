// Says "Hi" and responds "Hello how are you" at exactly 5:30 AM.
//
// Usage:
//   node scripts/morning-greeting.js          # stay running, greet every day
//   node scripts/morning-greeting.js --once   # wait for today's 5:30, greet, exit
//   TZ=Asia/Kolkata node scripts/morning-greeting.js   # pin the time zone
//
// --once is what the GitHub Actions workflow uses: the job starts a little
// before 5:30 and waits here so the greeting lands on the exact minute. If the
// job starts late (after 5:30) or is run manually at another time, it greets
// immediately instead.

const HOUR = 5;
const MINUTE = 30;

function todayRunTime(now = new Date()) {
  const run = new Date(now);
  run.setHours(HOUR, MINUTE, 0, 0);
  return run;
}

function nextRunTime(now = new Date()) {
  const next = todayRunTime(now);
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

// Only wait for 5:30 if it's close; otherwise (late or manual run) greet now.
const MAX_WAIT_MS = 45 * 60 * 1000;

function runOnce() {
  const target = todayRunTime();
  const delay = target.getTime() - Date.now();
  if (delay <= 0 || delay > MAX_WAIT_MS) {
    greet();
    return;
  }
  console.log(`Greeting at ${target.toLocaleString()} (in ${Math.round(delay / 1000)}s)`);
  setTimeout(greet, delay);
}

if (process.argv.includes("--once")) {
  runOnce();
} else {
  schedule();
}
