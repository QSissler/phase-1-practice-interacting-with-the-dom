document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    let counterNumber = parseInt(counter.textContent);
    let paused = false;

    function addCounter(){
         counterNumber += 1;
         counter.textContent = counterNumber;
    };

    function minusCounter(){
        counterNumber -= 1;
        counter.textContent = counterNumber;
    };
   
    let setIn = setInterval(addCounter, 1000);

    //Plus and Minus Buttons
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');

    plusBtn.addEventListener('click', addCounter);
    minusBtn.addEventListener('click', minusCounter);



    function stopCounter(){
        clearInterval(setIn);
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        heart.disabled = true;
        submitBtn.disabled = true;
        pause.textContent = "Resume";

        pause.removeEventListener('click', stopCounter);
        pause.addEventListener('click', restartCounter);
    }

    function restartCounter(){
        setIn = setInterval(addCounter, 1000);
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        heart.disabled = false;
        submitBtn.disabled = false;
        pause.textContent = "Pause";

        pause.removeEventListener('click', restartCounter);
        pause.addEventListener('click', stopCounter);
        
    }


    // Pause Button
    const pause = document.getElementById('pause');
    pause.addEventListener('click', stopCounter);
    

    //Like Button
    const heart = document.getElementById('heart');
    heart.addEventListener('click', makeList);
    heart.addEventListener('click', countLikes);


    function makeList(){
        const uList = document.querySelector('ul');
        // if (document.querySelector('li').id = counterNumber){
        // // .textContent = `${counterNumber} has been liked ${clickCounts} times`
        //     console.log("Hi");
        // } else {
        const likes = document.createElement('li');
        likes.setAttribute('id', counterNumber);
        uList.appendChild(likes);
        likes.textContent = `${counterNumber} has been liked ${countLikes(0)} times`;
        }
    // }

    // let clickCounts = 1;
    function countLikes(clickCounts){
       return clickCounts += 1;
    }


    //Leave Comments
    const commentForm = document.getElementById("comment-form");
    const submitBtn = document.getElementById('submit');
    const commentList = document.getElementById("list")

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleComments(e.target.commentInput.value);
        commentForm.reset();
    });
    
    function handleComments(comment){
        let p = document.createElement('p');
        p.textContent = `${comment}`;
        commentList.appendChild(p);

    }
})