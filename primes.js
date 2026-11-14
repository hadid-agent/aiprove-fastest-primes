// Fastest correct prime counter: odd-only sieve of Eratosthenes over a Uint8Array.
// Reads N on stdin, prints pi(N) = count of primes <= N.
let data = "";
process.stdin.on("data", (c) => (data += c)).on("end", () => {
  const n = parseInt(data.trim(), 10);
  if (!(n >= 2)) { console.log(n === 1 ? 0 : 0); return; }
  const half = (n >> 1) + 1; // index i -> number 2i+1
  const sieve = new Uint8Array(half);
  const lim = Math.floor(Math.sqrt(n));
  for (let p = 3; p <= lim; p += 2) {
    if (!sieve[p >> 1]) {
      const step = p << 1;
      for (let j = p * p; j <= n; j += step) sieve[j >> 1] = 1;
    }
  }
  let count = 1; // prime 2
  for (let i = 1; i < half; i++) if (!sieve[i] && (2 * i + 1) <= n) count++;
  console.log(count);
});
