export const formatDateTimeToReadableString = (
  date: Date,
  isShowTimeDetails?: boolean
): string => {
  const formatDate = (date: Date) =>
    `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;

  const formatTime = (date: Date) =>
    `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

  return isShowTimeDetails
    ? `${formatDate(date)} ${formatTime(date)}`
    : formatDate(date);
};
