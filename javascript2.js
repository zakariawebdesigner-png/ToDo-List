     const h1=document.getElementById("h1");
    const task_info=document.getElementById("task-informations");
    const creation=document.getElementById("creation");
    const pop_up_sound=new Audio("sound/pop-up.wav");
        const done_task=new Audio("sound/done-task.mp3");
        const alert_sound= new Audio("sound/alert.wav");
         const delete_alert=document.getElementById("delete-alert2");
const alert_message=document.getElementById("alert");
const yes=document.getElementById("yes");
const no=document.getElementById("no");
const arrow=document.getElementById("arrow");
const arrow_div=document.getElementById("arrow-div");
const search_and_pic=document.getElementById("search-and-pic");
const Salu=document.getElementById("Salutate-notes");
 const ai_voice=new Audio("sound/Ai-voice.mp3");


          const delete_all=document.getElementById("delete-all");
const no_completed_text=document.getElementById("no-completed-text");
const x_sign=document.getElementById("x-sign");
    const priority=document.getElementById("priority-select");
    const task_name=document.getElementById("name-task");
     const date_inpute=document.getElementById("date-input");
      const tasks_space=document.getElementById("tasks-space");
     const missions_container=document.getElementById("missions-container-id");
         const delete_task=new Audio("sound/delete-task.mp3");
        const create=document.getElementById("create");
        const pop_up_leave_sound=new Audio("sound/pop-leave.mp3");
    const  completed_missions_list=document.getElementById("completed-missions-list");
    const total_p=document.getElementById("total-p");
   const done_p=document.getElementById("done-p");
 const  pending_p=document.getElementById("pending-p");
   const high_p=document.getElementById("high-p");
   const missions_container_2=document.getElementById("missions-container-2");
const Dashboard=document.getElementById("Dashboard");
/*this removes the auto margin at the page load*/
history.scrollRestoration = "manual";              
/*this removes the auto margin at the page load*/
const SettingsBar=document.getElementById("SettingsBar");
const gearBtn= document.getElementById("gearBtn");

     
   
     let isClickedSettings=false;
gearBtn.addEventListener("click",(e)=>{

e.stopPropagation();

if(!isClickedSettings){
  SettingsBar.classList.remove("SettingsAnimation2");

SettingsBar.classList.add("SettingsAnimation");
isClickedSettings=!isClickedSettings;

}

else{
  SettingsBar.classList.remove("SettingsAnimation");

SettingsBar.classList.add("SettingsAnimation2");
isClickedSettings=!isClickedSettings;

}
  

});


document.addEventListener("click",()=>{




});

       
          updatecounter();


    username = localStorage.getItem("username");
   h1.textContent="Hello "+ `${username}`;


 

  creation.addEventListener("click",function(event){
    event.preventDefault();
         
        task_info.classList.remove("hide");

       task_info.classList.add("show");
      pop_up_sound.play();
      task_info.style.pointerEvents="auto";
     
  }


);


        
task_info.addEventListener("submit",function(event){

  event.preventDefault();
        updatecounter();
  
   
  const mission= document.createElement("div");
  
  mission.className="mission";
   mission.classList.add("mission");
   

    const radio= document.createElement("input");
    radio.type="radio";
    radio.classList.add("radio");
    mission.appendChild(radio);

const mission_name= document.createElement("p");
   mission_name.classList.add("mission-name");
     mission.appendChild(mission_name);

       missions_container_2.appendChild(mission);
        

    const mission_date= document.createElement("p");
     mission_date.classList.add("mission-date");
        mission.appendChild(mission_date);


           
         if(priority.value == "High"){
          

            mission.classList.add("high-priority-color");
    mission_name.style.color='white';
        mission_date.style.color='white';

      
      updatecounter();
} 



       else if(priority.value=="Medium"){

            mission.classList.add("medium-priority-color");
                 mission_name.style.color='white';
        mission_date.style.color='white';

 
        }

else if(priority.value=="Low"){

            mission.classList.add("low-priority-color");
            mission_name.style.color='white';
        mission_date.style.color='white';

        }



        const delete_button= document.createElement("button");
      delete_button.textContent="Delete";
      delete_button.classList.add("delete-button");
       mission.appendChild(delete_button);


mission.dataset.priority = priority.value;



     missions_container_2.addEventListener("click",(event)=>{
              if(event.target.classList.contains("delete-button")){
                 const mission = event.target.closest(".mission");
                      mission.remove();
              
                 completedMissionsVisibleState();
               
             updatecounter();
              
          
           
              }
     

            });





             completed_missions_list.addEventListener("click",(event)=>{
              if(event.target.classList.contains("delete-button")){
                 const mission = event.target.closest(".mission");
                      mission.remove();
              
                 completedMissionsVisibleState();
            
                       updatecounter();
              }
     

            });

     






      


  mission_name.textContent=task_name.value;
  mission_date.textContent=date_inpute.value;
         task_info.classList.remove("show");

task_info.classList.add("hide");
    pop_up_leave_sound.play();
    task_info.style.pointerEvents="none";



     



let clicked=false;

    mission.addEventListener("click",function(event){
     

           if(event.target.classList.contains("delete-button")) return;

           
               event.preventDefault();
                   if(!clicked){
                           mission.style.pointerEvents="none";
                               delete_button.style.pointerEvents="auto";

                             }
                    clicked=!clicked;

                 

   
                      radio.checked=true;

             mission_name.style.textDecoration="line-through";

               done_task.currentTime="0";
                  done_task.play();
   
                     mission.classList.remove("high-priority-color");
                        mission.classList.remove("medium-priority-color");
                            mission.classList.remove("low-priority-color");

        mission.classList.add("change-background");

 


mission.style.width="30rem";
mission.style.paddingRight="1rem";
  mission.style.marginLeft="0.7rem";

completed_missions_list.appendChild(mission);
                   updatecounter();

    completedMissionsVisibleState();
    if(missions_container_2.children.length==0){
 setTimeout(() => {
  ai_voice.currentTime = 0;
  ai_voice.play();
}, 500); // 1000ms = 1 second
}

    });


    



});


 let day_time= new Date();

 let time= day_time.getHours();



 if(time>=5 && time<=11){

    h1.textContent="Good Morning "+`${username}`;

 }

 else if(time>11 && time<=15){

    h1.textContent="Good AfterNoon "+`${username}`;


 }

 else if(time>15 && time<=19){

    h1.textContent="Good Eavening  "+`${username}`;

 }

 else{

        h1.textContent="Good Night   "+`${username}`;

 }


  const btn_delete=document.getElementById("btn-delete");


     btn_delete.addEventListener("click",function(){


      task_info.classList.remove("show");
            task_info.classList.add("hide");
           task_info.style.pointerEvents="none";
            delete_task.play();

     });







let delete_all_isPressed=false;
delete_all.addEventListener("click",function(){

 delete_all_isPressed=!delete_all_isPressed;
             if(missions_container_2.children.length>0 || completed_missions_list.children.length>0  ){
                 
                 alert_message.style.display="block";
                 alert_message.style.pointerEvents="auto";
                 alert_sound.currentTime=0;
                  alert_sound.play();
                   
               }
               else{
                alert_message.style.display="none";
                  alert_message.style.pointerEvents="none";
               
                      alert_sound.pause();

               }
              
                
               
            
         });


    no.addEventListener("click",function(){
           
           alert_message.style.display="none";
           alert_message.style.pointerEvents="none";

    });

     yes.addEventListener("click",function(){
      alert_message.style.display="none";
      alert_message.style.pointerEvents="none";
                while(completed_missions_list.children.length!=0){
                    completed_missions_list.children[0].remove();
                    
            }
          
                completedMissionsVisibleState();

      while(missions_container_2.children.length!=0 ){
                    missions_container_2.children[0].remove();

            }
                completedMissionsVisibleState();
             

            updatecounter();


         
    });








delete_alert.addEventListener("click",function(){

alert_message.style.display="none";
 alert_message.style.pointerEvents="none";

});

  let isclicked=false;
 const searchBar= document.createElement("input");
 searchBar.type="search";
 searchBar.id="search-bar";
   search_and_pic.appendChild(searchBar);
   
     searchBar.className="search-bar";


arrow.addEventListener("click",function(){
 

if(!isclicked){
   arrow.classList.remove("vice-versa-arrow-animation");
     arrow.classList.add("arrow-animation");
   search_and_pic.classList.remove("move-input-reverse");
search_and_pic.classList.add("move-input");

}
else{
   arrow.classList.remove("arrow-animation");

   arrow.classList.add("vice-versa-arrow-animation");
search_and_pic.classList.remove("move-input");

search_and_pic.classList.add("move-input-reverse");

}
isclicked=!isclicked;


});



searchBar.addEventListener("keydown",function(event){
  if( event.key==="Enter"){


    const query=searchBar.value.toLowerCase().trim();
      const missions= completed_missions_list.querySelectorAll(".mission");

  for(let i=0;i<missions.length;i++){
        const task=missions[i];
      const name=task.querySelector(".mission-name").textContent.toLowerCase().trim();
        

         if(name===(query) ){
        
               missions_container_2.appendChild(task);
               task.style.pointerEvents="auto";
      
               updatecounter();
            
              
              let task_name2=task.querySelector(".mission-name");
               task_name2.style.textDecoration="none";
  
                 
                 const priority=task.dataset.priority;
  if(priority == "High"){
         task.classList.remove("change-background");
                  task.classList.add("high-priority-color");

      task_name2.style.color='white';
           }


       else if(priority=="Medium"){
                         task.classList.remove("change-background");

            task.classList.add("medium-priority-color");
                task_name2.style.color='white';
           }

else if(priority=="Low"){

            task.classList.remove("change-background");
                          task.classList.add("low-priority-color");

           task_name2.style.color='white';
                   
        }
                       
                              
          
          
         }
                     task.style.width=" 37rem";
          task.style.marginLeft="1.8rem";
            completedMissionsVisibleState();
          }

      


      }

});






 Salu.textContent="Hi "+`${username}`;












  






 
function completedMissionsVisibleState(){

if(completed_missions_list.children.length==0){

                no_completed_text.style.display="block";
              x_sign.style.display="block";

     }

else{

                no_completed_text.style.display="none";
              x_sign.style.display="none";

     }

}



function updatecounter(){
const pendingCounter= missions_container_2.querySelectorAll(".mission").length;
const doneCounter= completed_missions_list.querySelectorAll(".mission").length;
const highCounter= completed_missions_list.querySelectorAll(".mission[data-priority='High']").length;
  total_p.textContent =pendingCounter+doneCounter ;
      
    pending_p.textContent = pendingCounter;
    done_p.textContent = doneCounter;
    high_p.textContent = highCounter;

}





/*window.addEventListener("load", function () {

const username = localStorage.getItem("username");
if (!username) return;

let hasSpoken = false;

function speakOnce() {
    if (hasSpoken) return;
    hasSpoken = true;

    const voices = speechSynthesis.getVoices();
    if (voices.length === 0) return;

    const speech = new SpeechSynthesisUtterance(
        "Hello " + username + ". Welcome to your tasks."
    );

    speech.voice =
        voices.find(v => v.name.toLowerCase().includes("david")) ||
        voices[0];

    speech.pitch = 0.4;
    speech.rate = 0.85;

    speechSynthesis.speak(speech);
}

speechSynthesis.onvoiceschanged = speakOnce;

// fallback (safe)
setTimeout(speakOnce, 500);

});*/
  



 