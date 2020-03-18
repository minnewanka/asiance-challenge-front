const formatDateKR = date => {
  return date.toLocaleString('ko-KR', { timeZone: 'UTC' });
};

export default formatDateKR;
