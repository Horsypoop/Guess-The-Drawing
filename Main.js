var random_number = Math.random();
var timer_counter = 0;
var timer_check = '';
var drawn_cketch = '';
var answer_holder = '';
var score = 0;

Math.floor((Math.random() * quick_draw_data_set.length) + 1);
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
 document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;

 function draw(){
     check_sketch();
     if(drawn_sketch==sketch){
         
     }
 }
 function update_canvas(){
     background("white");
 }
 function setup(){
     canvas = canvasCreate(280,280);
 }