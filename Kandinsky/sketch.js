let shapes = [];  //array of circles
let x = windowWidth;
let y = windowHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  shapes.push(new Circle());
  shapes[0].x = 85;
  shapes[0].y = 86;
  shapes[0].size = 15;
  shapes[0].color = color('rgb(173, 146, 31)');

  shapes.push(new Circle());
  shapes[1].x = 108;
  shapes[1].y = 175;
  shapes[1].size = 36;
  shapes[1].color = color('rgb(165, 96, 101)');

  shapes.push(new Circle());
  shapes[2].x = 122;
  shapes[2].y = 497;
  shapes[2].size = 45;
  shapes[2].color = color('rgb(121, 102, 106)');

  shapes.push(new Circle());
  shapes[3].x = 135;
  shapes[3].y = 477;
  shapes[3].size = 15;
  shapes[3].color = 'black';

  shapes.push(new Circle());
  shapes[4].x = 177;
  shapes[4].y = 583;
  shapes[4].size = 33;
  shapes[4].color = color('rgb(200, 171, 59)');

  shapes.push(new Circle());
  shapes[5].x = 222;
  shapes[5].y = 507;
  shapes[5].size = 33;
  shapes[5].color = color('rgb(162, 123, 30)');

  shapes.push(new Circle());
  shapes[6].x = 208;
  shapes[6].y = 593;
  shapes[6].size = 33;
  shapes[6].color = color('rgb(140, 40, 24)');

  shapes.push(new Circle());
  shapes[7].x = 244;
  shapes[7].y = 593;
  shapes[7].size = 33;
  shapes[7].color = color('rgb(93, 56, 28)');

  shapes.push(new Circle());
  shapes[8].x = 259;
  shapes[8].y = 547;
  shapes[8].size = 33;
  shapes[8].color = color('rgb(132, 68, 28)');

  shapes.push(new Circle());
  shapes[9].x = 203;
  shapes[9].y = 417;
  shapes[9].size = 9;
  shapes[9].color = color('rgb(93, 86, 37)');

  shapes.push(new Circle());
  shapes[10].x = 203;
  shapes[10].y = 417;
  shapes[10].size = 6;
  shapes[10].color = 'black';

  shapes.push(new Circle());
  shapes[11].x = 268;
  shapes[11].y = 503;
  shapes[11].size = 9;
  shapes[11].color = 'black';

  shapes.push(new Circle());
  shapes[12].x = 268;
  shapes[12].y = 502;
  shapes[12].size = 5.5;
  shapes[12].color = color('rgb(141, 58, 49)')
  
  shapes.push(new Circle());
  shapes[13].x = 127;
  shapes[13].y = 685;
  shapes[13].size = 10;
  shapes[13].color = color('rgb(173, 109, 109)');

  shapes.push(new Circle());
  shapes[14].x = 172;
  shapes[14].y = 720;
  shapes[14].size = 23;
  shapes[14].color = color('rgb(27, 79, 124)');

  shapes.push(new Circle());
  shapes[15].x = 116;
  shapes[15].y = 752;
  shapes[15].size = 10;
  shapes[15].color = color('rgb(96, 100, 59)');

  shapes.push(new Circle());
  shapes[16].x = 116;
  shapes[16].y = 752;
  shapes[16].size = 7;
  shapes[16].color = 'black';

  shapes.push(new Circle());  //big blue
  shapes[17].x = 375;
  shapes[17].y = 335;
  shapes[17].size = 190;
  shapes[17].color = color('rgb(20, 34, 71)');


  shapes.push(new Circle());
  shapes[18].x = 333;
  shapes[18].y = 295;
  shapes[18].size = 130;
  shapes[18].color = 'black';

  shapes.push(new Circle());
  shapes[19].x = 298;
  shapes[19].y = 500;
  shapes[19].size = 7;
  shapes[19].color = color('rgb(139, 110, 130)');

  shapes.push(new Circle());
  shapes[20].x = 350;
  shapes[20].y = 565;
  shapes[20].size = 5;
  shapes[20].color = 'black';

  shapes.push(new Circle());
  shapes[21].x = 370;
  shapes[21].y = 522;
  shapes[21].size = 41;
  shapes[21].color = color('rgb(114, 106, 125)');

  shapes.push(new Circle());
  shapes[22].x = 408;
  shapes[22].y = 393;
  shapes[22].size = 17;
  shapes[22].color = color('rgb(101, 126, 163)');

  shapes.push(new Circle());
  shapes[23].x = 435;
  shapes[23].y = 447;
  shapes[23].size = 40;
  shapes[23].color = color('rgb(119, 100, 33)');

  shapes.push(new Circle());
  shapes[24].x = 454;
  shapes[24].y = 185;
  shapes[24].size = 50;
  shapes[24].color = color('rgb(136, 95, 122)');

  shapes.push(new Circle());
  shapes[25].x = 465;
  shapes[25].y = 370;
  shapes[25].size = 37;
  shapes[25].color = color('rgb(104, 133, 109)');

  shapes.push(new Circle());
  shapes[26].x = 496;
  shapes[26].y = 445;
  shapes[26].size = 58;
  shapes[26].color = color('rgb(155, 106, 15)');

  shapes.push(new Circle());
  shapes[27].x = 517;
  shapes[27].y = 488;
  shapes[27].size = 7;
  shapes[27].color = 'black';

  shapes.push(new Circle());
  shapes[28].x = 496;
  shapes[28].y = 547;
  shapes[28].size = 50;
  shapes[28].color = color('rgb(44, 84, 118)');

  shapes.push(new Circle());
  shapes[29].x = 435;
  shapes[29].y = 670;
  shapes[29].size = 15;
  shapes[29].color = color('rgb(177, 121, 16)');

  shapes.push(new Circle());
  shapes[30].x = 536;
  shapes[30].y = 475;
  shapes[30].size = 23;
  shapes[30].color = color('rgb(175, 78, 73)');

  shapes.push(new Circle());
  shapes[31].x = 222;
  shapes[31].y = 507;
  shapes[31].size = 33;
  shapes[31].color = color('rgb(162, 123, 30)');

  shapes.push(new Circle());   //big blue green
  shapes[32].x = 613;
  shapes[32].y = 270;
  shapes[32].size = 70;
  shapes[32].color = color('rgb(21, 54, 47)');

  shapes.push(new Circle());
  shapes[33].x = 615;
  shapes[33].y = 270;
  shapes[33].size = 15;
  shapes[33].color = color('rgb(16, 19, 16)');

  shapes.push(new Circle());
  shapes[34].x = 623;
  shapes[34].y = 150;
  shapes[34].size = 31;
  shapes[34].color = color('rgb(197, 166, 81)');

  shapes.push(new Circle());
  shapes[35].x = 710;
  shapes[35].y = 195;
  shapes[35].size = 20;
  shapes[35].color = color('rgb(146, 113, 57)');

  shapes.push(new Circle());
  shapes[36].x = 710;
  shapes[36].y = 195;
  shapes[36].size = 16;
  shapes[36].color = color('rgb(193, 117, 2)');

  shapes.push(new Circle());
  shapes[37].x = 759;
  shapes[37].y = 123;
  shapes[37].size = 12;
  shapes[37].color = color('rgb(149, 40, 27)');

  shapes.push(new Circle());
  shapes[38].x = 627;
  shapes[38].y = 588;
  shapes[38].size = 24;
  shapes[38].color = color('rgb(134, 104, 66)');
  
  shapes.push(new Circle());
  shapes[39].x = 675;
  shapes[39].y = 602;
  shapes[39].size = 27;
  shapes[39].color = color('rgb(175, 147, 129)');

  shapes.push(new Circle());
  shapes[40].x = 675;
  shapes[40].y = 602;
  shapes[40].size = 20;
  shapes[40].color = color('rgb(89, 130, 159)');

  shapes.push(new Circle());  //big pink
  shapes[41].x = 720;
  shapes[41].y = 620;
  shapes[41].size = 80;
  shapes[41].color = color('rgb(146, 140, 161)');

  shapes.push(new Circle());
  shapes[42].x = 724;
  shapes[42].y = 557;
  shapes[42].size = 9;
  shapes[42].color = color('rgb(143, 30, 21)');

  shapes.push(new Circle());
  shapes[43].x = 743;
  shapes[43].y = 559;
  shapes[43].size = 5;
  shapes[43].color = 'black';

  shapes.push(new Circle());
  shapes[44].x = 803;
  shapes[44].y = 622;
  shapes[44].size = 11;
  shapes[44].color = color('rgb(144, 116, 40)');

  shapes.push(new Circle());
  shapes[45].x = 298;
  shapes[45].y = 500;
  shapes[45].size = 7;
  shapes[45].color = color('rgb(139, 110, 130)');

  shapes.push(new Circle());
  shapes[46].x = 774;
  shapes[46].y = 446;
  shapes[46].size = 15;
  shapes[46].color = color('rgb(118, 137, 150)');

  shapes.push(new Circle());
  shapes[47].x = 774;
  shapes[47].y = 446;
  shapes[47].size = 13;
  shapes[47].color = color('rgb(24, 41, 92)');

  shapes.push(new Circle());
  shapes[48].x = 692;
  shapes[48].y = 724;
  shapes[48].size = 10;
  shapes[48].color = color('rgb(175, 143, 22)');

  shapes.push(new Circle());
  shapes[49].x = 671;
  shapes[49].y = 774;
  shapes[49].size = 18;
  shapes[49].color = color('rgb(126, 34, 26)');

  shapes.push(new Circle());
  shapes[50].x = 765;
  shapes[50].y = 805;
  shapes[50].size = 14;
  shapes[50].color = color('rgb(28, 65, 93)');
  

}

function draw() {
  background('black');
  
  for (let i = 0; i < 50; i ++) {  //create objects
    shapes[i].show();
    shapes[i].x = shapes[i].x + random(-1, 1);
    shapes[i].y = shapes[i].y + random(-1, 1);
    shapes[i].size = shapes[i].size + random(-1, 1);
  }
  /*
  var hit = false;
	ellipse(200,200,100,100);
	ellipse(mouseX,mouseY,150,150);

	hit = collideCircleCircle(mouseX,mouseY,150,200,200,100)

	print("colliding? " + hit);*/

}



