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
		  
		  [{v:'1002', f:'PANDURANGA BHAT'}, '1', 'DEAD', '', '' ],
			[{v:'10021', f:'RATHNAKARA BHAT'}, '1002', 'ALIVE', '', '' ],
				[{v:'100211', f:'DILIP BHAT'}, '10021', 'ALIVE', '', '' ],
					[{v:'1002111', f:'SHREYAS BHAT'}, '100211', 'ALIVE', '', '' ],
        ]);
		
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        
		
		for (var row = 0; row < data.getNumberOfRows(); row++) 
		{
		    var name = data.getFormattedValue(row,0).toProperCase();
			
			if(name.length > 15)
			name = name.replace(' ', '<BR>');
			
			//console.log(data.getFormattedValue(row,0));
			//var tempValue = "<a href='TARGET'><img src='profiles/PERSON.PNG'></a><BR><div title='TITLE'>" + name + "</div>";

			var tempValue = "<a href='TARGET'><img src='data:image/jpeg;base64,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'></a><BR><div title='TITLE'>" + name + "</div>";
			//tempValue = tempValue.replace('PERSON.PNG', data.getValue(row,0) + '_SMALL.PNG');
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
