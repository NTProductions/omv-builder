var thisApp = app;

$.writeln("--------START---------------");

var counter = 0;

//var appName = app.appName;
var htmlFile = File("~/Desktop/"++"_omv.html");

htmlFile.open("w");
htmlFile.writeln("<link href='https://fonts.googleapis.com/css?family=Anonymous Pro' rel='stylesheet'>");
htmlFile.writeln("<link rel='stylesheet' href='styles.css'/>");
htmlFile.writeln("<h1>"+"PR"+" OMV</h1>\r");

var propertyHeader = "<h3>App</h3>\r";

htmlFile.writeln(propertyHeader);

var subObj, subSubObj;


for(var i in app) {
    //if(counter == 51) {
    //$.writeln(i);
    if(app[i] != null) {
    if(app[i].toString()[0] == "\n") {
        // is a method
        htmlFile.writeln("<div class='methodClass'>M: "+(i).toString()+"</div>");
        htmlFile.writeln("<div class='methodFunction'>"+app[i].toString().slice(app[i].toString().indexOf("f"), app[i].toString().indexOf(")")+1)+"</div><br>");
        } else {
        // is a property
        htmlFile.writeln("<div class='propertyClass'>P: "+(i).toString()+"</div>");
        if(app[i] instanceof Object) {
            // this prop is an object we need to dive deeper into
            //htmlFile.writeln("<div class='propertyClass'>"+(i).toString()+"</div><br>";
            htmlFile.writeln("<h3>"+(i).toString()+"</h3><br>");
            //$.writeln(i);
            subObj = app[i];
            //$.writeln(lengthOfObj(subObj));
            
            for(var a in subObj) {
                //alert("current Object is called " + a);
               // $.writeln(a);
               // $.writeln(subObj[a]);
               if(subObj[a] != null) {
                if(subObj[a].toString()[0] == "\n") {
                    // subobj is a method
                    htmlFile.writeln("<div class='subMethodClass'>M: "+(a).toString()+"</div>");
                    htmlFile.writeln("<div class='subMethodFunction'>"+subObj[a].toString().slice(subObj[a].toString().indexOf("f"), subObj[a].toString().indexOf(")")+1)+"</div><br>");
                    } else {
                    // subobj is a prop
                    //$.writeln(a);
                    if(subObj[a] instanceof Object) {
                    //$.writeln(subObj);    
                   //$.writeln(lengthOfObj(subObj));
                  if(lengthOfObj(subObj) < 70) {
                    htmlFile.writeln("<h3>"+(a).toString()+"</h3><br>");   
                    //////////
                    subSubObj = subObj[a];
                    for(var j in subSubObj) {
                         if(subSubObj[j] != null) {
                         if(subSubObj[j].toString()[0] == "\n") {
                        // subobj is a method
                        htmlFile.writeln("<div class='subSubMethodClass'>M: "+(j).toString()+"</div>");
                        htmlFile.writeln("<div class='subSubMethodFunction'>"+subSubObj[j].toString().slice(subSubObj[j].toString().indexOf("f"), subSubObj[j].toString().indexOf(")")+1)+"</div><br>");
                        } else {
                        // subobj is a prop
                        //$.writeln(a);
                        if(subSubObj[j] instanceof Object) {
                            htmlFile.writeln("<h3>"+(j).toString()+"</h3><br>");   
                            }
                        }
                    }
                }
                    //////////
                    }
                        } else {
                        //    $.writeln("b");
                     htmlFile.writeln("<div class='subPropertyClass'>P: "+(a).toString()+"</div>");
                     htmlFile.writeln("<div class='subPropertyClass'>"+(subObj[a]).toString()+"</div><br>");       
                            }
                        }
                    } // end checking if subObj[a] != null
                } 
            } else {
            // this prop is a simple prop that we just need to read
             htmlFile.writeln("<div class='propertyClass'>"+(app[i]).toString()+"</div><br>");
                }
            }
        
      // }
//~        if(i.toString() == "project") {
//~            alert(counter);
//~            }
}
    counter++;
    }




htmlFile.close();

function lengthOfObj(obj) {
        var counter = 0;

        for(var c in obj) {
            counter++;
            }
        
        return counter;
    }

$.writeln("--------END---------------");