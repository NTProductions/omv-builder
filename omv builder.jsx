var thisApp = app;

$.writeln("--------START---------------");

var counter = 0;

var appName = app.appName;
var htmlFile = File("~/Desktop/"+appName+"_omv.html");

htmlFile.open("w");
htmlFile.writeln("<h1>"+appName+" OMV</h1>\r");

var propertyHeader = "<h3>App</h3>\r";

htmlFile.writeln(propertyHeader);

var subObj;


for(var i in app) {
    //if(counter == 51) {
    //$.writeln(i);

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
            subObj = app[i];
            for(var a in subObj) {
                //$.writeln(a);
               // $.writeln(subObj[a]);
               if(subObj[a] != null) {
                if(subObj[a].toString()[0] == "\n") {
                    // subobj is a method
                    htmlFile.writeln("<div class='methodClass'>M: "+(a).toString()+"</div>");
                    htmlFile.writeln("<div class='methodFunction'>"+subObj[a].toString().slice(subObj[a].toString().indexOf("f"), subObj[a].toString().indexOf(")")+1)+"</div><br>");
                    } else {
                    // subobj is a prop
                    if(subObj[a] instanceof Object) {
                    htmlFile.writeln("<h3>"+(a).toString()+"</h3><br>");    
                        } else {
                     htmlFile.writeln("<div class='propertyClass'>"+(subObj[a]).toString()+"</div><br>");       
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
    counter++;
    }



htmlFile.close();

$.writeln("--------END---------------");