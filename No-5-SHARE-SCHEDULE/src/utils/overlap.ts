import type { UserTimes, OverlapMap } from "../types/schedule";

export function calculateOverlap(userTimes: UserTimes): OverlapMap {
  const overlap: OverlapMap = {};

  for (const times of Object.values(userTimes)) {
    for (const time of times) {
      overlap[time] = (overlap[time] ?? 0) + 1;
    }
  }

  return overlap;
}
