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
          data.addRows(koliwadaData);
        }
        if(sourceTree == 'KOLKUNTE') {
          data.addRows(kolkunteData);
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
