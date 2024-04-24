$("body").css("overflow", "hidden");
setTimeout(function() {
    $('#mydiv2').fadeOut('fast');
    $('#mydiv1').fadeOut('fast');
    $('#wel').fadeOut('fast');
    }, 2500);
    setTimeout(function() {
    $('#home').fadeOut('slow');
    }, 2800);
      const arrow=document.getElementById("arrow")
          const arrow1=document.getElementById("arrow1")
          const creator=document.getElementById("creator")
          const creator1=document.getElementById("creator1")
          const below=document.getElementById("below")
          arrow.addEventListener("click",function() {
            console.log("hello");
            $('.below').animate({ top:"80px"});
            // bg1.style.setProperty("left", "-1200px");
            arrow.style.display='none';
            creator.style.display='none';
            creator1.style.display='none';
            arrow1.style.display='block';
          });
          arrow1.addEventListener("click",function() {
            console.log("hello");
            $('.below').animate({ top:"580px"});
            
            arrow1.style.display='none';
            setTimeout(function() {
                creator.style.display='block';
                creator1.style.display='block';
                }, 400);
            arrow.style.display='block';
          });
          function filterfunction() {
            var input, filter, a, i;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            div = document.getElementById("myDropdown");
            a = div.getElementsByTagName("a");
            for (i = 0; i < a.length; i++) {
              txtValue = a[i].textContent || a[i].innerText;
              if(filter==""){
                div.style.display = "none";
              }
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                div.style.display = "block";
                a[i].style.display = "block";
                
              } else {
                a[i].style.display = "none";
              }
            }
          }
          input = document.getElementById("myInput");
          fetch('https://opentdb.com/api_category.php')
            .then(response => {return response.json()})
            .then(data => {
                console.log(data);
                console.log(Object.entries(data)[0][1]);
                var entry=["Appendicitis","Cancer","Heart Disease","Neurological Disorders","Bone Injuries","Bone Fractures","General Surgeries","Child Health",
            "Pregnancy-related Complications","Ear Infections","Fractures","Maternity Care","Kidney Disorders","Mental Health Issues","Digestive Disorders","Dental Issues"
            ,"Skin Disorders","Childbirth","Brain Disorders","Childhood Diseases","Urinary Tract Infections","Eye Problems","Skin Conditions","Diabetes","Women's Health Issues"
            ,"Ear, Nose, Throat Problems"]
                console.log(entry)
                var j=0;
                var name=[]
                var index
                for(item in entry)
                        {
                            console.log(entry[item])
                            var my=document.getElementById("myDropdown");
                            my.innerHTML = my.innerHTML+ `<a class="opt" href="#about" onclick="iclick('${entry[item]}');">${entry[item]}</a>`
                        }
                    })
                    var id
                    var para
function iclick(parameter){
    div = document.getElementById("myDropdown");
    div.style.display = "none";
    input = document.getElementById("myInput");
    input.value=parameter;
    para=parameter;
}

document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    // const jsonData = XLSX.utils.sheet_to_json(worksheet);
    const excelData = localStorage.getItem('excelData1');
    const allSheetData = JSON.parse(excelData);
    const jsonData = Object.entries(allSheetData)[0][1];
    console.log(jsonData)
    const find = para;
    console.log(find);
    const filteredData = jsonData.filter(row => row['d1'] === find || row['d2'] === find || row['d3'] === find);
    const hospitals = filteredData.map(row => row['name']);
    console.log(hospitals);
    for(i in hospitals)
      {
        console.log(hospitals[i]);
        var my1=document.getElementById("quiz-body");
        my1.innerHTML = my1.innerHTML+ `<h2 class = "quiz-question"><a class="sel" onclick="s('${hospitals[i]}','${find}');">${hospitals[i]}</a></h2>`
      }
  };
  reader.readAsArrayBuffer(file);
  
}); 
function loadQuestion1(disease){
  const excelData2 = localStorage.getItem('excelData2');
  const allSheetData = JSON.parse(excelData2);
  const jsonData = Object.entries(allSheetData)[0][1];
  console.log(jsonData)
  // disease="Cancer"
  const filteredData = jsonData.filter(entry => entry.disease === disease);
  const sortedData = filteredData.sort((a, b) => b.rate - a.rate);
  console.log(sortedData)
  console.log(Object.entries(sortedData)[1][1].name)
  const data=Object.entries(sortedData)
  for(i in data)
  {
     console.log(Object.entries(sortedData)[i][1].name)
     var my1=document.getElementById("tbody");
    my1.innerHTML = my1.innerHTML+ `<tr class="doctor-card"><td class="doctor-name"><a onclick="d()" href="#about">${Object.entries(sortedData)[i][1].name}-${Object.entries(sortedData)[i][1].rate}</a></td></tr>`
     
  }
  // for(i in hospitals)
  //   {
  //     console.log(hospitals[i]);
  //     var my1=document.getElementById("quiz-body");
  //     my1.innerHTML = my1.innerHTML+ `<h2 class = "quiz-question"><a class="sel" onclick="s('${hospitals[i]}');">${hospitals[i]}</a></h2>`
  //   }
  
  reader.readAsArrayBuffer(file1);
  }
// loadQuestion1(para.toString());
function loadQuestion(){
  const excelData = localStorage.getItem('excelData1');
  console.log(excelData)
    const allSheetData = JSON.parse(excelData);
    console.log(allSheetData)
    const jsonData = Object.entries(allSheetData)[0][1];
    console.log(jsonData)
    const find = para;
    console.log(find);
    const filteredData = jsonData.filter(row => row['d1'] === find || row['d2'] === find || row['d3'] === find);
    const hospitals = filteredData.map(row => row['name']);
    console.log(hospitals);
    for(i in hospitals)
      {
        console.log(hospitals[i]);
        var my1=document.getElementById("quiz-body");
        // my1.innerHTML = my1.innerHTML+ `<h2 class = "quiz-question"><a class="sel" onclick="s('${hospitals[i]}','${find}');">${hospitals[i]}</a></h2>`
      }
  reader.readAsArrayBuffer(file);
}
