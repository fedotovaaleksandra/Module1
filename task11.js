const arr = Array(10);

for (let i = 0; i < 10; i++) {
    arr[i] = [...Array(10)].map((_, j) => i * j);
}

console.log(arr)

const t = '';

for (let i = 0; i < 10; i++) {
    t += arr[i].slice(1).join(' ') + '\n';
}

console.log(t);