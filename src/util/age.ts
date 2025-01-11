function calculateAge(birth: string): number {
  // 입력 형식 검증
  if (!/^\d{6}$/.test(birth)) {
    throw new Error("유효하지 않은 생년월일 형식입니다.");
  }

  // 생년월일 해석
  const currentYear = new Date().getFullYear();
  const prefix =
    parseInt(birth.slice(0, 2), 10) <= parseInt(String(currentYear).slice(2))
      ? 2000
      : 1900;
  const birthYear = prefix + parseInt(birth.slice(0, 2), 10);
  const birthMonth = parseInt(birth.slice(2, 4), 10) - 1; // Month는 0부터 시작
  const birthDay = parseInt(birth.slice(4, 6), 10);

  // 현재 날짜와 생년월일 비교
  const today = new Date();
  let age = today.getFullYear() - birthYear;

  const birthDate = new Date(birthYear, birthMonth, birthDay);
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export { calculateAge };
