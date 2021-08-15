class Security{
   constructor(){
 
    this.button1 = createButton('Check')
    this.input1 = createInput('Code')
    this.title1 = createElement('h5')
    this.hint1 = createElement('h5')

    this.button2 = createButton('Check')
    this.input2 = createInput('Code')
    this.title2 = createElement('h5')
    this.hint2 = createElement('h5')

    this.button3 = createButton('Check')
    this.input3 = createInput('Code')
    this.title3 = createElement('h5')
    this.hint3 = createElement('h5')


   }
   display(){
   this.title1.html("R E V B A I L A");
   this.title1.position(100,30)
   this.title1.style('font-size', '20px');
   this.title1.style('color', 'white');  
   this.hint1.html("Hint:Always changing, not constant !!") 
   this.hint1.position(100,70)
   this.hint1.style('font-size', '15px');
   this.hint1.style('color', 'white');    
   this.input1.position(100,130);
   this.input1.style('width', '250px');
   this.input1.style('height', '20px');
   this.button1.position(100,170);
   this.button1.style('width', '100px');
   this.button1.style('height', '30px');
   
   this.title2.html("C U T N I F O N");
   this.title2.position(800,190)
   this.title2.style('font-size', '20px');
   this.title2.style('color', 'white');   
   this.hint2.html("Hint:Performs a particular task!!") 
   this.hint2.position(800,230)
   this.hint2.style('font-size', '15px');
   this.hint2.style('color', 'white');    
   this.input2.position(800,290);
   this.input2.style('width', '250px');
   this.input2.style('height', '20px');
   this.button2.position(800,330);
   this.button2.style('width', '100px');
   this.button2.style('height', '30px');
  
   this.title3.html("A T E D A S B A");
   this.title3.position(100,370)
   this.title3.style('font-size', '20px');
   this.title3.style('color', 'white');  
   this.hint3.html("Hint:Stores all information!!") 
   this.hint3.position(100,410)
   this.hint3.style('font-size', '15px');
   this.hint3.style('color', 'white');    
   this.input3.position(100,470);
   this.input3.style('width', '250px');
   this.input3.style('height', '20px');
   this.button3.position(100,520);
   this.button3.style('width', '100px');
   this.button3.style('height', '30px');
  
   
 this.button1.mousePressed(()=>{
     score++;
 })

 this.button2.mousePressed(()=>{
   score++;
})

this.button3.mousePressed(()=>{
   score++;
   this.button1.hide()
    this.input1.hide()
    this.title1.hide()
    this.hint1.hide()
    this.button2.hide()
    this.input2.hide()
    this.title2.hide()
    this.hint2.hide() 
    this.button3.hide()
    this.input3.hide() 
    this.title3.hide()
    this.hint3.hide() 

})

   }

}