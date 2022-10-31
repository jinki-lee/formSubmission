//Step 2: disable sheet cake options, if round cake is selected
//Step 5: Increase dimensions. Check if Round or Sheet Cake

function verifyAnswer() {  
  //get the selected value from the dropdown list  
  var mylist = document.getElementById("caketype");  

  var result = mylist.options[mylist.selectedIndex].text;  
    if (result == 'Round Cake') {  
      //ROUND CAKE
      //disable option for sheet cake
      document.getElementById("sheetcaketype").disabled = true;  
      //
      document.getElementById("radiusvalue").value;
      document.getElementById("lengthvalue").value = 0;  
      document.getElementById("widthvalue").value = 0;   
      //
      document.getElementById("radiusvalue").disabled = false;  
      document.getElementById("lengthvalue").disabled = true;  
      document.getElementById("widthhvalue").disabled = true;  
      //
    } else {  
      //SHEET CAKE
      //enable option for sheet cake
      document.getElementById("sheetcaketype").disabled = false;  
      //
      document.getElementById("radiusvalue").value = 0.00;
      document.getElementById("lengthvalue").value = 30.00;
      document.getElementById("widthvalue").value = 30.00;
      //
      document.getElementById("radiusvalue").disabled = true;  
      document.getElementById("lengthvalue").disabled = false;  
      document.getElementById("widthvalue").disabled = false;  
    }  
  }
  
  function checkCheckbox() {  
  var topping1 = document.getElementById("topping1");  
  var topping2 = document.getElementById("topping2");  
  var topping3 = document.getElementById("topping3");  

    if (topping1.checked == true){  
        document.getElementById('topping1').value = 5.00;
        document.getElementById('topping2').value = 0.00;
        document.getElementById('topping3').value = 0.00;

          if (topping1.checked == true && topping2.checked == true && topping3.checked == false){  
            document.getElementById('topping1').value = 5.00;
            document.getElementById('topping2').value = 7.00;
            document.getElementById('topping3').value = 0.00;
          }
          else if (topping1.checked == true && topping2.checked == false && topping3.checked == true){   
            document.getElementById('topping3').value = 4.00;
        document.getElementById('topping2').value = 0.00;
          }
          else if (topping1.checked == true && topping2.checked == true && topping3.checked == true){   
            document.getElementById('topping1').value = 5.00;
            document.getElementById('topping2').value = 7.00;
            document.getElementById('topping3').value = 4.00;
        }
  }

  else if (topping2.checked == true){  
    document.getElementById('topping1').value = 0.00;
    document.getElementById('topping2').value = 7.00;
    document.getElementById('topping3').value = 0.00;

      if (topping1.checked == true && topping2.checked == true && topping3.checked == false){  
        document.getElementById('topping1').value = 5.00;
        document.getElementById('topping2').value = 7.00;
        document.getElementById('topping3').value = 0.00;
      }
      else if (topping1.checked == false && topping2.checked == true && topping3.checked == true){   
        document.getElementById('topping1').value = 0.00;
        document.getElementById('topping2').value = 7.00;
        document.getElementById('topping3').value = 4.00;
      }
      else if (topping1.checked == true && topping2.checked == true && topping3.checked == true){   
        document.getElementById('topping1').value = 5.00;
        document.getElementById('topping2').value = 7.00;
        document.getElementById('topping3').value = 4.00;
    }
}

else if (topping3.checked == true){  
  document.getElementById('topping1').value = 0.00;
  document.getElementById('topping2').value = 0.00;
  document.getElementById('topping3').value = 4.00;

    if (topping1.checked == true && topping2.checked == false && topping3.checked == true){  
      document.getElementById('topping1').value = 5.00;
      document.getElementById('topping2').value = 0.00;
      document.getElementById('topping3').value = 4.00;
    }
    else if (topping1.checked == false && topping2.checked == true && topping3.checked == true){   
      document.getElementById('topping1').value = 0.00;
      document.getElementById('topping2').value = 7.00;
      document.getElementById('topping3').value = 4.00;
    }
    else if (topping1.checked == true && topping2.checked == true && topping3.checked == true){   
      document.getElementById('topping1').value = 5.00;
      document.getElementById('topping2').value = 7.00;
      document.getElementById('topping3').value = 4.00;
  }
}

}  

const form = document.getElementById('myform');

function processData(e){
    e.preventDefault(); 

    console.log('submitted');
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;

    const address = document.getElementById('address').value;
    const address2 = document.getElementById('address2').value;

    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const postalcode = document.getElementById('postalcode').value;

    const telphone = document.getElementById('telphone').value;
    const email = document.getElementById('email').value;
    
    // const caketype = document.getElementById('caketype').value;

    if(document.getElementById('caketype').value === 'Round Cake'){
       caketype = 15.00;
    }

    if(document.getElementById('caketype').value === 'Sheet Cake'){
      caketype = 18.00;
    }

    const sheetcaketype = document.getElementById('sheetcaketype').value;

    const layer = document.getElementById('layeramount').value;

    const radius = document.getElementById('radiusvalue').value;
    const length = document.getElementById('lengthvalue').value;
    const width = document.getElementById('widthvalue').value;


    const cheese = document.getElementById('topping1').value;
    const topping = document.getElementById('topping2').value;
    const jam = document.getElementById('topping3').value;

    let totalAmount = '00.00';
    totalAmount= (
      (caketype) +
      (cheese * 1) + 
      (topping * 1) + 
      (jam * 1) +
      (radius * radius * 3.14 * 0.02) +
      (length * 0.02) +
      (width * 0.02) +
      (layer * caketype / 2)
      ).toFixed(2);

    const date = document.getElementById('date').value;


    output0.innerHTML = '<h2>' +'Registration Summary: ' + '</h2>';
    output1.innerHTML = '<p>' + '<b>'+'First Name: ' + '</b>'+ firstname +'</p>';
    output2.innerHTML = '<p>' + '<b>'+'Last Name: ' + '</b>'+ lastname +'</p>';

    output3.innerHTML = '<p>' + '<b>'+'Address: ' + '</b>'+ address +'</p>';
    output4.innerHTML = '<p>' + '<b>'+'Address 2: ' + '</b>'+ address2 +'</p>';

    output5.innerHTML = '<p>' + '<b>'+'City: ' + '</b>'+ city +'</p>';
    output6.innerHTML = '<p>' + '<b>'+'Province: ' + '</b>'+ province +'</p>';
    output7.innerHTML = '<p>' + '<b>'+'Postal Code: ' + '</b>'+ postalcode +'</p>';

    output8.innerHTML = '<p>' + '<b>'+'Telphone: ' + '</b>'+ telphone +'</p>';
    output9.innerHTML = '<p>' + '<b>'+'Email: ' + '</b>'+ '<a href = "mailto: ' + email + ' ">' + email +' </a>' +'</p>';
    
    output22.innerHTML = '<h2>' +'Order Summary: ' + '</h2>';

    output10.innerHTML = '<p>' + '<b>'+'Base Cost of Cake: ' + '</b>'+ '$' +  caketype +'</p>';

    output11.innerHTML = '<p>' + '<b>'+'Sheet Cake Type: ' + '</b>'+ sheetcaketype +'</p>';

    output12.innerHTML = '<p>' + '<b>'+'Amount of Layers: ' + '</b>'+ layer +'</p>';


    output13.innerHTML = '<p>' + '<b>'+'Total Radius of Cake: ' + '</b>'+ radius +'</p>';
    output14.innerHTML = '<p>' + '<b>'+'Total Length of Cake: ' + '</b>'+ length +'</p>';
    output15.innerHTML = '<p>' + '<b>'+'Total Width of Cake: ' + '</b>'+ width +'</p>';


    output16.innerHTML = '<p>' + '<b>'+'Cream Cheese Topping: ' + '</b>'+ '$' + cheese  +'</p>';
    output17.innerHTML = '<p>' + '<b>'+'Fruit and Almond Topping: ' + '</b>'+ '$' +topping  +'</p>';
    output18.innerHTML = '<p>' + '<b>'+'Fruit Jam Filling: ' + '</b>'+ '$' + jam +'</p>';

    output19.innerHTML = '<h2>' + '<b>'+'Total Cost: ' + '</b>'+ '$' +totalAmount +'</h2>';

    output20.innerHTML = '<p>' + '<b>'+'Date: ' + '</b>'+ date +'</p>';
    output21.innerHTML = '<h2>' +'Thank you!' + '</h2>';

}
    myform.onsubmit = processData;