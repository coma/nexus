export default function delay(time, result) {
  return new Promise(resolve => {
    setTimeout(() => resolve(result), time);
  });
}
