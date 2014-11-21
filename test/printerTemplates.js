function templatePrinter(){
				this.document={}
				this.window={}
				this.printerObj=new ActiveXObject("InternetExplorer.Application")
				this.printerObj.navigate("about:blank")
				i=0
				while(this.printerObj.readystate!==4){
					i++
				}
				this.events={}
				this.me=this
				this.printer=null
				this.margins={top:0.25,bottom:0.25,left:0.25,right:0.25}
				this.orientation="portrait";
				this.pagesize={width:8.5,height:11.0}
				this.events.results={layoutcomplete:false,printcomplete:false}
				this.events.timer={}
				this.htmlContent=false
				this.events.onlayoutcomplete=function(){}
				this.events.onprintcomplete=function(){}
				this.events.layoutcomplete=function(){
					document.objs["a8d3d4c3-a364-4281-94b8-a026e5cfc04f"].events.results.layoutcomplete=true
					document.objs["a8d3d4c3-a364-4281-94b8-a026e5cfc04f"].events.onlayoutcomplete()
				}
				this.events.printcomplete=function(){
					document.objs["a8d3d4c3-a364-4281-94b8-a026e5cfc04f"].events.results.printcomplete=true
					document.objs["a8d3d4c3-a364-4281-94b8-a026e5cfc04f"].events.onprintcomplete()
				}
				this.initSettings=function(){
					this.printerObj.navigate("about:blank")
					i=0
					while(this.printerObj.readystate!==4){
						i++
					}
					if(!this.htmlContent){
						this.printerObj.document.write(document.firstChild.innerHTML);
					}else{
						this.printerObj.document.write(this.htmlContent);
					}
					this.printerObj.document.templateSettings={
						onafterspool:this.events.printcomplete,
						onafterlayout:this.events.layoutcomplete,
						printer:this.printer,
						margins:this.margins,
						pagesize:this.pagesize,
						orientation:this.orientation
					}

				}
				this.postInitSettings=function(){

					document.objs=[]
					document.objs["a8d3d4c3-a364-4281-94b8-a026e5cfc04f"]=this
					document.timers=[]
					document.timers["f19629e6-8fcc-4cfe-a65b-4f647d218e27"]=window.setInterval(document.objs["a8d3d4c3-a364-4281-94b8-a026e5cfc04f"].events.checkTimer,1000)

					this.printerObj.document.objs=document.objs
					this.printerObj.document.timers=document.timers
					this.document=document
					this.window=window
				}
				this.printPreviewUsingTemplate=function(strPrintTemplate){
					if(!strPrintTemplate){
						strPrintTemplate=path
					}
					this.initSettings()
						this.printerObj.document.parentWindow.focus();
					this.printerObj.ExecWB(7,2,strPrintTemplate,null);
					this.postInitSettings()
				}

				this.printUsingTemplate=function(strPrintTemplate){
					if(!strPrintTemplate){
						strPrintTemplate=path
					}
					this.initSettings()
						this.printerObj.document.parentWindow.focus();
					this.printerObj.ExecWB(6,2,strPrintTemplate,null);
					this.postInitSettings()

				}
				this.events.checkTimer=function(){
					cancelTimer=false
					if(!window.document.counter){
						window.document.counter=0
					}
					window.document.counter+=1
					strText="unknown "
					try{


					timer=document.timers["f19629e6-8fcc-4cfe-a65b-4f647d218e27"]
					objvar=document.objs["a8d3d4c3-a364-4281-94b8-a026e5cfc04f"]
					if((objvar.events.results.printcomplete==true)||(objvar.events.results.layoutcomplete==true)){
						switch(true){
							case ((objvar.events.results.printcomplete==true)&&(objvar.events.results.layoutcomplete==true)):
									strText="done with layout and printing"
									cancelTimer=true

								break;
							case ((objvar.events.results.printcomplete==true)&&(objvar.events.results.layoutcomplete==false)):
									strText="done with printing, waiting on layout"
								break;
							case ((objvar.events.results.layoutcomplete==true)&&(objvar.events.results.printcomplete==false)):
									strText="done with layout, waiting on printing"

								break;
							default:
									strText="unknow exception"
									cancelTimer=true
								break;
						}

					}else{
						strText="waiting on printing and layout"
					}
					window.status=strText+" for "+window.document.counter+" sec."
					if(cancelTimer){
						window.clearInterval(timer)
						window.document.counter=0
						objvar.printerObj.Quit()
					}

					}catch(e){
						window.status(e.description)
					}

				}


			}
