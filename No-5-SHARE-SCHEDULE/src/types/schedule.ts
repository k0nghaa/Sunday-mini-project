export type TimeSlot = string;
export type UserName = string;

export type UserTimes = Record<UserName, Set<TimeSlot>>;

export type OverlapMap = Record<TimeSlot, number>;
