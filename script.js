let endDate="06 July 2025 02:25 AM";
// const endDate="06/16/2024"
document.getElementById("end-date").innerText=endDate;

const inputs=document.querySelectorAll(".clock-div input");
// console.log(inputs);

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;

    if(diff<0) return;

    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor(diff%60);
}


setInterval(()=>{
    clock();
},999);

const edit=document.getElementById("edit-btn");

function editDate(){
    
    const clock = document.getElementById("clock");
    // console.log(clock);
    // console.log(document.getElementById("clock"));
    clock.style.display="none";
    document.getElementById("change-date").style.display="flex";
    
    
}


function updateDate(){

    const update='';

    const newDate=document.getElementById("Date").value;
    const newTime=document.getElementById("Time").value;

    const changeDateDiv=document.getElementById("change-date");

    if(newDate==='' || newTime ===''){
        changeDateDiv.style.display="none";
        document.getElementById("clock").style.display="flex";
        return;
    }
    else{
        endDate=dateFormat(newDate)+" "+ timeFormat(newTime);
        document.getElementById("end-date").innerText=endDate;
        changeDateDiv.style.display="none";
        document.getElementById("clock").style.display="flex";
        return;
    }


    // console.log(dateFormat(newDate)+" "+ timeFormat(newTime));

    function dateFormat(date){

        let arr=date.split("-");
        arr.reverse();

        function month(month){

            switch(month){
                case '01':return 'January';

                case '02':return 'February';

                case '03':return 'March';

                case '04':return 'April';

                case '05':return 'May';

                case '06':return 'June';

                case '07':return 'July';

                case '08':return 'August';

                case '09':return 'September';

                case '10':return 'October';

                case '11':return 'November';

                case '12':return 'December';
            }
        }

        arr[1]=month(arr[1]);
        return arr.join(" ");
    }


    function timeFormat(time){
        let arr=time.split(":")
        // console.log(arr);
        let dayNight=''

        if((Number(arr[0])-12)>0){
            dayNight='PM';
            arr[0]=arr[0]-12;
        }
        else{
            dayNight='AM';   
        }

        // console.log(dayNight);

        return arr.join(':')+ " " +dayNight;
    }



    
}

// updateDate();


