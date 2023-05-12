console.log("jai");
const ques = document.querySelectorAll(".ques");
const answer = document.querySelectorAll(".answer");
const img= document.querySelectorAll(".ques img");
console.log(img);
console.log(ques);
// ques.addEventListener("click",()=>{
//     if(answer.style.display=="none" || answer.style.display=="")
//     {
//         answer.style.display="block";
//     }
//     else{
//         answer.style.display="none";
//     } 
// })
function hideAnswer(e)
{
    console.log('a');

    for(i=0;i<ques.length;i++)
    {
        if(e==ques[i])
        {
            quesAns=answer[i];
            quesImage=img[i]
        }
    }

    if(quesAns.style.display=="block")
    {
        quesAns.style.display="none";
        e.style.borderBottom="none";
        quesImage.style.rotate="0deg";
        
    }
    else
    {
        for(i=0;i<ques.length;i++)
        {
            if(e!=ques[i])
            {
                answer[i].style.display="none";
                ques[i].style.borderBottom ="none";
                img[i].style.rotate="0deg";
            }
            else{
                answer[i].style.display="block";
                ques[i].style.borderBottom ="1px solid black";
                img[i].style.rotate="180deg";
            }
        }
    }
    // e.style.display="flex";
}
