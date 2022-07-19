// 스크립트 로딩이 완료된 후부터 내용을 시작
window.onload = function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Ball {
    constructor(x, y) { // ball의 기본 속성들을 정의
      this.x = x; // x좌표
      this.y = y; // y좌표
      this.c = 'dodgerblue'; // 시작 시 공의 색깔
      this.size = 20; // 공의 반지름
      this.power = 5; // 공의 움직임 세기
      this.gravity = this.power; // 공이 상하로 움직이는 값
      this.directionX = 5; // 공이 좌우로 움직이는 값
    }

    update() { // 프레임마다 속성들을 변화시킴
      // y값의 변동을 계산한다.
      this.y += this.gravity; 
      this.gravity += 0.2; // 중력 값
      console.log(this.gravity); 
      if(this.y + this.size >= canvas.height || this.y - this.size <= 0) { // 상하 바운드 처리
        this.gravity *= -0.9; // 상하에 닿으면 방향을 전환
      }

      // x값의 변동을 계산한다.
      this.x += this.directionX;
      this.directionX *= 0.995;
      if(this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX *= -1;
      }
    }

    // 넘어온 속성값대로 캔버스에 원을 그려준다.
    draw() {
      context.fillStyle = this.c;
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
    }
  }

  // 그려질 공의 초기 좌표를 설정한다.
  function init() {
    ball = new Ball(canvas.width * 0.5, canvas.height * 0.5);
  }

  // 매 프레임마다 벌어지는 이벤트들.
  function animate() {
    context.fillStyle = 'rgba(255, 255, 255, 0.5)';
    context.fillRect(0, 0, canvas.width, canvas.height); // 캔버스 전체를 색칠해서 내용을 지워준다.
    ball.update(); // ball의 좌표 등을 업데이트 한다.
    ball.draw(); // 업데이트 된 내용으로 ball을 새로 그린다.
    requestAnimationFrame(animate);
  }

  init(); // 공의 초기 좌표 설정
  animate(); // 프레임마다 공을 그린다.
}