export const useCurrentHook = (current: number, anyDay: number) => {
  const isCurrentYear
  = new Date(current).getFullYear() === new Date(anyDay).getFullYear();

  const isCurrentMonth
  = new Date(current).getMonth() === new Date(anyDay).getMonth()
  && new Date(current).getFullYear() === new Date(anyDay).getFullYear();

  const isCurrentDay
   = new Date(current).getDate() === new Date(anyDay).getDate()
   && new Date(current).getMonth() === new Date(anyDay).getMonth()
   && new Date(current).getFullYear() === new Date(anyDay).getFullYear();

  return { isCurrentDay, isCurrentMonth, isCurrentYear };
};
