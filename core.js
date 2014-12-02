	  function whatsapp(name, mobile) {
	    alert("You can reach " + name + " on " + mobile);
	  }
	  
	  String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	  };
	  
      function drawChart() {
		logStart('CHART');
		var data = new google.visualization.DataTable();

		data.addColumn('string', 'CHILD');
        data.addColumn('string', 'FATHER');
        data.addColumn('string', 'ALIVE');	
		data.addColumn('string', 'MOBILE');		
		data.addColumn('string', 'WHATSAPP');
		
        data.addRows([
		[{v:'1', f:'KOLIWADA'}, '1', 'DEAD', '', '' ],
		  [{v:'1001', f:'VEDANARAYANA BHAT'}, '1', 'DEAD', '', '' ],          			
          [{v:'2001', f:'MADHAVA BHAT'}, '1001', 'ALIVE', '', '' ],
			[{v:'20011', f:'SATHISH BHAT'}, '2001', 'ALIVE', '', '' ],
			[{v:'20012', f:'MAHESH BHAT'}, '2001', 'ALIVE', '', '' ],
				[{v:'200121', f:'PANNAGA BHAT'}, '20012', 'ALIVE', '', '' ],
			[{v:'20013', f:'HARISH BHAT'}, '2001', 'ALIVE', '', '' ],
          [{v:'2002', f:'GANGHADHARA BHAT'}, '1001', 'ALIVE', '', '' ],
			[{v:'20021', f:'BALACHANDRA K G'}, '2002', 'ALIVE', '', '' ],
				[{v:'200211', f:'GOUTHAM BHAT'}, '20021', 'ALIVE', '', '' ],
				[{v:'200212', f:'GOVRAW BHAT'}, '20021', 'ALIVE', '', '' ],
			[{v:'20022', f:'RAGHAVENDRA K G'}, '2002', 'ALIVE', '', '' ],
				[{v:'200221', f:'SUHRUTH SHANKARA BHAT'}, '20022', 'ALIVE', '', '' ],
          [{v:'2003', f:'RANGANATHA BHAT'}, '1001', 'ALIVE', '', '' ],
			[{v:'20031', f:'KIRAN KUMAR R'}, '2003', 'ALIVE', '', '' ],
				[{v:'200311', f:'PRATHAM'}, '20031', 'ALIVE', '', '' ],
          [{v:'2004', f:'SUNDARESH BHAT'}, '1001', 'ALIVE', '', '' ],
			[{v:'20041', f:'DEEPAK'}, '2004', 'ALIVE', '', '' ],
		  [{v:'2005', f:'KESHAVA MURTHY'}, '1001', 'ALIVE', '', '' ],
			[{v:'20051', f:'ANIL BHAT'}, '2005', 'ALIVE', '', '' ],
				[{v:'200511', f:'ABHINAV BHAT'}, '20051', 'ALIVE', '', '' ],
			[{v:'20052', f:'SUNIL MURTHY'}, '2005', 'ALIVE', '', '' ],
				[{v:'200521', f:'ROHAN MURTHY'}, '20052', 'ALIVE', '', '' ],
          [{v:'2006', f:'KRISHNAMURTHY'}, '1001', 'ALIVE', '', '' ],
			[{v:'20061', f:'RAGHUNANDAN KRISHNAMURTHY'}, '2006', 'ALIVE', '9900166130', 'YES' ],
				[{v:'200611', f:'SAMARTH RAGHUNANDAN'}, '20061', 'ALIVE', '', '' ],
			[{v:'20062', f:'VEDANARAYANA KRISHNAMURTHY'}, '2006', 'ALIVE', '', '' ],
          [{v:'2007', f:'SURESH'}, '1001', 'ALIVE', '', '' ],
		  
		  /*[{v:'1002', f:'PANDURANGA BHAT'}, '1', 'DEAD', '', '' ],
			[{v:'10021', f:'RATHNAKARA BHAT'}, '1002', 'ALIVE', '', '' ],
				[{v:'100211', f:'DILIP BHAT'}, '10021', 'ALIVE', '', '' ],
					[{v:'1002111', f:'SHREYAS BHAT'}, '100211', 'ALIVE', '', '' ],*/
        ]);
		
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        
		
		for (var row = 0; row < data.getNumberOfRows(); row++) 
		{
		    var name = data.getFormattedValue(row,0).toProperCase();
			
			if(name.length > 15)
			name = name.replace(' ', '<BR>');
			
			//console.log(data.getFormattedValue(row,0));
			var tempValue = "<a href='TARGET'><img src='profiles/PERSON.PNG'></a><BR><div title='TITLE'>" + name + "</div>";
			tempValue = tempValue.replace('PERSON.PNG', data.getValue(row,0) + '_SMALL.PNG');
			tempValue = tempValue.replace('TITLE', data.getValue(row,0));
			tempValue = tempValue.replace('TARGET', data.getValue(row,0) + '.HTML');
			
			// 1. ALIVE OR DEAD			
			if( (data.getValue(row,2) + '') == 'DEAD')
			{
			  //console.log(data.getValue(row,2));
			  data.setRowProperty(row, 'style', 'background: #D8D8D8;border-color: #D8D8D8');
			}
			else
			{
			  data.setRowProperty(row, 'style', 'background: #DABFFF;border-color: #AE8CFF');
			}
			
			// 2. MOBILE
			if( (data.getValue(row,3) + '') != '')
			{
			  tempValue = tempValue + "<a href='#' onClick='whatsapp(\"" + name.replace('<BR>', ' ') + "\"," + (data.getValue(row,3) + '') + ")'><img id='img' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCXENg78JDaCYveQ4ClH01LZOnew_YmU4I_2B7EqXjLgG_3QAS0w'></a>";
			}
			
			// 2. WhatsApp!
			if( (data.getValue(row,4) + '') != '')
			{
			  tempValue = tempValue + "<a href='#' onClick='whatsapp(\"" + name.replace('<BR>', ' ') + "\"," + (data.getValue(row,3) + '') + ")'><img id='img' src='data:image/jpeg;base64,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'></a>";
			}
			
			data.setFormattedValue(row,0,  tempValue);
			//console.log(data.getFormattedValue(row,0));
		}
		
		chart.draw(data, {allowHtml:true, allowCollapse: true, is3D: true});
		logEnd('CHART');
      }
	  
	function logStart(text) {
		try{
			logit("STARTED");
			console.time(text);
		} catch(e) {
		}
	}

	function logEnd(text) {
		try{
			logit("COMPLETED");
			console.timeEnd(text);
		} catch(e) {
		}
	}
	
	function logit(msg) {
		try { console.log( 'logit '+msg ); } catch ( e ) { };
	}
