// careers.js

export function calculateCareerDuration(startDate) {
  const currentDate = new Date();
  const start = new Date(startDate);
  if (isNaN(start.getTime())) {
    throw new Error('Invalid start date');
  }
  
  let years = currentDate.getFullYear() - start.getFullYear();
  let months = currentDate.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years}년 ${months}개월 차`;
}

function init() {
  document.addEventListener('DOMContentLoaded', () => {
    const durationElement = document.querySelector('.careers-duration');
    
    if (durationElement) {
      const finishDateElement = durationElement.querySelector('.final-date');
      if (finishDateElement) {
        try {
          finishDateElement.textContent = calculateCareerDuration('2021-05-04');
        } catch (error) {
          console.error('Error calculating career duration:', error);
        }
      } else {
        console.warn('Element with class "finish-date" not found.');
      }
    } else {
      console.warn('Element with class "careers-duration" not found.');
    }
  });
}

function handleResize() {
  // 필요한 경우 크기 조정 처리
  console.log('Window resized, handle if necessary');
}

export default {
  init,
  handleResize
};
