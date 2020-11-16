fetch('http://localhost:3000/services')
  .then(response => response.json())
  .then(json => {

    var servicesContent=`
            <div class="col-lg-4  icon-box">
            <div class="icon"><i class="icofont-automation"></i></div>
            <h4 class="title"><a href="">Dolor Sitema Testt</a></h4>
            <p class="description">serviceDescrip</p>
            </div>
   `

    var servicesDivFR= document.getElementById('servicesDivFR');

    for (let i = 0; i < json.services.length; i++) {
    
        var x= document.createElement('div');
        var currentServicesContent=servicesContent;
        currentServicesContent=currentServicesContent.replace('Dolor Sitema Testt',json.services[i].Name);
        currentServicesContent=currentServicesContent.replace('serviceDescrip',json.services[i].description);
        x.innerHTML=currentServicesContent;
        console.log(x);
        servicesDivFR.appendChild(x);

        
    }

  })
