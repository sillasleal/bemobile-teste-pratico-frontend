export const formatPhoneNumber = (phone: string) => {
  const phoneNumber = phone.replace(/[^\d]/g, '');
  const countryCode = phoneNumber.slice(0, 2);
  const areaCode = phoneNumber.slice(2, 4);
  const firstPart = phoneNumber.slice(4, 9);
  const secondPart = phoneNumber.slice(9, 13);
  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
};
