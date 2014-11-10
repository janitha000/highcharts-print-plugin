

<html>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>

<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
<script src="./jquery.ui.position.js"></script>
<script src="./jquery.contextMenu.js"></script>


<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="./style.css">

	<body>

<body>

<div id = "content1" style="width: 100%; ">
<div id="content" style="float:left; border: solid; height: 1122px; width: 794px; ">

    <div id="container" style="height: 400; width:400;"></div>
    <div id="otherData">

    </div>
</div>

<div id ="controls" style="float:right; "> 
<button id="title" class="autocompare">Get svg</button>

<button id="printPre" class="autocompare">Print Preview</button>
<button id="printButton" class="autocompare">Print Chart</button>
<button id="change" class="autocompare">Change Chart</button>


<br> <p> Orientation</p>

<input type="radio" id="orietation" name="radiob"value="Portrait" checked="checked"/>Portrait
<br>
<input type="radio" id="orietation" name="radiob" value="Landscape"/>Landscape <br>
<div id="legend">

<p>Legend</p>
<select id="alignment" name="align">
    <option value="left">Left</option>
    <option value="right">Right</option>
    <option value="center">Center</option> 
</select>
<select id="Valignment" name="valign">
    <option value="top">Top</option>
    <option value="bottom">Bottom</option>
    <option value="middle">Middle</option> 
</select>
<select id="layout" name="layout">
    <option value="Vertical">Vertical</option>
    <option value="horizontal">Horizontal</option>
    
</select><br>
</div>

<div id ="subtitle">
<p>Subtitle</p>
<select id="Talignment" name="talign">
    <option value="left">Left</option>
    <option value="right">Right</option>
    <option value="center">Center</option> 
</select>
<select id="VTalignment" name="vtalign">
    <option value="top">Top</option>
    <option value="bottom">Bottom</option>
    <option value="middle">Middle</option> 
</select>
</div>

<textarea class="FormElement" name="term" id="img" cols="40" rows="4"></textarea><br>
<!-- <p>Content<input type="textarea" name="img" id = "img" value = "" rows="4" cols="50"><br></p> -->

<button id="size" class="autocompare">Print Preview</button><br>
<button id="resize" class="autocompare">Resize</button><br>
</div>
</div>



</body>

<script>


	 
$(function () {
    
    $(function() {
        $( "#container" ).draggable({ containment: "parent" });
        $( "#otherData" ).draggable({ containment: "parent" });
        

    });

    var oriChart = $('#container').highcharts({
    //$('#container').highcharts({

        chart: {
            renderTo: 'container',
            type: 'line',
            width: 400,
            height: 400
        },
        title: {
            text: 'Highcharts Draggable Legend Demo'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                zIndex: 6
            }
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            labels: {
                zIndex: 6
            }
        },
        subtitle: {
            text: 'This is a test subtitle',
            align: 'center',
            x: -10
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.x +': '+ this.y +'°C';
            }
        },
        
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },

        exporting: {
            url: 'http://export.highcharts.com/'
        },

        load: function () {
            loaded = true
        },

        
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
    

        
    
   


    $("input[name='radiob']").change(function(){
        var value = $("input:radio[name=radiob]:checked").val();
        if(value == 'Portrait'){
            
                $( "#content" ).height(1122);
                $( "#content" ).width(794);
             }
        else {
            
            $( "#content" ).height(794);
            $( "#content" ).width(1122);
            $( "#controls" ).height(794);
            
        }
    });

    // the button handler
    $('#printPre').click(function (options) {
        
        var value = $("input:radio[name=radiob]:checked").val();
        
        
    });

    $('#printButton').click(function () {
        Popup($('#content').html());
        
        alert(oriChart.options);
        function Popup(data) 
        {
            var mywindow = window.open('', 'my div', 'height=1000,width=1000');
            mywindow.document.write('<html><head>');
            mywindow.document.write('</head><body >');
            mywindow.document.write(data);
            mywindow.document.write('</body></html>');

            mywindow.print();
            mywindow.close();

            return true;
        }

    });

    $('#title').click(function () {
        alert(oriChart.options);
            });
       
   

     $("#alignment").change(function () {
         var chart = $('#container').highcharts();
         $( "alignment option:selected" ).each(function() {
             
                // chartOptions:{
                // legend:{
                //     align:$( this ).text()
                // }
            
         });
      
     });

      

     

function resizeChart(){

        var chart = $('#container').highcharts();
        $('#container').resizable({
    
        resize: function() {
        chart.setSize(
            this.offsetWidth - 20, 
            this.offsetHeight - 20,
            false
        );
    }
});
    };

function legend(){
    $( "#legend" ).dialog({
        buttons: { "Done" : modifyLegend}
    });

    function modifyLegend(){
        var chart = $('#container').highcharts();

    var options = {
        
            legend: {
                align: $("#alignment option:selected").val(),
                verticalAlign: $("#Valignment option:selected").val(),
                layout: $("#layout option:selected").val(),
                
            }
        };
        
        //Highcharts.setOptions(options);
        var chartOptions = chart.options;
        var newOptions = Highcharts.merge(chartOptions, options);
        
        chart.destroy();
        var chart1 = new Highcharts.Chart(newOptions); 
    }
    
    
};

function subtitle(){      // **************************bottom**************************
     $( "#subtitle" ).dialog({
        buttons: { "Done" : modifySubtitle}
     });

     function modifySubtitle(){
         var chart = $('#container').highcharts();

        var options = {
            subtitle: {
                
                align: $("#Talignment option:selected").val(),
                verticalAlign: $("#VTalignment option:selected").val(),
                x: -10
                
                
                
            }
        }
       // Highcharts.setOptions(options);
        var chartOptions = chart.options;
        var newOptions = Highcharts.merge(chartOptions, options);
        
        chart.destroy();
        var chart1 = new Highcharts.Chart(newOptions);
     }
}


$(function(){
    $.contextMenu({
        selector: '#container', 
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "resize": {
                name: "Resize",
                callback: function(){
                       resizeChart();
                    }
                },
            "legend": {
                name: " Legend", 
                callback: function(){
                       legend();
                    }
            },
            "subtitle": {
                name: "Subtitle", 
                callback: function(){
                       subtitle();
                    }
            },
            
        }
    });
    
    
});
    






});

</script>

</html>