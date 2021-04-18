//expanded navbar
const showMenu = (toggleId, navbarId, bodyId)=>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)
  
    if(toggle && navbar){
      toggle.addEventListener('click', ()=>{
        navbar.classList.toggle('expander')
  
        bodypadding.classList.toggle('body-pd')
      })
    }
  }
  showMenu('nav-toggle','navbar','body-pd')
  
  //for active links
  const linkColor = document.querySelectorAll('.nav__link')
  function colorLink(){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  
  
//For collapse navbar
  const linkCollapse = document.getElementsByClassName('collapse__link')
  var i
  
  for(i=0;i<linkCollapse.length;i++){
    linkCollapse[i].addEventListener('click', function(){
      const collapseMenu = this.nextElementSibling
      collapseMenu.classList.toggle('showCollapse')
  
      const rotate = collapseMenu.previousElementSibling
      rotate.classList.toggle('rotate')
    })
  }

  //Delete rows
  function delRows(x){
    var table = document.getElementById('table');
	var row = table.deleteRow(x.parentNode.parentNode.rowIndex);
	}

    var count=1;
    
    //Add rows
  function addRows(){ 
    //To check All fields are Filled before adding
    let allFill = true;
    console.log(document.getElementById("fill"));
    document.getElementById("fill").querySelectorAll("[required]").forEach(function(i) {
        if (!allFill) return;
        if (!i.value) allFill = false;
        })
    if (!allFill) {
        alert('PLEASE FILL ALL THE FIELDS');
        return
    }

	    var table = document.getElementById('table');
    	var rowCount = table.rows.length;
	    var cellCount = table.rows[0].cells.length; 
	    var row = table.insertRow(rowCount-1);
        cell=row.insertCell(0);

        //Serial number of 1st record
        if(rowCount==2)
            count=1;

        cell.innerHTML=count++;

        //Add record in table
	    for(var i =2; i <cellCount; i++){
		    var cell = 'cell'+i;
		    cell = row.insertCell(i-1);
		    var copycel = document.getElementById('tinp'+(i-1)).value;
		    cell.innerHTML=copycel; 
        } 
        cell = row.insertCell(cellCount-1);

        //delete button in the last cell
        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('onclick', 'delRows(this)');
        button.setAttribute('id','b2')
        cell.appendChild(button); 
        
        //clear input fields after adding a record
        for(var i = 1; i < cellCount; i++){
            var cell = row.cells[i-1];
            document.getElementById('tinp'+i).value = null;
          }

    }
    //Function to implement search
    function search(){
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("ipsearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
      } else {
            tr[i].style.display = "none";
      }
    }       
  }
    }
