import Pizza from "./img/462773.webp";
import Family from "./img/family-photos-in-chianti-112-scaled.jpg";
import Restaurant from "./img/pexels-chan-walrus-941861.jpg"


function createHomePage() {
    const content = document.querySelector("#content");
  
    const attention = document.createElement("div");
        attention.classList.add("pictures");
    content.appendChild(attention);
  
    const minusBtn = document.createElement("button");
        minusBtn.textContent = "<";
        minusBtn.id = "minus-btn";
    attention.appendChild(minusBtn);
  
    let i = 0;
    const picArr = [Pizza, Family, Restaurant];

    const pictureNew = document.createElement("img");
        pictureNew.src = picArr[i];
        pictureNew.id = "imgId";
    attention.appendChild(pictureNew);
  
    const plusBtn = document.createElement("button");
        plusBtn.textContent = ">";
        plusBtn.id = "plus-btn"
    attention.appendChild(plusBtn);
  
    minusBtn.addEventListener("click", () => {
        i--;
        if (i < 0) {
            i = picArr.length - 1;
        }
        document.getElementById("imgId").src = picArr[i];
    });
  
    plusBtn.addEventListener("click", () => {
        i++;
        if (i >= picArr.length) {
            i = 0;
        }
        document.getElementById("imgId").src = picArr[i];
    });

    const interval = setInterval(imageSwitch, 6000);
    function imageSwitch(){
        i++;
        if (i >= picArr.length) {
            i = 0;
        }
        document.getElementById("imgId").src = picArr[i];
    }
  
    const description = document.createElement("div");
        description.classList.add("description");
    content.appendChild(description);
  }
  
  export default createHomePage;
  