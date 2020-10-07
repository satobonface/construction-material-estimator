
const navSlide =() =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation='';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2 }s';

            }           
            
        });
    });
   
    

}
navSlide();


let row = 1;

function calc(){
    
    let extmotar_ratio=document.getElementById("extmotar_ratio").value;
    let units=document.getElementById("units").value;
    

    if (units === 'm'){
        let external_length =document.getElementById("lenght_external").value;
        let height =document.getElementById("height").value;
        let stones=(parseFloat(external_length)*parseFloat(height))/(0.23*0.3);

        if (extmotar_ratio === '1:2'){

            let motorvol=(parseFloat(external_length)*0.23*0.025*(parseFloat(height)/0.23)+parseFloat(height)*0.025*(parseFloat(external_length)/0.3));
            let cement_extSt=0.33*motorvol*1440/50;
            let sand_extSt=0.66*motorvol*1600/1000;
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = stones.toFixed(1);
            cell2.innerHTML = cement_extSt.toFixed(1);
            cell3.innerHTML = sand_extSt.toFixed(1);
    
        }else if (extmotar_ratio === '1:3'){
    
            let motorvol=(parseFloat(external_length)*0.23*0.025*(parseFloat(height)/0.23)+parseFloat(height)*0.025*(parseFloat(external_length)/0.3));
            let cement_extSt=0.25*motorvol*1440/50;
            let sand_extSt=0.75*motorvol*1600/1000;
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = stones.toFixed(1);
            cell2.innerHTML = cement_extSt.toFixed(1);
            cell3.innerHTML = sand_extSt.toFixed(1);
    
        }else if (extmotar_ratio === '1:4'){
    
            let motorvol=(parseFloat(external_length)*0.23*0.025*(parseFloat(height)/0.23)+parseFloat(height)*0.025*(parseFloat(external_length)/0.3));
            let cement_extSt=0.2*motorvol*1440/50;
            let sand_extSt=0.8*motorvol*1600/1000;
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = stones.toFixed(1);
            cell2.innerHTML = cement_extSt.toFixed(1);
            cell3.innerHTML = sand_extSt.toFixed(1);
    
        }
    } else if (units === 'ft'){

        let external_length =document.getElementById("lenght_external").value/3.281;
        let height =document.getElementById("height").value/3.281;
        let stones=(parseFloat(external_length)*parseFloat(height))/(0.23*0.3);

        if (extmotar_ratio === '1:2'){

            let motorvol=(parseFloat(external_length)*0.23*0.025*(parseFloat(height)/0.23)+parseFloat(height)*0.025*(parseFloat(external_length)/0.3));
            let cement_extSt=0.33*motorvol*1440/50;
            let sand_extSt=0.66*motorvol*1600/1000;
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = stones.toFixed(1);
            cell2.innerHTML = cement_extSt.toFixed(1);
            cell3.innerHTML = sand_extSt.toFixed(1);
    
        }else if (extmotar_ratio === '1:3'){
    
            let motorvol=(parseFloat(external_length)*0.23*0.025*(parseFloat(height)/0.23)+parseFloat(height)*0.025*(parseFloat(external_length)/0.3));
            let cement_extSt=0.25*motorvol*1440/50;
            let sand_extSt=0.75*motorvol*1600/1000;
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = stones.toFixed(1);
            cell2.innerHTML = cement_extSt.toFixed(1);
            cell3.innerHTML = sand_extSt.toFixed(1);
    
        }else if (extmotar_ratio === '1:4'){
    
            let motorvol=(parseFloat(external_length)*0.23*0.025*(parseFloat(height)/0.23)+parseFloat(height)*0.025*(parseFloat(external_length)/0.3));
            let cement_extSt=0.2*motorvol*1440/50;
            let sand_extSt=0.8*motorvol*1600/1000;
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = stones.toFixed(1);
            cell2.innerHTML = cement_extSt.toFixed(1);
            cell3.innerHTML = sand_extSt.toFixed(1);
    
        }
    }
    
    
  
    
    
    

}
function calcIS(){

    
    let intmotar_ratio=document.getElementById("intmotar_ratio").value;
    let units=document.getElementById("units").value;

    if (units === 'm'){
        let lenght_internal =document.getElementById("lenght_internal").value;
        let internal_height =document.getElementById("internal_height").value;

        if (intmotar_ratio === '1:2'){

            let intMotorvol=(parseFloat(lenght_internal)*0.15*0.025*(parseFloat(internal_height)/0.23)+parseFloat(internal_height)*0.025*(parseFloat(lenght_internal)/0.3));
            let cement_intSt=0.33*intMotorvol*1440/50;
            let sand_intSt=0.66*intMotorvol*1600/1000;
            let intStones=(parseFloat(lenght_internal)*parseFloat(internal_height))/(0.15*0.3); 
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = intStones.toFixed(1);
            cell2.innerHTML = cement_intSt.toFixed(1);
            cell3.innerHTML = sand_intSt.toFixed(1);
    
        }else if (intmotar_ratio === '1:3'){
    
            let intMotorvol=(parseFloat(lenght_internal)*0.15*0.025*(parseFloat(internal_height)/0.23)+parseFloat(internal_height)*0.025*(parseFloat(lenght_internal)/0.3));
            let cement_intSt=0.25*intMotorvol*1440/50;
            let sand_intSt=0.75*intMotorvol*1600/1000;
            let intStones=(parseFloat(lenght_internal)*parseFloat(internal_height))/(0.15*0.3); 
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = intStones.toFixed(1);
            cell2.innerHTML = cement_intSt.toFixed(1);
            cell3.innerHTML = sand_intSt.toFixed(1);
    
        } else if (intmotar_ratio === '1:4'){
    
            let intMotorvol=(parseFloat(lenght_internal)*0.15*0.025*(parseFloat(internal_height)/0.23)+parseFloat(internal_height)*0.025*(parseFloat(lenght_internal)/0.3));
            let cement_intSt=0.2*intMotorvol*1440/50;
            let sand_intSt=0.8*intMotorvol*1600/1000;
            let intStones=(parseFloat(lenght_internal)*parseFloat(internal_height))/(0.15*0.3); 
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = intStones.toFixed(1);
            cell2.innerHTML = cement_intSt.toFixed(1);
            cell3.innerHTML = sand_intSt.toFixed(1);
    
        }
        
    } else if (units === 'ft'){

        let lenght_internal =document.getElementById("lenght_internal").value/3.281;
        let internal_height =document.getElementById("internal_height").value/3.281;

        if (intmotar_ratio === '1:2'){

            let intMotorvol=(parseFloat(lenght_internal)*0.15*0.025*(parseFloat(internal_height)/0.23)+parseFloat(internal_height)*0.025*(parseFloat(lenght_internal)/0.3));
            let cement_intSt=0.33*intMotorvol*1440/50;
            let sand_intSt=0.66*intMotorvol*1600/1000;
            let intStones=(parseFloat(lenght_internal)*parseFloat(internal_height))/(0.15*0.3); 
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = intStones.toFixed(1);
            cell2.innerHTML = cement_intSt.toFixed(1);
            cell3.innerHTML = sand_intSt.toFixed(1);
    
        }else if (intmotar_ratio === '1:3'){
    
            let intMotorvol=(parseFloat(lenght_internal)*0.15*0.025*(parseFloat(internal_height)/0.23)+parseFloat(internal_height)*0.025*(parseFloat(lenght_internal)/0.3));
            let cement_intSt=0.25*intMotorvol*1440/50;
            let sand_intSt=0.75*intMotorvol*1600/1000;
            let intStones=(parseFloat(lenght_internal)*parseFloat(internal_height))/(0.15*0.3); 
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = intStones.toFixed(1);
            cell2.innerHTML = cement_intSt.toFixed(1);
            cell3.innerHTML = sand_intSt.toFixed(1);
    
        } else if (intmotar_ratio === '1:4'){
    
            let intMotorvol=(parseFloat(lenght_internal)*0.15*0.025*(parseFloat(internal_height)/0.23)+parseFloat(internal_height)*0.025*(parseFloat(lenght_internal)/0.3));
            let cement_intSt=0.2*intMotorvol*1440/50;
            let sand_intSt=0.8*intMotorvol*1600/1000;
            let intStones=(parseFloat(lenght_internal)*parseFloat(internal_height))/(0.15*0.3); 
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
    
            cell1.innerHTML = intStones.toFixed(1);
            cell2.innerHTML = cement_intSt.toFixed(1);
            cell3.innerHTML = sand_intSt.toFixed(1);
    
        }
        
    }

    
    
    

}
function slab(){

    
    let mix_ratio=document.getElementById("mix_ratio").value;
    let units=document.getElementById("units").value;
    

    if (units === 'm'){
        let lenght_slab=document.getElementById("lenght_slab").value;
        let thickness=document.getElementById("thickness").value;
        let width=document.getElementById("width").value;
        let volume=parseFloat(width)*parseFloat(thickness)*parseFloat(lenght_slab)*1.57;

        if (mix_ratio === 'M10'){
        

            let cement=0.1*volume*1440/50; //50kg bags
            let sand=0.3*volume*1600/1000; //tonnes        
            let ballast=0.6*volume*1500/1000; //tonnes
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
        
            cell1.innerHTML = cement.toFixed(1);
            cell2.innerHTML = sand.toFixed(1);
            cell3.innerHTML = ballast.toFixed(1);
    
           // alert("number of bags of cement required is :"+cement);
           // alert("Tonnes of sand required is :"+sand );
            //alert("Tonnes of ballast required is :"+ballast);
    
    
        }else if(mix_ratio === 'M15')  {
    
            let cement=0.14*volume*1440/50; //50kg bags
            let sand=0.286*volume*1600/1000; //tonnes        
            let ballast=0.429*volume*1500/1000; //tonnes
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
        
            cell1.innerHTML = cement.toFixed(1);
            cell2.innerHTML = sand.toFixed(1);
            cell3.innerHTML = ballast.toFixed(1);
    
        } else  if(mix_ratio === 'M20'){
    
            let cement=0.182*volume*1440/50; //50kg bags
            let sand=0.273*volume*1600/1000; //tonnes        
            let ballast=0.545*volume*1500/1000; //tonnes
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
        
            cell1.innerHTML = cement.toFixed(1);
            cell2.innerHTML = sand.toFixed(1);
            cell3.innerHTML = ballast.toFixed(1);
    
        }else  if(mix_ratio === 'M25'){
    
            let cement=0.25*volume*1440/50; //50kg bags
            let sand=0.25*volume*1600/1000; //tonnes        
            let ballast=0.5*volume*1500/1000; //tonnes
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
        
            cell1.innerHTML = cement.toFixed(1);
            cell2.innerHTML = sand.toFixed(1);
            cell3.innerHTML = ballast.toFixed(1);
    
        }
    } else if (units === 'ft'){
        let lenght_slab=document.getElementById("lenght_slab").value/3.281;
        let thickness=document.getElementById("thickness").value/3.281;
        let width=document.getElementById("width").value/3.281;
        let volume=parseFloat(width)*parseFloat(thickness)*parseFloat(lenght_slab)*1.57;

        if (mix_ratio === 'M10'){
        

            let cement=0.1*volume*1440/50; //50kg bags
            let sand=0.3*volume*1600/1000; //tonnes        
            let ballast=0.6*volume*1500/1000; //tonnes
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
        
            cell1.innerHTML = cement.toFixed(1);
            cell2.innerHTML = sand.toFixed(1);
            cell3.innerHTML = ballast.toFixed(1);
    
           // alert("number of bags of cement required is :"+cement);
           // alert("Tonnes of sand required is :"+sand );
            //alert("Tonnes of ballast required is :"+ballast);
    
    
        }else if(mix_ratio === 'M15')  {
    
            let cement=0.14*volume*1440/50; //50kg bags
            let sand=0.286*volume*1600/1000; //tonnes        
            let ballast=0.429*volume*1500/1000; //tonnes
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
        
            cell1.innerHTML = cement.toFixed(1);
            cell2.innerHTML = sand.toFixed(1);
            cell3.innerHTML = ballast.toFixed(1);
    
        } else  if(mix_ratio === 'M20'){
    
            let cement=0.182*volume*1440/50; //50kg bags
            let sand=0.273*volume*1600/1000; //tonnes        
            let ballast=0.545*volume*1500/1000; //tonnes
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
        
            cell1.innerHTML = cement.toFixed(1);
            cell2.innerHTML = sand.toFixed(1);
            cell3.innerHTML = ballast.toFixed(1);
    
        }else  if(mix_ratio === 'M25'){
    
            let cement=0.25*volume*1440/50; //50kg bags
            let sand=0.25*volume*1600/1000; //tonnes        
            let ballast=0.5*volume*1500/1000; //tonnes
    
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2); 
        
            cell1.innerHTML = cement.toFixed(1);
            cell2.innerHTML = sand.toFixed(1);
            cell3.innerHTML = ballast.toFixed(1);
    
        }
    }

   

    

}

function plast(){

    
    let mixRatio=document.getElementById("mixRatio").value;
    let units=document.getElementById("units").value;

    if (units === 'm'){
        let internal_length =document.getElementById("internal").value;
        let external_length =document.getElementById("external").value;
        let wall_height =document.getElementById("wall_height").value;

        if(mixRatio='1:2'){

            let surface_area = parseFloat(internal_length)*parseFloat(wall_height)*2+parseFloat(external_length)*parseFloat(wall_height);
    
            let pcement=0.33*surface_area*0.012*1440/50; //50kg bags
            let psand=0.66*surface_area*0.012*1600/1000; //tonnes     
           
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);
    
        } else if(mixRatio='1:3'){
    
            let surface_area = parseFloat(internal_length)*parseFloat(wall_height)*2+parseFloat(external_length)*parseFloat(wall_height);
    
            let pcement=0.25*surface_area*0.012*1440/50; //50kg bags
            let psand=0.75*surface_area*0.012*1600/1000; //tonnes
            
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);
    
            
        } else if(mixRatio='1:4'){
    
            let surface_area = parseFloat(internal_length)*parseFloat(wall_height)*2+parseFloat(external_length)*parseFloat(wall_height);
    
            let pcement=0.2*surface_area*0.012*1440/50; //50kg bags
            let psand=0.8*surface_area*0.012*1600/1000; //tonnes 
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);    
    
            
        }
    

    }else if (units === 'ft'){
        let internal_length =document.getElementById("internal").value/3.281;
        let external_length =document.getElementById("external").value/3.281;
        let wall_height =document.getElementById("wall_height").value/3.281;

        if(mixRatio='1:2'){

            let surface_area = parseFloat(internal_length)*parseFloat(wall_height)*2+parseFloat(external_length)*parseFloat(wall_height);
    
            let pcement=0.33*surface_area*0.012*1440/50; //50kg bags
            let psand=0.66*surface_area*0.012*1600/1000; //tonnes     
           
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);
    
        } else if(mixRatio='1:3'){
    
            let surface_area = parseFloat(internal_length)*parseFloat(wall_height)*2+parseFloat(external_length)*parseFloat(wall_height);
    
            let pcement=0.25*surface_area*0.012*1440/50; //50kg bags
            let psand=0.75*surface_area*0.012*1600/1000; //tonnes
            
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);
    
            
        } else if(mixRatio='1:4'){
    
            let surface_area = parseFloat(internal_length)*parseFloat(wall_height)*2+parseFloat(external_length)*parseFloat(wall_height);
    
            let pcement=0.2*surface_area*0.012*1440/50; //50kg bags
            let psand=0.8*surface_area*0.012*1600/1000; //tonnes 
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);    
    
            
        }
    }
    
    
    


}
function tiles(){

    let floorLength =document.getElementById("floorLength").value;
    let floorWidth =document.getElementById("floorWidth").value;
    
    let tileSize=document.getElementById("tileSize").value;

    if (tileSize === '1'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.338*0.338);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '2'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.35*0.35);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '3'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.4*0.4);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '4'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.45*0.45);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '5'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.6*0.3);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '6'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.5*0.5);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '7'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.51*0.51);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '8'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.22*0.895);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '9'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.24*0.95);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '10'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.6*0.6);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '11'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.45*0.9);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '12'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.23*1.2);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }
    if (tileSize === '13'){
        let tiles = parseFloat(floorLength)*parseFloat(floorWidth)/(0.8*0.8);
        let tcement =parseFloat(floorLength)*parseFloat(floorWidth)*2.25;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1);
        
        
        cell1.innerHTML = tiles.toFixed(1);
        cell2.innerHTML = tcement.toFixed(1);
        
    }

}

function csteel(){
    let csunits=document.getElementById("csunits").value;
    let columns =document.getElementById("columns").value;
    let columnSize=document.getElementById("columnSize").value;

    if(csunits === 'm'){
        
        let hcolumns =document.getElementById("hcolumns").value;
        
        
        if(columnSize === '15'){

            let stirups = (parseFloat(hcolumns)*0.6*parseFloat(columns)/0.15)/6;
            let longtudinalbar = parseFloat(hcolumns)*4*parseFloat(columns)/6;
            let cvolume = 0.153*0.153*parseFloat(hcolumns)*1.57*parseFloat(columns);

            let ccement=0.14*cvolume*1440/50; //50kg bags
            let csand=0.286*cvolume*1600/1000; //tonnes        
            let cballast=0.429*cvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);
            
            cell1.innerHTML = longtudinalbar.toFixed(1);
            cell2.innerHTML = stirups.toFixed(1);
            cell3.innerHTML = ccement.toFixed(1);
            cell4.innerHTML = csand.toFixed(1);
            cell5.innerHTML = cballast.toFixed(1);

        } else if(columnSize === '23'){
            let stirups = (parseFloat(hcolumns)*0.6*parseFloat(columns)/0.15)/6;
            let longtudinalbar = parseFloat(hcolumns)*4*parseFloat(columns)/6;
            let cvolume = 0.23*0.23*parseFloat(hcolumns)*1.57*parseFloat(columns);

            let ccement=0.14*cvolume*1440/50; //50kg bags
            let csand=0.286*cvolume*1600/1000; //tonnes        
            let cballast=0.429*cvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);
            
            cell1.innerHTML = longtudinalbar.toFixed(1);
            cell2.innerHTML = stirups.toFixed(1);
            cell3.innerHTML = ccement.toFixed(1);
            cell4.innerHTML = csand.toFixed(1);
            cell5.innerHTML = cballast.toFixed(1);
        }else if(columnSize ==='30'){
            let stirups = (parseFloat(hcolumns)*0.6*parseFloat(columns)/0.15)/6;
            let longtudinalbar = parseFloat(hcolumns)*4*parseFloat(columns)/6;
            let cvolume = 0.3*0.3*parseFloat(hcolumns)*1.57*parseFloat(columns);

            let ccement=0.14*cvolume*1440/50; //50kg bags
            let csand=0.286*cvolume*1600/1000; //tonnes        
            let cballast=0.429*cvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);
            
            cell1.innerHTML = longtudinalbar.toFixed(1);
            cell2.innerHTML = stirups.toFixed(1);
            cell3.innerHTML = ccement.toFixed(1);
            cell4.innerHTML = csand.toFixed(1);
            cell5.innerHTML = cballast.toFixed(1);
        }else if(columnSize ==='40'){
            let stirups = (parseFloat(hcolumns)*0.6*parseFloat(columns)/0.15)/6;
            let longtudinalbar = parseFloat(hcolumns)*4*parseFloat(columns)/6;
            let cvolume = 0.4*0.4*parseFloat(hcolumns)*1.57*parseFloat(columns);

            let ccement=0.14*cvolume*1440/50; //50kg bags
            let csand=0.286*cvolume*1600/1000; //tonnes        
            let cballast=0.429*cvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);
            
            cell1.innerHTML = longtudinalbar.toFixed(1);
            cell2.innerHTML = stirups.toFixed(1);
            cell3.innerHTML = ccement.toFixed(1);
            cell4.innerHTML = csand.toFixed(1);
            cell5.innerHTML = cballast.toFixed(1);
        }else if(columnSize ==='60'){
            let stirups = (parseFloat(hcolumns)*0.6*parseFloat(columns)/0.15)/6;
            let longtudinalbar = parseFloat(hcolumns)*4*parseFloat(columns)/6;
            let cvolume = 0.6*0.6*parseFloat(hcolumns)*1.57*parseFloat(columns);

            let ccement=0.14*cvolume*1440/50; //50kg bags
            let csand=0.286*cvolume*1600/1000; //tonnes        
            let cballast=0.429*cvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);
            
            cell1.innerHTML = longtudinalbar.toFixed(1);
            cell2.innerHTML = stirups.toFixed(1);
            cell3.innerHTML = ccement.toFixed(1);
            cell4.innerHTML = csand.toFixed(1);
            cell5.innerHTML = cballast.toFixed(1);
        }

    }else if(csunits === 'ft'){
        
        let hcolumns =document.getElementById("hcolumns").value/3.281;
        

        if(columnSize === '15'){

            let stirups = (parseFloat(hcolumns)*0.6*parseFloat(columns)/0.15)/6;
            let longtudinalbar = parseFloat(hcolumns)*4*parseFloat(columns)/6;
            let cvolume = 0.153*0.153*parseFloat(hcolumns)*1.57*parseFloat(columns);

            let ccement=0.14*cvolume*1440/50; //50kg bags
            let csand=0.286*cvolume*1600/1000; //tonnes        
            let cballast=0.429*cvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);
            
            cell1.innerHTML = longtudinalbar.toFixed(1);
            cell2.innerHTML = stirups.toFixed(1);
            cell3.innerHTML = ccement.toFixed(1);
            cell4.innerHTML = csand.toFixed(1);
            cell5.innerHTML = cballast.toFixed(1);

        } else if(columnSize === '23'){
            let stirups = (parseFloat(hcolumns)*0.6*parseFloat(columns)/0.15)/6;
            let longtudinalbar = parseFloat(hcolumns)*4*parseFloat(columns)/6;
            let cvolume = 0.23*0.23*parseFloat(hcolumns)*1.57*parseFloat(columns);

            let ccement=0.14*cvolume*1440/50; //50kg bags
            let csand=0.286*cvolume*1600/1000; //tonnes        
            let cballast=0.429*cvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);
            
            cell1.innerHTML = longtudinalbar.toFixed(1);
            cell2.innerHTML = stirups.toFixed(1);
            cell3.innerHTML = ccement.toFixed(1);
            cell4.innerHTML = csand.toFixed(1);
            cell5.innerHTML = cballast.toFixed(1);
        }else if(columnSize ==='30'){
            let stirups = (parseFloat(hcolumns)*0.6*parseFloat(columns)/0.15)/6;
            let longtudinalbar = parseFloat(hcolumns)*4*parseFloat(columns)/6;
            let cvolume = 0.3*0.3*parseFloat(hcolumns)*1.57*parseFloat(columns);

            let ccement=0.14*cvolume*1440/50; //50kg bags
            let csand=0.286*cvolume*1600/1000; //tonnes        
            let cballast=0.429*cvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);
            
            cell1.innerHTML = longtudinalbar.toFixed(1);
            cell2.innerHTML = stirups.toFixed(1);
            cell3.innerHTML = ccement.toFixed(1);
            cell4.innerHTML = csand.toFixed(1);
            cell5.innerHTML = cballast.toFixed(1);
        }else if(columnSize ==='40'){
            let stirups = (parseFloat(hcolumns)*0.6*parseFloat(columns)/0.15)/6;
            let longtudinalbar = parseFloat(hcolumns)*4*parseFloat(columns)/6;
            let cvolume = 0.4*0.4*parseFloat(hcolumns)*1.57*parseFloat(columns);

            let ccement=0.14*cvolume*1440/50; //50kg bags
            let csand=0.286*cvolume*1600/1000; //tonnes        
            let cballast=0.429*cvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);
            
            cell1.innerHTML = longtudinalbar.toFixed(1);
            cell2.innerHTML = stirups.toFixed(1);
            cell3.innerHTML = ccement.toFixed(1);
            cell4.innerHTML = csand.toFixed(1);
            cell5.innerHTML = cballast.toFixed(1);
        }else if(columnSize ==='60'){
            let stirups = (parseFloat(hcolumns)*0.6*parseFloat(columns)/0.15)/6;
            let longtudinalbar = parseFloat(hcolumns)*4*parseFloat(columns)/6;
            let cvolume = 0.6*0.6*parseFloat(hcolumns)*1.57*parseFloat(columns);

            let ccement=0.14*cvolume*1440/50; //50kg bags
            let csand=0.286*cvolume*1600/1000; //tonnes        
            let cballast=0.429*cvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);
            
            cell1.innerHTML = longtudinalbar.toFixed(1);
            cell2.innerHTML = stirups.toFixed(1);
            cell3.innerHTML = ccement.toFixed(1);
            cell4.innerHTML = csand.toFixed(1);
            cell5.innerHTML = cballast.toFixed(1);
        }

    }
}

function bsteel(){
        let bsunits=document.getElementById("bsunits").value;
        let beams =document.getElementById("beams").value;
        let nrods =document.getElementById("nrods").value;

        if(bsunits === 'm'){
            let lbeams =document.getElementById("lbeams").value;
            let wbeams =document.getElementById("wbeams").value;
            let dbeams =document.getElementById("dbeams").value;
            

            let lstirups = (parseFloat(dbeams)+parseFloat(wbeams))*3;
            let bstirups = (parseFloat(lbeams)*lstirups*parseFloat(beams)/0.15)/6;
            let longtudinalrod = parseFloat(lbeams)*nrods*parseFloat(beams)/6;
            let bvolume = parseFloat(dbeams)*parseFloat(wbeams)*parseFloat(lbeams)*1.57*parseFloat(beams);
            let bcement=0.14*bvolume*1440/50; //50kg bags
            let bsand=0.286*bvolume*1600/1000; //tonnes        
            let bballast=0.429*bvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display2");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);

            cell1.innerHTML = longtudinalrod.toFixed(1);
            cell2.innerHTML = bstirups.toFixed(1);
            cell3.innerHTML = bcement.toFixed(1);
            cell4.innerHTML = bsand.toFixed(1);
            cell5.innerHTML = bballast.toFixed(1);
        }else if(bsunits === 'ft'){
            let lbeams =document.getElementById("lbeams").value/3.281;
            let wbeams =document.getElementById("wbeams").value/3.281;
            let dbeams =document.getElementById("dbeams").value/3.281;
            

            let lstirups = (parseFloat(dbeams)+parseFloat(wbeams))*3;
            let bstirups = (parseFloat(lbeams)*lstirups*parseFloat(beams)/0.15)/6;
            let longtudinalrod = parseFloat(lbeams)*nrods*parseFloat(beams)/6;
            let bvolume = parseFloat(dbeams)*parseFloat(wbeams)*parseFloat(lbeams)*1.57*parseFloat(beams);
            let bcement=0.14*bvolume*1440/50; //50kg bags
            let bsand=0.286*bvolume*1600/1000; //tonnes        
            let bballast=0.429*bvolume*1500/1000; //tonnes   
        
            let display =document.getElementById("display2");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
            let cell3 =newRow.insertCell(2);
            let cell4 =newRow.insertCell(3);
            let cell5 =newRow.insertCell(4);

            cell1.innerHTML = longtudinalrod.toFixed(1);
            cell2.innerHTML = bstirups.toFixed(1);
            cell3.innerHTML = bcement.toFixed(1);
            cell4.innerHTML = bsand.toFixed(1);
            cell5.innerHTML = bballast.toFixed(1);
        }
        
}
function fsteel(){
        let fsunits=document.getElementById("fsunits").value;

        if(fsunits === 'm'){
            let lfloor =document.getElementById("lfloor").value;
            let wfloor =document.getElementById("wfloor").value;
            let tfloor =document.getElementById("tfloor").value;
            
            let ccm =document.getElementById("ccm").value;
            let ccd =document.getElementById("ccd").value;
            let fvolume =parseFloat(lfloor)*parseFloat(wfloor)*parseFloat(tfloor)*1.57;
            
            if (ccm === '100'){
                let mainbar = (1+parseFloat(lfloor)/0.1)/6;
                if (ccd === '100'){
                    let distributionbar =(1+parseFloat(wfloor)/0.1)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '125'){
                    let distributionbar =(1+parseFloat(wfloor)/0.125)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '150'){
                    let distributionbar =(1+parseFloat(wfloor)/0.15)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '175'){
                    let distributionbar =(1+parseFloat(wfloor)/0.175)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '200'){
                    let distributionbar =(1+parseFloat(wfloor)/0.2)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                }

                
            } else if (ccm === '125'){
                let mainbar = (1+parseFloat(lfloor)/0.125)/6;
                if (ccd === '100'){
                    let distributionbar =(1+parseFloat(wfloor)/0.1)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '125'){
                    let distributionbar =(1+parseFloat(wfloor)/0.125)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '150'){
                    let distributionbar =(1+parseFloat(wfloor)/0.15)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '175'){
                    let distributionbar =(1+parseFloat(wfloor)/0.175)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '200'){
                    let distributionbar =(1+parseFloat(wfloor)/0.2)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                }

                
            }else if (ccm === '150'){
                let mainbar = (1+parseFloat(lfloor)/0.15)/6;
                if (ccd === '100'){
                    let distributionbar =(1+parseFloat(wfloor)/0.1)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '125'){
                    let distributionbar =(1+parseFloat(wfloor)/0.125)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '150'){
                    let distributionbar =(1+parseFloat(wfloor)/0.15)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '175'){
                    let distributionbar =(1+parseFloat(wfloor)/0.175)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '200'){
                    let distributionbar =(1+parseFloat(wfloor)/0.2)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                }

                
            }else if (ccm === '175'){
                let mainbar = (1+parseFloat(lfloor)/0.175)/6;
                if (ccd === '100'){
                    let distributionbar =(1+parseFloat(wfloor)/0.1)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '125'){
                    let distributionbar =(1+parseFloat(wfloor)/0.125)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '150'){
                    let distributionbar =(1+parseFloat(wfloor)/0.15)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '175'){
                    let distributionbar =(1+parseFloat(wfloor)/0.175)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '200'){
                    let distributionbar =(1+parseFloat(wfloor)/0.2)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                }

                
            } else if (ccm === '200'){
                let mainbar = (1+parseFloat(lfloor)/0.2)/6;
                if (ccd === '100'){
                    let distributionbar =(1+parseFloat(wfloor)/0.1)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '125'){
                    let distributionbar =(1+parseFloat(wfloor)/0.125)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '150'){
                    let distributionbar =(1+parseFloat(wfloor)/0.15)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);

                } else if (ccd === '175'){
                    let distributionbar =(1+parseFloat(wfloor)/0.175)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '200'){
                    let distributionbar =(1+parseFloat(wfloor)/0.2)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                }

                
            }
        } else if(fsunits === 'ft'){
            let lfloor =document.getElementById("lfloor").value/3.281;
            let wfloor =document.getElementById("wfloor").value/3.281;
            let tfloor =document.getElementById("tfloor").value/3.281;
            
            let ccm =document.getElementById("ccm").value;
            let ccd =document.getElementById("ccd").value;
            let fvolume =parseFloat(lfloor)*parseFloat(wfloor)*parseFloat(tfloor)*1.57;
            
            if (ccm === '100'){
                let mainbar = (1+parseFloat(lfloor)/0.1)/6;
                if (ccd === '100'){
                    let distributionbar =(1+parseFloat(wfloor)/0.1)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '125'){
                    let distributionbar =(1+parseFloat(wfloor)/0.125)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '150'){
                    let distributionbar =(1+parseFloat(wfloor)/0.15)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '175'){
                    let distributionbar =(1+parseFloat(wfloor)/0.175)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);

                } else if (ccd === '200'){
                    let distributionbar =(1+parseFloat(wfloor)/0.2)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                }

                
            } else if (ccm === '125'){
                let mainbar = (1+parseFloat(lfloor)/0.125)/6;
                if (ccd === '100'){
                    let distributionbar =(1+parseFloat(wfloor)/0.1)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '125'){
                    let distributionbar =(1+parseFloat(wfloor)/0.125)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);

                } else if (ccd === '150'){
                    let distributionbar =(1+parseFloat(wfloor)/0.15)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '175'){
                    let distributionbar =(1+parseFloat(wfloor)/0.175)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '200'){
                    let distributionbar =(1+parseFloat(wfloor)/0.2)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                }

                
            }else if (ccm === '150'){
                let mainbar = (1+parseFloat(lfloor)/0.15)/6;
                if (ccd === '100'){
                    let distributionbar =(1+parseFloat(wfloor)/0.1)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '125'){
                    let distributionbar =(1+parseFloat(wfloor)/0.125)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '150'){
                    let distributionbar =(1+parseFloat(wfloor)/0.15)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '175'){
                    let distributionbar =(1+parseFloat(wfloor)/0.175)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '200'){
                    let distributionbar =(1+parseFloat(wfloor)/0.2)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                }

                
            }else if (ccm === '175'){
                let mainbar = (1+parseFloat(lfloor)/0.175)/6;
                if (ccd === '100'){
                    let distributionbar =(1+parseFloat(wfloor)/0.1)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '125'){
                    let distributionbar =(1+parseFloat(wfloor)/0.125)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '150'){
                    let distributionbar =(1+parseFloat(wfloor)/0.15)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '175'){
                    let distributionbar =(1+parseFloat(wfloor)/0.175)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '200'){
                    let distributionbar =(1+parseFloat(wfloor)/0.2)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                }

                
            } else if (ccm === '200'){
                let mainbar = (1+parseFloat(lfloor)/0.2)/6;
                if (ccd === '100'){
                    let distributionbar =(1+parseFloat(wfloor)/0.1)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '125'){
                    let distributionbar =(1+parseFloat(wfloor)/0.125)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '150'){
                    let distributionbar =(1+parseFloat(wfloor)/0.15)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '175'){
                    let distributionbar =(1+parseFloat(wfloor)/0.175)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                } else if (ccd === '200'){
                    let distributionbar =(1+parseFloat(wfloor)/0.2)/6;

                    
                    let fcement=0.14*fvolume*1440/50; //50kg bags
                    let fsand=0.286*fvolume*1600/1000; //tonnes        
                    let fallast=0.429*fvolume*1500/1000; //tonnes  

                    let display =document.getElementById("display3");
                    let newRow = display.insertRow(row);
                    let cell1 =newRow.insertCell(0); 
                    let cell2 =newRow.insertCell(1);
                    let cell3 =newRow.insertCell(2);
                    let cell4 =newRow.insertCell(3);
                    let cell5 =newRow.insertCell(4);

                    cell1.innerHTML = mainbar.toFixed(1);
                    cell2.innerHTML = distributionbar.toFixed(1);
                    cell3.innerHTML = fcement.toFixed(1);
                    cell4.innerHTML = fsand.toFixed(1);
                    cell5.innerHTML = fallast.toFixed(1);


                }

                
            }
        }
        
}

function fplast(){

        
    let fmixRatio=document.getElementById("fmixRatio").value;
    let funits=document.getElementById("funits").value;

    if (funits === 'm'){
        let rlength =document.getElementById("rlength").value;
        let rwidth =document.getElementById("rwidth").value;

        if(fmixRatio='1:2'){

            let fsurface_area = parseFloat(rlength)*parseFloat(rwidth);
    
            let pcement=0.33*fsurface_area*0.012*1440/50; //50kg bags
            let psand=0.66*fsurface_area*0.012*1600/1000; //tonnes     
           
            let display =document.getElementById("fdisplay");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);
    
        } else if(fmixRatio='1:3'){
    
            let fsurface_area = parseFloat(rlength)*parseFloat(rwidth);
    
            let pcement=0.25*fsurface_area*0.012*1440/50; //50kg bags
            let psand=0.75*fsurface_area*0.012*1600/1000; //tonnes
            
            let display =document.getElementById("fdisplay");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);
    
            
        } else if(fmixRatio='1:4'){
    
            let fsurface_area = parseFloat(rlength)*parseFloat(rwidth);
    
            let pcement=0.2*fsurface_area*0.012*1440/50; //50kg bags
            let psand=0.8*fsurface_area*0.012*1600/1000; //tonnes 
            let display =document.getElementById("fdisplay");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);   
    
            
        }
    }else if (funits === 'ft'){
        let rlength =document.getElementById("rlength").value/3.281;
        let rwidth =document.getElementById("rwidth").value/3.281;

        if(fmixRatio='1:2'){

            let fsurface_area = parseFloat(rlength)*parseFloat(rwidth);
    
            let pcement=0.33*fsurface_area*0.012*1440/50; //50kg bags
            let psand=0.66*fsurface_area*0.012*1600/1000; //tonnes     
           
            let display =document.getElementById("fdisplay");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);
    
        } else if(fmixRatio='1:3'){
    
            let fsurface_area = parseFloat(rlength)*parseFloat(rwidth);
    
            let pcement=0.25*fsurface_area*0.012*1440/50; //50kg bags
            let psand=0.75*fsurface_area*0.012*1600/1000; //tonnes
            
            let display =document.getElementById("fdisplay");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);
    
            
        } else if(fmixRatio='1:4'){
    
            let fsurface_area = parseFloat(rlength)*parseFloat(rwidth);
    
            let pcement=0.2*fsurface_area*0.012*1440/50; //50kg bags
            let psand=0.8*fsurface_area*0.012*1600/1000; //tonnes 
            let display =document.getElementById("fdisplay");
            let newRow = display.insertRow(row);
            let cell1 =newRow.insertCell(0); 
            let cell2 =newRow.insertCell(1);
              
            cell1.innerHTML = pcement.toFixed(1);
            cell2.innerHTML = psand.toFixed(1);    
    
            
        }
    }
    
    
}

function gyboard(){
    
    let bunits=document.getElementById("bunits").value;
    
    

    if (bunits === 'm'){
        let wlenght=document.getElementById("wlenght").value;
        let wheight=document.getElementById("wheight").value;

        let lboards=parseFloat(wlenght)*parseFloat(wheight)/(2.4*1.2);
        let studs=parseFloat(wlenght)/0.4 + 3*parseFloat(wlenght)/2.75;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1); 
              
        cell1.innerHTML = lboards.toFixed(1);
        cell2.innerHTML = studs.toFixed(1);
            
    }else if (bunits === 'ft'){
        let wlenght=document.getElementById("wlenght").value/3.281;
        let wheight=document.getElementById("wheight").value/3.281;

        let lboards=parseFloat(wlenght)*parseFloat(wheight)/(2.4*1.2);
        let studs=parseFloat(wlenght)/0.4 + 3*parseFloat(wlenght)/2.75;

        let display =document.getElementById("display");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0); 
        let cell2 =newRow.insertCell(1); 
              
        cell1.innerHTML = lboards.toFixed(1);
        cell2.innerHTML = studs.toFixed(1);
    }

}

function gyfiller(){
    let funits=document.getElementById("funits").value;
    

    if (funits === 'm'){
        let wllenght=document.getElementById("wllenght").value;
        let wlheight=document.getElementById("wlheight").value;

        let fbags=parseFloat(wllenght)*parseFloat(wlheight)/5;
        
        let display =document.getElementById("displayf");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0);            
              
        cell1.innerHTML = fbags.toFixed(1);
             
    }else if (funits === 'ft'){
        let wllenght=document.getElementById("wllenght").value/3.281;
        let wlheight=document.getElementById("wlheight").value/3.281;

        let fbags=parseFloat(wllenght)*parseFloat(wlheight)/5;
        
        let display =document.getElementById("displayf");
        let newRow = display.insertRow(row);
        let cell1 =newRow.insertCell(0);            
              
        cell1.innerHTML = fbags.toFixed(1);
    }
}

const lightBoxContainer=document.querySelector(".lightbox");
const portfolioItems=document.querySelector(".portfolio-items").children;

const close=document.querySelector(".lightbox-close");
const prevbutton=document.querySelector(".previmg");
const nextbutton=document.querySelector(".nextimg");

//work


let index;
let imgSrc;
const lightboxImage=document.querySelector(".lightbox-img");

var i = 0;
var images =[];
var bd32 =[];
var bedst1 =[];
var bd51=[];
var bd4bg=[]; //4bdbig
var app2bd=[];

//work
var work = [];
var time = 1000;

images[0] ='3bd1/gable2.jpg';
images[1] ='3bd1/ar.jpg';
images[2] ='3bd1/bck.jpg';
images[3] ='3bd1/tp.jpg';
images[4] ='3bd1/gable.jpg';
images[5] ='3bd1/gable3.jpg';

bd32[0]= '3bd2/3bd2 - Picture3.jpg';
bd32[1]= '3bd2/3bd2 - Picture1.jpg';
bd32[2]= '3bd2/3bd2 - Picture2.jpg';
bd32[3]= '3bd2/3bd2 - Picture6.jpg';
bd32[4]= '3bd2/3bd2 - Picture4.jpg';
bd32[5]= '3bd2/3bd2 - Picture5.jpg';

bedst1[0]='bedsitter/bedsitters50x100 - Picture1.jpg';
bedst1[1]='bedsitter/bedsitters50x100 - Picture2.jpg';
bedst1[2]='bedsitter/bedsitters50x100 - Picture3.jpg';
bedst1[3]='bedsitter/bedsitters50x100 - Picture4.jpg';
bedst1[4]='bedsitter/bedsitters50x100 - Picture5.jpg';
bedst1[5]='bedsitter/bedsitters50x100 - Picture5.jpg';

bd51[0]='5bd1/5bedrmman40x80 - Picture2.jpg';
bd51[1]='5bd1/5bedrmman40x80 - Picture3.jpg';
bd51[2]='5bd1/5bedrmman40x80 - Picture1.jpg';
bd51[3]='5bd1/5bedrmman40x80 - Picture5.jpg';
bd51[4]='5bd1/5bedrmman40x80 - Picture4.jpg';

bd4bg[0]='4bd2/4bdbg - Picture1.jpg';
bd4bg[1]='4bd2/4bdbg - Picture2.jpg';
bd4bg[2]='4bd2/4bdbg - Picture3.jpg';
bd4bg[3]='4bd2/4bdbg - Picture4.jpg';

app2bd[0]='2bdapp/2bd1bd2 - Picture1.jpg';
app2bd[1]='2bdapp/2bd1bd2 - Picture2.jpg';
app2bd[2]='2bdapp/2bd1bd2 - Picture3.jpg';

work[0]='fb/b1.jpg';
work[1]='fb/b2.jpg';
work[2]='fb/steel.jpg';
work[3]='fb/b3.jpg';
work[4]='fb/b4.jpg';
work[5]='fb/b5.jpg';
work[6]='fb/b6.jpg';
work[7]='fb/b7.jpg';
work[8]='fb/b8.jpg';
work[9]='fb/b9.jpg';


lightBoxContainer.addEventListener("click",function(event){
    if(event.target!==prevbutton && event.target!==nextbutton && event.target!==lightboxImage){
        lightBox();
        
    }
     
})


for(let k=0; k<portfolioItems.length; k++){
    
    portfolioItems[k].addEventListener("click", function(){
        index=k;
        if (index==0){
        
        changeImage();
        
        } else if (index==1){
            bd32Image();
        }else if (index==2){
            mbd51();
        }else if (index==3){
            bd4big();
        }else if (index==4){
            app2bed();
        } else if (index==7){
            bedstt1();
        }
       lightBox();
       

    })
    
   
}




function next(){
    if (index==0){
        if (i==images.length - 1){
            i=0;
        }else{
            i++;
        }
        changeImage();
    }else if(index==1){
        if (i==bd32.length - 1){
            i=0;
        }else{
            i++;
        }
        bd32Image();
    }else if(index==2){
        if (i==bd51.length - 1){
            i=0;
        }else{
            i++;
        }
        mbd51();
    }else if(index==3){
        if (i==bd4bg.length - 1){
            i=0;
        }else{
            i++;
        }
        bd4big();
    }else if(index==4){
        if (i==app2bd.length - 1){
            i=0;
        }else{
            i++;
        }
        app2bed();
    }else if(index==7){
        if (i==bedst1.length - 1){
            i=0;
        }else{
            i++;
        }
        bedstt1();
    }
    
}

function prev(){
    if (index==0){
        if (i==0){
        i=images.length-1;
    }else{
        i--;
    }
    changeImage();
    }else if (index==1){
        if (i==0){
        i=bd32.length-1;
    }else{
        i--;
    }
    bd32Image();
    }else if (index==2){
        if (i==0){
        i=bd51.length-1;
    }else{
        i--;
    }
    mbd51();
    }else if (index==3){
        if (i==0){
        i=bd4bg.length-1;
    }else{
        i--;
    }
    bd4big();
    }else if (index==4){
        if (i==0){
        i=app2bd.length-1;
    }else{
        i--;
    }
    app2bed();
    }else if (index==7){
        if (i==0){
        i=bedst1.length-1;
    }else{
        i--;
    }
    bedstt1();
    }

}


function lightBox(){
    lightBoxContainer.classList.toggle("open");
}

function changeImage(){
    //lightBoxContainer.classList.toggle("open");
    
  imgSrc = images[i];
    lightboxImage.src=imgSrc;
    //lightboxImage.src=imgSrc;
    
    //document.slide.src = images[i];
    //lightBoxContainer.classList.toggle("open");

   // if(i < images.length - 1){

    //    i++;

    //} else {
   //     i = 0;
   // }

   // setTimeout("changeImage()", time);
}
function bd32Image(){
    //lightBoxContainer.classList.toggle("open");
    
  imgSrc = bd32[i];
    lightboxImage.src=imgSrc;
    
}

function  mbd51(){
    imgSrc = bd51[i];
    lightboxImage.src=imgSrc;

}

function bd4big(){
    imgSrc = bd4bg[i];
    lightboxImage.src=imgSrc;

}
function app2bed(){
    imgSrc = app2bd[i];
    lightboxImage.src=imgSrc;
}

function bedstt1(){
    imgSrc = bedst1[i];
    lightboxImage.src=imgSrc;
}

//window.onload = changeImage;





for(let g=0; g<portfolioItems.length; g++){
    
    portfolioItems[g].addEventListener("click", function(){
        index=g;
        if (index==0){
        
       // wchangeImage();
        
        } else if (index==1){
            bd32Image();
        }else if (index==7){
            bedstt1();
        }
       
       

    })
   
}




function wnext(){
    if (index==0){
        if (i==work.length - 1){
            i=0;
        }else{
            i++;
        }
        wchangeImage();
    }else if(index==1){
        if (i==bd32.length - 1){
            i=0;
        }else{
            i++;
        }
        bd32Image();
    }else if(index==7){
        if (i==bedst1.length - 1){
            i=0;
        }else{
            i++;
        }
        bedstt1();
    }
    
}

function wprev(){
    if (index==0){
        if (i==0){
        i=work.length-1;
    }else{
        i--;
    }
    wchangeImage();
    }else if (index==1){
        if (i==0){
        i=bd32.length-1;
    }else{
        i--;
    }
    bd32Image();
    }else if (index==7){
        if (i==0){
        i=bedst1.length-1;
    }else{
        i--;
    }
    bedstt1();
    }

}




function wchangeImage(){
    //lightBoxContainer.classList.toggle("open");
    
  imgSrc = work[i];
    lightboxImage.src=imgSrc;
    
}
        