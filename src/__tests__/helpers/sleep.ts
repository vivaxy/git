/**
 * @since 2024-07-10
 * @author vivaxy
 */
export function sleep(timeout: number = 0) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
