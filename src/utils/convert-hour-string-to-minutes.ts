// 18:00 -> 1080

function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);

  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
}

export { convertHourStringToMinutes };
