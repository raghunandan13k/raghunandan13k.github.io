	  function whatsapp2(name, mobile) {
	    alert("You can WhatsApp! " + name + " on ..\n\n" + mobile);
	  }
	  
	  function mail2(name, mailid) {
	    alert("You can E-Mail " + name + " on ..\n\n" + mailid);
	  }
	  
	  function call2(name, mobile) {
	    alert("You can talk to " + name + " on ..\n\n" + mobile);
	  }
	  
	  String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	  };
	  
      function drawChart() {
		logStart('CHART');
		var data = new google.visualization.DataTable();

 		// 0
		data.addColumn('string', 'CHILD');
		// 1
        	data.addColumn('string', 'FATHER');
        	// 2
		data.addColumn('string', 'ALIVE');
		// 3
		data.addColumn('string', 'MOBILE');
		// 4
		data.addColumn('string', 'WHATSAPP');
		// 5
		data.addColumn('string', 'EMAIL');
		// 6
		data.addColumn('string', 'OTHER');
		
        data.addRows([
			[{v:'1', f:'KOLIWADA'}, '1', 'DEAD', '', '', '', '' ],
		  [{v:'1001', f:'VEDANARAYANA BHAT'}, '1', 'DEAD', '', '', '', '' ],          			
          [{v:'2001', f:'MADHAVA BHAT'}, '1001', 'ALIVE', '', '', '', '' ],
			[{v:'20011', f:'SATHISH BHAT'}, '2001', 'ALIVE', '', '', '', '' ],
			[{v:'20012', f:'MAHESH BHAT'}, '2001', 'ALIVE', '', '', '', '' ],
				[{v:'200121', f:'PANNAGA BHAT'}, '20012', 'ALIVE', '', '', '', '' ],
			[{v:'20013', f:'HARISH BHAT'}, '2001', 'ALIVE', '', '', '', '' ],
          [{v:'2002', f:'GANGHADHARA BHAT'}, '1001', 'ALIVE', '', '', '', '' ],
			[{v:'20021', f:'BALACHANDRA K G'}, '2002', 'ALIVE', '', '', '', '' ],
				[{v:'200211', f:'GOUTHAM BHAT'}, '20021', 'ALIVE', '', '', '', '' ],
				[{v:'200212', f:'GOVRAW BHAT'}, '20021', 'ALIVE', '', '', '', '' ],
			[{v:'20022', f:'RAGHAVENDRA K G'}, '2002', 'ALIVE', '', '', '', '' ],
				[{v:'200221', f:'SUHRUTH SHANKARA BHAT'}, '20022', 'ALIVE', '', '', '', '' ],
          [{v:'2003', f:'RANGANATHA BHAT'}, '1001', 'ALIVE', '', '', '', '' ],
			[{v:'20031', f:'KIRAN KUMAR R'}, '2003', 'ALIVE', '', '', '', '' ],
				[{v:'200311', f:'PRATHAM'}, '20031', 'ALIVE', '', '', '', '' ],
          [{v:'2004', f:'SUNDARESH BHAT'}, '1001', 'ALIVE', '', '', '', '' ],
			[{v:'20041', f:'DEEPAK'}, '2004', 'ALIVE', '', '', '', '' ],
		  [{v:'2005', f:'KESHAVA MURTHY'}, '1001', 'ALIVE', '', '', '', '' ],
			[{v:'20051', f:'ANIL BHAT'}, '2005', 'ALIVE', '', '', '', '' ],
				[{v:'200511', f:'ABHINAV BHAT'}, '20051', 'ALIVE', '', '', '', '' ],
			[{v:'20052', f:'SUNIL MURTHY'}, '2005', 'ALIVE', '', '', '', '' ],
				[{v:'200521', f:'ROHAN MURTHY'}, '20052', 'ALIVE', '', '', '', '' ],
          [{v:'2006', f:'KRISHNAMURTHY'}, '1001', 'ALIVE', '', '', '', '' ],
			[{v:'20061', f:'RAGHUNANDAN KRISHNAMURTHY'}, '2006', 'ALIVE', '9900166130', 'YES', 'raghunandan13k@gmail.com', '' ],
				[{v:'200611', f:'SAMARTH RAGHUNANDAN'}, '20061', 'ALIVE', '', '', '', '' ],
			[{v:'20062', f:'VEDANARAYANA KRISHNAMURTHY'}, '2006', 'ALIVE', '', '', '', '' ],
          [{v:'2007', f:'SURESH'}, '1001', 'ALIVE', '', '', '', '' ],
		  
		  [{v:'1002', f:'PANDURANGA BHAT'}, '1', 'DEAD', '', '', '', '' ],
			[{v:'10021', f:'RATHNAKARA BHAT'}, '1002', 'ALIVE', '', '', '', '' ],
				[{v:'100211', f:'DILIP BHAT'}, '10021', 'ALIVE', '', '', '', '' ],
					[{v:'1002111', f:'SHREYAS BHAT'}, '100211', 'ALIVE', '', '', '', '' ],
        ]);
		
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        
		
		for (var row = 0; row < data.getNumberOfRows(); row++) 
		{
		    var name = data.getFormattedValue(row,0).toProperCase();
			
			if(name.length > 15)
			name = name.replace(' ', '<BR>');
			
			//console.log(data.getFormattedValue(row,0));
			//var tempValue = "<a href='TARGET'><img src='profiles/PERSON.PNG'></a><BR><div title='TITLE'>" + name + "</div>";

			var tempValue = "<a href='TARGET'><img src='https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/People_group_users_friends_man_user_vector.png'></a><BR><div title='TITLE'>" + name + "</div>";
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
			  tempValue = tempValue + "<a href='#' onClick='call2(\"" + name.replace('<BR>', ' ') + "\"," + (data.getValue(row,3) + '') + ")'><img id='img' src='https://cloud.githubusercontent.com/assets/10024457/5278258/6d3e7d00-7afd-11e4-9785-389d90f4702e.png'></a>";
			}
			
			// 2. WhatsApp!
			if( (data.getValue(row,4) + '') != '')
			{
			  tempValue = tempValue + "<a href='#' onClick='whatsapp2(\"" + name.replace('<BR>', ' ') + "\"," + (data.getValue(row,3) + '') + ")'><img id='img' src='https://cloud.githubusercontent.com/assets/10024457/5278257/6d067090-7afd-11e4-9f50-3b7f4324cc1c.PNG'></a>";
			}
			
			// 3. Email
			if( (data.getValue(row,5) + '') != '')
			{
			  tempValue = tempValue + "<a href='#' onClick='mail2(\"" + name.replace('<BR>', ' ') + "\", \"" + (data.getValue(row,5) + '') + "\")'><img id='img' src='https://cloud.githubusercontent.com/assets/10024457/5278256/6cd296ee-7afd-11e4-8a8a-f99c5f67ebe9.png'></a>";
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
