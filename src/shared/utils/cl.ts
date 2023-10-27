const cl = (...args: (string | undefined | null | false)[]) => {
  return args
    .filter((el) => el !== undefined && el !== false && el !== null)
    .join(" ")
}

export { cl }
