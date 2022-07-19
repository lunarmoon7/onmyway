// 스크립트 로딩이 완료된 후부터 내용을 시작
window.onload = function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = window.innerWidth - 15;
  canvas.height = window.innerHeight - 15;

  balls = [];
  ballNumber = 50;
  
  class Ball {
    constructor(x, y) { // ball의 기본 속성들을 정의
      this.x = x; // x좌표
      this.y = y; // y좌표
      this.c = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 +')'; // 시작 시 공의 색깔
      this.size = Math.random() * 10 + 10; // 공의 반지름
      this.angle = (Math.random() * 360) * ((Math.PI * 2) / 360);
      this.power = Math.random()*3+2; // 공의 움직임 세기
      // this.gravity = this.power; // 공이 상하로 움직이는 값
      this.weight = this.power * Math.sin(this.angle);
      this.directionX = this.power * Math.cos(this.angle); // 공이 좌우로 움직이는 값
    }

    update() { // 프레임마다 속성들을 변화시킴
      this.y += this.weight; 
      this.x += this.directionX;
      this.weight += 0.1; // 프레임마다 떨어질때의 가속도 증가
      this.directionX *= 0.997; // 가로방향 속도 감소. 
      if(this.y+this.size>canvas.height || this.y-this.size<0){ // 세로 방향 바운드 처리
        this.weight *= -0.8; // y 방향을 바꿔주면서 점차 바운스가 감소하게
        if(Math.abs(this.weight)<0.9){this.y = canvas.height-this.size; // 바운드가 어느 정도 이하가 되면 더 이상 바운드 안하게, 즉, 바닥에 붙게 한다.
        this.weight =1;} else { this.y -=1 ;} // 
        };
      if(this.x>canvas.width-this.size || this.x-this.size < 0 ) { // 가로 방향 바운드 처리 
        this.directionX *= -1; // x 방향 전환.  
      } 
    }

    // 넘어온 속성값대로 캔버스에 원을 그려준다.
    draw() {
      context.fillStyle= this.c;
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI*2, true);
      context.closePath();
      context.fill();
      context.strokeStyle = 'black';
      context.strokeWidth = 4;
      context.stroke();
    }
  }

  // 그려질 공의 초기 좌표를 설정한다.
  function init() {
    for(i=0;i<ballNumber;i++){
      balls[i] = new Ball(canvas.width*0.5, canvas.height*0.5)
    }
  }

  // 매 프레임마다 벌어지는 이벤트들.
  function animate() {
    context.fillStyle = 'rgba(255,255,255,0.5)';
    context.fillRect(0,0,canvas.width,canvas.height);
    for(i=0;i<ballNumber;i++){
      balls[i].update();
      balls[i].draw();
    }

    window.addEventListener('resize',function(){ // 화면 크기가 변하면 캔버스 크기도 변경해줌
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;
    })
    requestAnimationFrame(animate);
  }

  init(); // 공의 초기 좌표 설정
  animate(); // 프레임마다 공을 그린다.
}