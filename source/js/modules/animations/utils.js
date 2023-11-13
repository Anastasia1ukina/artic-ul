export const killTl = (tl, elements) => {
  gsap.set(elements, {
    clearProps: 'all',
  });
  tl.kill();
};
