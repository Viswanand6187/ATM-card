function show() 
        {
            document.getElementById('atm-card').style.display="block";
            document.getElementById('btn').style.display = "block";
        }

        document.querySelector('#input').oninput = () =>{
            document.querySelector('#bank').innerText = document.querySelector('#input').value;
        }
       
        document.querySelector('#card').oninput = () =>{
            document.querySelector('#card-number').innerText = document.querySelector('#card').value;
        }
        
        document.querySelector('#month-input').oninput = () =>{
            document.querySelector('#month').innerText = document.querySelector('#month-input').value;
        }

        document.querySelector('#year-input').oninput = () =>{
            document.querySelector('#year').innerText = document.querySelector('#year-input').value;
        }

        document.querySelector('#card-holder-input').oninput = () =>{
            document.querySelector('#card-holder-name').innerText = document.querySelector('#card-holder-input').value;
        }


        const input = document.getElementById("card");
  input.addEventListener("input", () => input.value = formatNumber(input.value.replaceAll(" ", "")));

  const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += " ";
  return seed + next;
}, "");

function myFunction() {
    var x = document.getElementById("card-number"); 
      x.innerHTML = "**** **** ****";
  }

        