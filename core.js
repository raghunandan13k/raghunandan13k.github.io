	  function whatsapp2(name, mobile) {
	    alert("You can WhatsApp! " + name + " on ..\n\n" + mobile);
	  }
	  
	  function mail2(name, mailid) {
	    alert("You can E-Mail " + name + " on ..\n\n" + mailid);
	  }
	  
	  function call2(name, mobile) {
	    alert("You can talk to " + name + " on ..\n\n" + mobile);
	  }
	  
	  function bday2(name, bday) {
	    alert(name + " is Celebrating Birthday on..\n\n" + bday);
	  }
	  
	  String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	  };
	  
      function drawChart() {
      	
      		try{
			var URLPARAM = window.location.hash.split('#')[1].toUpperCase();
			$("#SOURCE").val(URLPARAM);
			$("#SOURCE").hide();
		} catch(e) {$("#SOURCE").show();}

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
		data.addColumn('string', 'STYPE');
		// 7
		data.addColumn('string', 'BIRTHDAY');
	
	var sourceTree = $("#SOURCE option:selected").val();
	
	if(sourceTree == 'KOLIWADA') {
        data.addRows([
		[{v:'1', f:'KOLIWADA'}, '1', 'DEAD', '', '', '', 'M' , '' ],
		  [{v:'1001', f:'VEDANARAYANA BHAT'}, '1', 'DEAD', '', '', '', 'M' , '' ],          			
        	
        	// 1
		  [{v:'2001', f:'MADHAVA BHAT'}, '1001', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20011', f:'SATHISH BHAT'}, '2001', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20012', f:'MAHESH BHAT'}, '2001', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'200121', f:'PANNAGA BHAT'}, '20012', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'200122', f:'SNEHA BHAT'}, '20012', 'ALIVE', '', '', '', 'F' , '' ],
			[{v:'20013', f:'HARISH BHAT'}, '2001', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20014', f:'ARUNA RAMPRASANNA'}, '2001', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200141', f:'VANISHREE PRADEEP'}, '20014', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200142', f:'VIDYASHREE RAMPRASANNA'}, '20014', 'ALIVE', '', '', '', 'F' , '' ],
			[{v:'20015', f:'ANURADHA KESHAVAMURTHY'}, '2001', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200151', f:'BHARATH'}, '20015', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200152', f:'BHAVANA'}, '20015', 'ALIVE', '', '', '', 'F' , '' ],
		// 2		
          	[{v:'2002', f:'GANGHADHARA BHAT'}, '1001', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20021', f:'BALACHANDRA K G'}, '2002', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'200211', f:'GOUTHAM BHAT'}, '20021', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'200212', f:'GOVRAW BHAT'}, '20021', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20022', f:'RAGHAVENDRA K G'}, '2002', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'200221', f:'SUHRUTH SHANKARA BHAT'}, '20022', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20023', f:'INDIRA MURALI'}, '2002', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200231', f:'ABHISHEK MURALI'}, '20023', 'ALIVE', '', '', '', 'F' , '' ],
			[{v:'20024', f:'SUVARNA SUBODH'}, '2002', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200241', f:'ULLAS SUBODH'}, '20024', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200242', f:'SHREYA SUBODH'}, '20024', 'ALIVE', '', '', '', 'F' , '' ],
		// 3
		  [{v:'2003', f:'RANGANATHA BHAT'}, '1001', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20031', f:'KIRAN KUMAR R'}, '2003', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'200311', f:'PRATHAM'}, '20031', 'ALIVE', '', '', '', 'M' , '' ],
            		[{v:'20032', f:'POORNIMA VENKATESH'}, '2003', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200321', f:'VIDHATRI VENKATESH'}, '20032', 'ALIVE', '', '', '', 'F' , '' ],
		  
		// 4
		  [{v:'2004', f:'SUNDARESH BHAT'}, '1001', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20041', f:'DEEPAK'}, '2004', 'ALIVE', '', '', '', 'M' , '' ],
		    [{v:'20042', f:'DIVYA SRIKANTH'}, '2004', 'ALIVE', '', '', '', 'F' , '' ],
		  
		// 5
		  [{v:'2005', f:'KESHAVA MURTHY'}, '1001', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20051', f:'ANIL BHAT'}, '2005', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'200511', f:'ABHINAV BHAT'}, '20051', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20052', f:'SUNIL MURTHY'}, '2005', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'200521', f:'ROHAN MURTHY'}, '20052', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'200522', f:'RIYA MURTHY'}, '20052', 'ALIVE', '', '', '', 'F' , '' ],
            		[{v:'20053', f:'ANITHA SURESH'}, '2005', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200531', f:'ANISH SURESH'}, '20053', 'ALIVE', '', '', '', 'F' , '' ],
		  
		// 6
		  [{v:'2006', f:'KRISHNAMURTHY'}, '1001', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20061', f:'RAGHUNANDAN KRISHNAMURTHY'}, '2006', 'ALIVE', '9900166130', 'YES', 'raghunandan13k@gmail.com', 'M' , '28th June' ],
				[{v:'200611', f:'SAMARTH RAGHUNANDAN'}, '20061', 'ALIVE', '', '', '', 'M' , '8th September' ],
			[{v:'20062', f:'VEDANARAYANA KRISHNAMURTHY'}, '2006', 'ALIVE', '9845413446', 'YES', 'vedanarayana_k@gmail.com', 'M' , '23rd December' ],
          
		// 7
		  [{v:'2007', f:'SURESH'}, '1001', 'ALIVE', '', '', '', 'M' , '' ],
			[{v:'20071', f:'SUPRIYA KRISHNA'}, '2007', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200711', f:''}, '20071', 'ALIVE', '', '', '', 'F' , '' ],
		
		// 8
		  [{v:'2008', f:'PREMA SANJEEV RAO'}, '1001', 'ALIVE', '', '', '', 'F' , '' ],
			[{v:'20081', f:'KRISHNA'}, '2008', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200811', f:'PRAGNEYA KRISHNA'}, '20081', 'ALIVE', '', '', '', 'F' , '' ],
			[{v:'20082', f:'ASHWINI'}, '2008', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200821', f:'ANANYA'}, '20082', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200822', f:'SHARANYA'}, '20082', 'ALIVE', '', '', '', 'F' , '' ],
			[{v:'20083', f:'SHALINI ARUN'}, '2008', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200831', f:'TEJASVI'}, '20083', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'200832', f:'SADHVI'}, '20083', 'ALIVE', '', '', '', 'F' , '' ],
				
		  [{v:'1002', f:'PANDURANGA BHAT'}, '1', 'DEAD', '', '', '', 'M' , '' ],
			[{v:'10021', f:'RATHNAKARA BHAT'}, '1002', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'100211', f:'DILIP BHAT'}, '10021', 'ALIVE', '', '', '', 'M' , '' ],
					[{v:'1002111', f:'SHREYAS BHAT'}, '100211', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'100212', f:'DEEPASHREE BHAT'}, '10021', 'ALIVE', '', '', '', 'F' , '' ],
        ]);
        }
        
        if(sourceTree == 'KOLKUNTE') {
        
        $.getJSON( sourceTree.toLowerCase() + '.json', function( json ) {
  		console.log( "JSON : " + json );
  		data.addRows(json);
 	});
 
        data.addRows([
		[{v:'1', f:'KOLKUNTE'}, '1', 'DEAD', '', '', '', 'M' , '' ],
		  [{v:'1001', f:'KHADHI SHANKARAPPA'}, '1', 'DEAD', '', '', '', 'M' , '' ],          			
        	
			[{v:'2001', f:'RAMDAS K S'}, '1001', 'DEAD', '', '', '', 'M' , '' ],
			[{v:'2002', f:'NAGARAJ K S'}, '1001', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'20021', f:'SHREE HARSHA S N'}, '2002', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'20022', f:'DEEPAK'}, '2002', 'ALIVE', '', '', '', 'M' , '20th November' ],
					[{v:'200211', f:'ADHITI'}, '20022', 'ALIVE', '', '', '', 'F' , '' ],
			[{v:'2003', f:'PRABHAKAR K S'}, '1001', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'20031', f:'DIVYA KIRAN'}, '2003', 'ALIVE', '', '', '', 'F' , '' ],
					[{v:'200311', f:'AVANI KIRAN'}, '20031', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'20032', f:'KAVYA K P'}, '2003', 'ALIVE', '', '', '', 'F' , '23rd December' ],
			[{v:'2004', f:'GOPINATH K S'}, '1001', 'ALIVE', '', '', '', 'M' , '' ],
				[{v:'20041', f:'ANVITHA G'}, '2004', 'ALIVE', '', '', '', 'F' , '13th May' ],
		  
		  	[{v:'2005', f:'BHARATHI KRISHNAMURTHY'}, '1001', 'ALIVE', '', '', '', 'F' , '6th February' ],
				[{v:'20051', f:'RAGHUNANDAN KRISHNAMURTHY'}, '2005', 'ALIVE', '9900166130', 'YES', 'raghunandan13k@gmail.com', 'F' , '28th June' ],
					[{v:'200511', f:'SAMARTH RAGHUNANDAN'}, '20051', 'ALIVE', '', '', '', 'F' , '8th September' ],
				[{v:'20052', f:'VEDANARAYANA KRISHNAMURTHY'}, '2005', 'ALIVE', '9845413446', 'YES', 'vedanarayana_k@gmail.com', 'F' , '23rd December' ],
			[{v:'2006', f:'GEETHA SHANKARANARAYANA'}, '1001', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'20061', f:'RAKSHITHA SHANKARANARAYANA'}, '2006', 'ALIVE', '', '', '', 'F' , '7th January' ],
			[{v:'2007', f:'JAYASHREE RAVINDRA'}, '1001', 'ALIVE', '', '', '', 'F' , '' ],
				[{v:'20071', f:'MADHUKARA RAVINDRA'}, '2007', 'ALIVE', '', '', '', 'F' , '29th October' ],				
        ]);
        }
		
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        var view  = new google.visualization.DataView(data);
        	
		for (var row = 0; row < data.getNumberOfRows(); row++) 
		{
		    var name = data.getFormattedValue(row,0).toProperCase();
			
			if(name.length > 15)
			name = name.replace(' ', '<BR>');
			
			if((data.getValue(row,6) + '') == 'F') {
			   name = name + '<BR>(' + data.getValue(row,6) + ')';
			}
			
			var tempValue = "<a href='#'><img src='PERSON.PNG'></a><BR><div title='TITLE'>" + name + "</div>";
		
			// Get Profile Image for Node
			tempValue = tempValue.replace('PERSON.PNG', getProfileImage(data.getValue(row,0), sourceTree));
		
			// ToolTip Text
			tempValue = tempValue.replace('TITLE', data.getValue(row,0));
			
			// Link to Induvidual Pages
			//tempValue = tempValue.replace('#', data.getValue(row,0) + '.HTML');
			
			// 1. ALIVE OR DEAD			
			if( (data.getValue(row,2) + '') == 'DEAD')
			{
			  data.setRowProperty(row, 'style', 'background: #D8D8D8;border-color: #D8D8D8');
			}
			else
			{
			  data.setRowProperty(row, 'style', 'background: #DABFFF;border-color: #AE8CFF');
			}
			
			// 2. MOBILE
			if( (data.getValue(row,3) + '') != '')
			{
			  tempValue = tempValue + "<a href='#' onClick='call2(\"" + name.replace('<BR>', ' ') + "\"," + (data.getValue(row,3) + '') + ")'><img id='img' src='https://cloud.githubusercontent.com/assets/10024457/5312482/95a2981a-7c80-11e4-88b1-3cd3aa092a88.png' title='Contact Number'></a>";
			}
			
			// 2. WhatsApp!
			if( (data.getValue(row,4) + '') != '')
			{
			  tempValue = tempValue + "<a href='#' onClick='whatsapp2(\"" + name.replace('<BR>', ' ') + "\"," + (data.getValue(row,3) + '') + ")'><img id='img' src='https://cloud.githubusercontent.com/assets/10024457/5312481/95a012a2-7c80-11e4-9357-5ce19d6b2572.png'></a>";
			}
			
			// 3. Email
			if( (data.getValue(row,5) + '') != '')
			{
			  tempValue = tempValue + "<a href='#' onClick='mail2(\"" + name.replace('<BR>', ' ') + "\", \"" + (data.getValue(row,5) + '') + "\")'><img id='img' src='https://cloud.githubusercontent.com/assets/10024457/5312480/959e5ec6-7c80-11e4-81a1-bfbff8309651.png' title='Email Address'></a>";
			}
			
			// 4. BirthDay
			if( (data.getValue(row,7) + '') != '')
			{
			  tempValue = tempValue + "<a href='#' onClick='bday2(\"" + name.replace('<BR>', ' ') + "\", \"" + (data.getValue(row,7) + '') + "\")'><img id='img' src='https://cloud.githubusercontent.com/assets/10024457/5353985/b6530a16-7fa7-11e4-966b-7c5be639b17b.png' title='BirthDay!'></a>";
			}
			
			data.setFormattedValue(row,0,  tempValue);
		}
		
		var selectedType = $("#STYPE option:selected").val();
		if(selectedType == 'MALE')
		{
			view.setRows(view.getFilteredRows([{column: 6, value: 'M'}]));
		}
		
		chart.draw(view, {allowHtml:true, allowCollapse: true, is3D: true});
		logEnd('CHART');
      }
	  
	function logStart(text) {
		try{logit("STARTED");console.time(text);} catch(e) {}
	}
	
	function logEnd(text) {
		try{logit("COMPLETED");console.timeEnd(text);} catch(e) {}
	}
	
	function logit(msg) {
		try { console.log( 'logit '+ msg ); } catch ( e ) { };
	}
