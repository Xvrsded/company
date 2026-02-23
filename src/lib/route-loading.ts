export async function routeLoadingDelay(ms = 650) {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}
