const pending = Promise.resolve(false);

export default function onlyTheLast(operation, ctx) {
  let last;

  return async (...args) => {
    const current = operation.apply(ctx, args);
    const isLast = () => current === last;
    last = current;

    try {
      const result = await current;
      return isLast() ? result : pending;
    } catch (error) {
      if (isLast()) {
        throw error;
      } else {
        return pending;
      }
    }
  };
}
