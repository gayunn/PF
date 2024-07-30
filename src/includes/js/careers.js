// careers.js
// 기간 계산 함수
// careers.js

const CareersModule = (function() {
  // 기간 계산 함수
  function calculateDuration(startDate) {
    const currentDate = new Date();
    const start = new Date(startDate);
    const difference = currentDate - start;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    let years = Math.floor(days / 365);
    let months = Math.floor((days % 365) / 30);
    let remainingDays = days % 30;
    
    let result = '';
    if (years > 0) result += `${years}년 `;
    if (months > 0) result += `${months}개월 `;
    // if (remainingDays > 0) result += `${remainingDays}일`;
    
    return result.trim();
  }

  // 기간 표시 함수
  function displayDurations() {
    const finalDateElements = document.querySelectorAll('.final-date');
    
    finalDateElements.forEach(element => {
      const startDate = element.getAttribute('data-start-date');
      
      if (startDate) {
        const duration = calculateDuration(startDate);
        element.textContent = duration;
      } else {
        console.error('시작 날짜가 지정되지 않았습니다.');
      }
    });
  }

  // 초기화 
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', displayDurations);
    } else {
      displayDurations();
    }
  }

  // API
  return {
    init: init
  };
})();

// 모듈 내보내기
export default CareersModule;