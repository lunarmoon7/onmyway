// 슬라이드 전체 크기
const slide = document.querySelector('.slide');
let slideWidth = slide.clientWidth;

// 버튼 element 가져오기
const prevBtn = document.querySelector('.slide_prev_btn');
const nextBtn = document.querySelector('.slide_next_btn');

// 슬라이드 전체 element 가져오기
const slideItems = document.querySelectorAll('.slide_item');
// 현재 슬라이드의 위치가 전체 슬라이드의 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 현재 슬라이드의 위치를 담는 변수
let currentSlidePosition = 1;
// 페이지네이션 element 가져오기
const pagination = document.querySelector('.slide_pagination');

// 기존 ul에는 li가 없다
// ul안에 li를 슬라이드 개수만큼 작성해준다.
for(let i = 0; i < maxSlide; i++) {
  if(i === 0) pagination.innerHTML += `<li class="active">•</li>`
  else pagination.innerHTML += `<li>•</li>`;
}

// 모든 li element 가져오기
const paginationItems = document.querySelectorAll('.slide_pagination > li');
console.log(paginationItems);

// next 버튼 element에 이벤트 추가
nextBtn.addEventListener("click", () => {
  // 현재 슬라이드 위치값 변경
  currentSlidePosition++;

  // 마지막 슬라이드에서 버튼 눌렀을 때 다음으로 넘어가지 못하도록
  if(currentSlidePosition <= maxSlide) {

    // 슬라이드를 이동시키기 위한 offset 계산 
    // css에서 .slide_item에 position: relative 준 이유
    const offset = slideWidth * (currentSlidePosition - 1);

    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

    // 슬라이드 이동 시 현재 활성화(active)된 pagination 변경
    // 현재 li에만 class="active"를 붙인다.
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currentSlidePosition - 1].classList.add("active");
  } else {
    currentSlidePosition--;
  }
});

// prev 버튼 element에 이벤트 추가
prevBtn.addEventListener("click", () => {
  // 현재 슬라이드의 위치값 변경
  currentSlidePosition--;
  
  // 첫번째 슬라이드에서 버튼 눌렀을 때 이전으로 넘어가지 못하도록
  if(currentSlidePosition > 0) {

    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currentSlidePosition - 1);

    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

    // 슬라이드 이동 시 현재 활성화(active)된 pagination 변경
    // 현재 li에만 class="active"를 붙인다.
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currentSlidePosition - 1].classList.add("active");
  } else {
    currentSlidePosition++;
  }
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경한다.
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동
for(let i = 0; i < maxSlide; i++) {
  // 각 페이지네이션마다 이벤트 추가
  paginationItems[i].addEventListener("click", () => {

    // 시작 위치가 1이기 때문에 +1을 해준다.
    currentSlidePosition = i + 1;

    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currentSlidePosition - 1);

    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currentSlidePosition - 1].classList.add("active");
  });
}


