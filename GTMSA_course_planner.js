const coursesData = {
	  1: {
		'course id': '1',
		'course type': 'waivable introductory',
		'course code': 'CSE6040',
	  },
	  2: {
		'course id': '2',
		'course type': 'waivable introductory',
		'course code': 'ISYE6501',
	  },
	  3: {
		'course id': '3',
		'course type': 'waivable introductory',
		'course code': 'MGT8803',
	  },
	  4: {
		'course id': '4',
		'course type': 'required',
		'course code': 'CSE6242',
	  },
	  5: {
		'course id': '5',
		'course type': 'required',
		'course code': 'MGT6203',
	  },
	  6: {
		'course id': '6',
		'course type': 'required',
		'course code': 'CSE6748',
	  },
	  7: {
		'course id': '7',
		'course type': 'required',
		'course code': 'ISYE6748',
	  },
	  8: {
		'course id': '8',
		'course type': 'required',
		'course code': 'MGT6748',
	  },
	  9: {
		'course id': '9',
		'course type': 'required',
		'course code': 'CSE6740',
	  },
	  10: {
		'course id': '10',
		'course type': 'required',
		'course code': 'CS7641',
	  },
	  11: {
		'course id': '11',
		'course type': 'required',
		'course code': 'ISYE6740',
	  },
	  12: {
		'course id': '12',
		'course type': 'b-electives',
		'course code': 'CS6730',
	  },
	  13: {
		'course id': '13',
		'course type': 'b-electives',
		'course code': 'ECON8803WB2',
	  },
	  14: {
		'course id': '14',
		'course type': 'b-electives',
		'course code': 'MGT6046',
	  },
	  15: {
		'course id': '15',
		'course type': 'b-electives',
		'course code': 'MGT6074',
	  },
	  16: {
		'course id': '16',
		'course type': 'b-electives',
		'course code': 'MGT6078',
	  },
	  17: {
		'course id': '17',
		'course type': 'b-electives',
		'course code': 'MGT6090',
	  },
	  18: {
		'course id': '18',
		'course type': 'b-electives',
		'course code': 'MGT6214',
	  },
	  19: {
		'course id': '19',
		'course type': 'b-electives',
		'course code': 'MGT6311',
	  },
	  20: {
		'course id': '20',
		'course type': 'b-electives',
		'course code': 'MGT6655',
	  },
	  21: {
		'course id': '21',
		'course type': 'b-electives',
		'course code': 'MGT6726',
	  },
	  22: {
		'course id': '22',
		'course type': 'c-electives',
		'course code': 'CS3510',
	  },
	  23: {
		'course id': '23',
		'course type': 'c-electives',
		'course code': 'CS4400',
	  },
	  24: {
		'course id': '24',
		'course type': 'c-electives',
		'course code': 'CS6220',
	  },
	  25: {
		'course id': '25',
		'course type': 'c-electives',
		'course code': 'CP6514',
	  },
	  26: {
		'course id': '26',
		'course type': 'c-electives',
		'course code': 'CS6515',
	  },
	  27: {
		'course id': '27',
		'course type': 'c-electives',
		'course code': 'CS6601',
	  },
	  28: {
		'course id': '28',
		'course type': 'c-electives',
		'course code': 'CS6730',
	  },
	  29: {
		'course id': '29',
		'course type': 'c-electives',
		'course code': 'CS7641',
	  },
	  30: {
		'course id': '30',
		'course type': 'c-electives',
		'course code': 'CS7643',
	  },
	  31: {
		'course id': '31',
		'course type': 'c-electives',
		'course code': 'CS7650',
	  },
	  32: {
		'course id': '32',
		'course type': 'c-electives',
		'course code': 'CS7750',
	  },
	  33: {
		'course id': '33',
		'course type': 'c-electives',
		'course code': 'CS8803MDS',
	  },
	  34: {
		'course id': '34',
		'course type': 'c-electives',
		'course code': 'CS8803NLP',
	  },
	  35: {
		'course id': '35',
		'course type': 'c-electives',
		'course code': 'CS8803SMR',
	  },
	  36: {
		'course id': '36',
		'course type': 'c-electives',
		'course code': 'CSE6010',
	  },
	  37: {
		'course id': '37',
		'course type': 'c-electives',
		'course code': 'CSE6140',
	  },
	  38: {
		'course id': '38',
		'course type': 'c-electives',
		'course code': 'CSE6230',
	  },
	  39: {
		'course id': '39',
		'course type': 'c-electives',
		'course code': 'CSE6643',
	  },
	  40: {
		'course id': '40',
		'course type': 'c-electives',
		'course code': 'CSE6644',
	  },
	  41: {
		'course id': '41',
		'course type': 'c-electives',
		'course code': 'CSE6740',
	  },
	  42: {
		'course id': '42',
		'course type': 'c-electives',
		'course code': 'CSE7750',
	  },
	  43: {
		'course id': '43',
		'course type': 'c-electives',
		'course code': 'CSE8803DSN',
	  },
	  44: {
		'course id': '44',
		'course type': 'c-electives',
		'course code': 'CSE8803DLT',
	  },
	  45: {
		'course id': '45',
		'course type': 'c-electives',
		'course code': 'CSE8803EPI',
	  },
	  46: {
		'course id': '46',
		'course type': 'c-electives',
		'course code': 'ISYE6740',
	  },
	  47: {
		'course id': '47',
		'course type': 'c-electives',
		'course code': 'ISYE8812ZIA',
	  },
	  48: {
		'course id': '48',
		'course type': 's-electives',
		'course code': 'CS7641',
	  },
	  49: {
		'course id': '49',
		'course type': 's-electives',
		'course code': 'CSE6740',
	  },
	  50: {
		'course id': '50',
		'course type': 's-electives',
		'course code': 'ISYE6402',
	  },
	  51: {
		'course id': '51',
		'course type': 's-electives',
		'course code': 'ISYE6404',
	  },
	  52: {
		'course id': '52',
		'course type': 's-electives',
		'course code': 'ISYE6405',
	  },
	  53: {
		'course id': '53',
		'course type': 's-electives',
		'course code': 'ISYE6412',
	  },
	  54: {
		'course id': '54',
		'course type': 's-electives',
		'course code': 'ISYE6413',
	  },
	  55: {
		'course id': '55',
		'course type': 's-electives',
		'course code': 'ISYE6740',
	  },
	  56: {
		'course id': '56',
		'course type': 's-electives',
		'course code': 'ISYE6805',
	  },
	  57: {
		'course id': '57',
		'course type': 'o-electives',
		'course code': 'ISYE6333',
	  },
	  58: {
		'course id': '58',
		'course type': 'o-electives',
		'course code': 'ISYE6334',
	  },
	  59: {
		'course id': '59',
		'course type': 'o-electives',
		'course code': 'ISYE6645',
	  },
	  60: {
		'course id': '60',
		'course type': 'o-electives',
		'course code': 'ISYE6650',
	  },
	  61: {
		'course id': '61',
		'course type': 'o-electives',
		'course code': 'ISYE6663',
	  },
	  62: {
		'course id': '62',
		'course type': 'o-electives',
		'course code': 'ISYE6669',
	  },
	  63: {
		'course id': '63',
		'course type': 'o-electives',
		'course code': 'ISYE8803PTA',
	  },
	  64: {
		'course id': '64',
		'course type': 'o-electives',
		'course code': 'ISYE8813NEM',
	  },
	  65: {
		'course id': '65',
		'course type': 'o-electives',
		'course code': 'ISYE8813VAN',
	  },
	  66: {
		'course id': '66',
		'course type': 'o-electives',
		'course code': 'ISYE8813ZIA',
	  },
	  67: {
		'course id': '67',
		'course type': 'a-electives',
		'course code': 'CP6514',
	  },
	  68: {
		'course id': '68',
		'course type': 'a-electives',
		'course code': 'CP8853',
	  },
	  69: {
		'course id': '69',
		'course type': 'a-electives',
		'course code': 'CP6581',
	  },
	  70: {
		'course id': '70',
		'course type': 'a-electives',
		'course code': 'ISYE6202',
	  },
	  71: {
		'course id': '71',
		'course type': 'a-electives',
		'course code': 'ISYE6335',
	  },
	  72: {
		'course id': '72',
		'course type': 'a-electives',
		'course code': 'ISYE7203',
	  },
	  73: {
		'course id': '73',
		'course type': 'a-electives',
		'course code': 'ISYE8813THO',
	  },
	  74: {
		'course id': '74',
		'course type': 'a-electives',
		'course code': 'ISYE8812ZIA',
	  },
	  75: {
        "course id": "75",
        "course type": "waivable introductory",
        "course code": "MGT6753"
    },
	  76:{
		  "course id": "76",
		  "course type": "s-electives",
          "course code": "ISYE6414"
	 },
	  77:{
		  "course id": "77",
		  "course type": "c-electives",
          "course code": "CSE6240"
	 },
	};

window.onload = function() {
	const coreCourseDropdown = document.getElementById('coreCourseDropdown');
	Object.values(coursesData).forEach(course => {
		if (course['course type'] === 'required') {
			option = document.createElement('OPTION');
			option.value = course['course code'];
			option.text = course['course code'];
			coreCourseDropdown.add(option);
	    }
	});

	
}
const groupedCourses = {};
Object.values(coursesData).forEach(course => {
	const { 'course type': courseType, 'course code': courseCode } = course;

  // Check if the course type exists in the groupedCourses dictionary
	if (!groupedCourses[courseType]) {
    // If not, create an array for the course type
		groupedCourses[courseType] = [];
	}
	status = 0;
  // Push the course data to the respective course type in the dictionary
	groupedCourses[courseType].push({ courseCode, courseType, status });
});
//console.log(findCourse('CSE6040'));

function findCourse(courseCode, courseEle = 0) {	
	const type = courseEle;
	for (const courseType in groupedCourses) {	
		const courses = groupedCourses[courseType];
		if(type){
			if(type != courseType)
				continue;
			else{
				for(let i = 0; i < courses.length; i++){
					if(courses[i].courseCode == courseCode)
					return courses[i];
				}
			}
		}
		else{
			for(let i = 0; i < courses.length; i++){
					if(courses[i].courseCode == courseCode)
					return courses[i];
				}
		}
	}
}
function newUpdate(nameU, newStatus, courseEle = 0){
	const name = nameU;
	const type = courseEle;
	for (const courseType in groupedCourses) {
		const courses = groupedCourses[courseType];
		for(let i = 0; i < courses.length; i++ ){  //loop in each courseType
			if(type){
				if(courses[i].courseCode == name){
					if(courses[i].courseType == type){
						courses[i].status = newStatus;
						break;
					}
					else{
						courses[i].status = 2;
						break;
					}
				}
			}
			else{  //if without coursecode, the first searched course's status = 1, remains are 2
				if(courses[i].courseCode == name){
					newUpdate(courses[i].courseCode, newStatus, courses[i].courseType)
					break;		
				}					
			}			
		}
	}
}
function checkBoxClick() {
	var coreCourseDropdown = document.getElementById('coreCourseDropdown');
  
	if (!document.getElementById('ctrack').checked) {
    for (var i = coreCourseDropdown.length - 1; i >= 0; i--) {
		if (coreCourseDropdown.options[i].value == 'ISYE6740' || coreCourseDropdown.options[i].value == 'CS7641' || coreCourseDropdown.options[i].value == 'CSE6740') {
			coreCourseDropdown.remove(i);
        } 
    }
	} 
	else{
		if (coreCourseDropdown.length == 5) {
			var coursesToAdd = ['ISYE6740', 'CS7641', 'CSE6740'];	
			for (const element of coursesToAdd){
				var option = document.createElement('option');
				option.value = element;
				option.text = element;
				coreCourseDropdown.appendChild(option);
			}
		}
   }
}

function trackSubmit(){
	var p = document.getElementsByClassName('core');
	if(document.getElementById('atrack').checked || document.getElementById('btrack').checked 
		|| document.getElementById('ctrack').checked){
		document.getElementById("track").disabled = true;
		for(var i = 0; i < p.length; i++){
			document.getElementById('checkTrack')[i].disabled = true;
			p[i].style.display = 'block';
		}
	}
	else{
		alert("Please choose a track!!");
		
	}
		
}
function addCourse(type){//select required or elective course
	if(type == 'core'){
		var k = document.getElementById('cList');
		var form1 = document.getElementById('coreCourseDropdown');
		if(Number(findCourse(form1.value).status) === 1){
			alert("The course you enter has repeated, please enter again");
		}
		else if(!Number(findCourse(form1.value).status) && form1.value != '' ){//if Status is 0
			newUpdate(form1.value, 1);
			console.log("you passed  "+ findCourse(form1.value).courseCode + " !");
			k.append(findCourse(form1.value).courseCode);
			k.appendChild(document.createElement('br'));
		}
		else
			alert("This is not core course!");
	}
	else if(type == 'elective'){
		var k = document.getElementById('eList');
		k.style.display = 'block';
		var form1 = document.getElementById('electiveCourseDropdown');
		var selectedOpt = form1.options[form1.selectedIndex];
		var selectedOptgroup = selectedOpt.parentNode;
		var optgroupLb = selectedOptgroup.label;
		if(Number(findCourse(form1.value, ).status) === 1 || Number(findCourse(form1.value, ).status) === 2){
			alert("The course you enter has repeated, please enter again");
		}
		else{   //if Status is 0
			newUpdate(form1.value, 1, optgroupLb);
			console.log("you passed  "+ findCourse(form1.value, optgroupLb).courseCode+"("+ findCourse(form1.value, optgroupLb).courseType + " ) !");
			k.append(findCourse(form1.value, optgroupLb).courseCode + "( " + findCourse(form1.value, optgroupLb).courseType+" )");
			k.appendChild(document.createElement('br'));
		}
		electiveDropdown();
	}		
	//console.log(findCourse(form1.value));
}

function checkCore(){//check required course
	var p = document.getElementsByClassName('waive');
	var k = document.getElementsByClassName('core');
	var x = "you passed R1!";
	var y = "you passed R2!";
	var z = "you passed R3!";
	var u = "you passed R4!";
	var R3 = Number(findCourse('CSE6748').status) + Number(findCourse('ISYE6748').status) + Number(findCourse('MGT6748').status);
	var R4 = Number(findCourse('CSE6740').status) + Number(findCourse('CS7641').status) + Number(findCourse('ISYE6740').status);
	if(!document.getElementById('ctrack').checked){
		u = '';
		R4 = 1;
	}
	if(Number(findCourse('CSE6242').status) != 1)
		x = "CSE6242 ???";
		if(Number(findCourse('MGT6203').status) != 1)
			y = "MGT6203 ???";
			if(R3 < 1)
				z = "CSE6748 ISYE6748 MGT6748 ???";
				if(R4 < 1 && document.getElementById('ctrack').checked)
					u = "CSE6740 CS7641 ISYE6740 ???";
				
	if((findCourse('CSE6242').status) == 1 && Number(findCourse('MGT6203').status) == 1 && R3 >= 1 && R4 >= 1){
		for(var i = 0; i < p.length; i++){
			if(i <=2)
				document.getElementById('checkTrack')[i].disabled = true;
			p[i].style.display = 'block';//remove "//" after test
			
		}		
		for(var i = 0; i < k.length; i++){
			document.getElementsByClassName('core')[i].disabled = true;
		}
	}	 	
	alert(x + '\n' + y + '\n' + z + '\n' + u);	
	
}

function waivableI(){//confirm and input course to replace waivable course
	var cw = document.getElementById("checkW");
	const x = document.getElementById('confirmWaived');
	var completeW = 1;
	const waivableC = groupedCourses['waivable introductory'];

	for(let i = 0; i < waivableC.length - 1 ;i++){
		if(cw[i].checked){
			newUpdate(waivableC[i].courseCode, 2);
			x.appendChild(document.createTextNode(waivableC[i].courseCode + " has waived"));
			x.appendChild(document.createElement("br"));
			x.appendChild(document.createTextNode("Please input the course to replace " + waivableC[i].courseCode + " : "));
			x.appendChild(document.createElement("br"));
			
			const ss = document.createElement('select');
			ss.id = waivableC[i].courseCode;	
			Object.values(groupedCourses).forEach(courseA => {
				if (courseA[0].courseType !== 'required' && courseA[0].courseType !== 'waivable introductory') {
					const optgroup = document.createElement('optgroup');
					optgroup.label = courseA[0].courseType;

					courseA.forEach(courseB => {
						const option = document.createElement('option');
						option.value = courseB.courseCode;
						option.text = courseB.courseCode;
						optgroup.appendChild(option);
					});

					ss.add(optgroup);
				}
			});

			x.appendChild(ss);	
			x.appendChild(document.createElement('br'));
		}
		else{
			if(waivableC[i].courseCode != 'MGT8803'){
				if(confirm('Do you pass  ' + waivableC[i].courseCode + ' ?')){
					console.log('Great job!');			
					newUpdate(waivableC[i].courseCode, 1);
				}
				else{
					completeW = 0;
					console.log('Please do it!');						
				}			
			}
			else{
				if (confirm('Do you pass ' + waivableC[i].courseCode + ' or ' + waivableC[3].courseCode + ' ?')) {
					
					if (confirm('Do you pass ' + waivableC[i].courseCode + ' ?')){
						
						newUpdate(waivableC[i].courseCode, 1);
						console.log('Great job!');				
					}
					else if(confirm('Do you pass MGT6753 ?')){
						
						newUpdate(waivableC[3].courseCode, 1);
						console.log('Great job!');											
					}
					else{
						completeW = 0;
						console.log('Please do it!');
					}
				}
				else{
					completeW = 0;
					console.log('Please do it!');						
				}		
			}
		}
	}
	
	if(completeW){
		document.getElementById('checkW')[0].disabled = true;
		document.getElementById('checkW')[1].disabled = true;
		document.getElementById('checkW')[2].disabled = true;
		document.getElementById('waiveBtn').textContent = "Submit course to waive";
		document.getElementById('waiveBtn').onclick = function() { replacedC() };	
	}
	
}

function replacedC(){
	const x = document.getElementById('confirmWaived');
	var pivot = 1; // to show if replacement finished or not
	const checkW = document.getElementById('checkW');
	for(i = 0; i < checkW.length; i++){
		if(checkW[i].checked){
			const courseW = document.getElementById(checkW[i].name);
			if(courseW.value == '')
				continue;
			else if(Number(findCourse(courseW.value).status) === 1 || Number(findCourse(courseW.value).status) === 2){
				alert('The course you replace ' + findCourse(checkW[i].name).courseCode + '  has repeated');
				pivot = 0;
				continue;
			}
			else{
				newUpdate(courseW.value, 2);
				//console.log(courseW.value + '  status is  '+Number(findCourse(courseW.value).status));
				courseW.disabled = true;
				x.append(findCourse(courseW.value).courseCode);
				x.append(document.createElement("br"));
				courseW.value = '';
			}
		}
		if( pivot == 1 && i == checkW.length - 1){
			document.getElementById('final').style.display = 'block';
			document.getElementById('waiveBtn').style.display = 'none';
			document.getElementById('waiveBtn').onclick = function() { addCourse('elective') };	
			const elective = document.getElementsByClassName('elective');
			for (var i = 0; i < elective.length; i++) {
				elective[i].style.display = 'block';
			}
			electiveDropdown();
			
		}
	}
}

function electiveDropdown(){
	const electiveCourseDropdown = document.getElementById('electiveCourseDropdown');
	electiveCourseDropdown.innerHTML = null; 
	Object.values(groupedCourses).forEach(courseA => {
				if (courseA[0].courseType !== 'required' && courseA[0].courseType !== 'waivable introductory') {
					//console.log(courseA[0].courseType);
					const optgroup = document.createElement('optgroup');
					optgroup.label = courseA[0].courseType;

					courseA.forEach(courseB => {
						if(Number(courseB.status) == 0){
							const option = document.createElement('option');
							option.value = courseB.courseCode;
							option.text = courseB.courseCode;
							optgroup.appendChild(option);
						}
					});
					electiveCourseDropdown.add(optgroup);
				}
	});
	
}

function finalCheck(){
	let bcsoa = Array(5).fill(0);
	for (const courseType in groupedCourses) {
		if(courseType == "waivable introductory" || courseType == "required")
			continue;
		const courses = groupedCourses[courseType];
		courses.forEach(course => {
			if (course.status === 1) {
				if(course.courseType == 'b-electives')
						bcsoa[0]++;
				if(course.courseType == 'c-electives')
						bcsoa[1]++;
				if(course.courseType == 's-electives')
						bcsoa[2]++;
				if(course.courseType == 'o-electives')
						bcsoa[3]++;	
				if(course.courseType == 'a-electives')
						bcsoa[4]++;					
				}
			});
		}
	console.log(bcsoa);
	var k = document.getElementById('eList');
	if(document.getElementById('ctrack').checked){
		if(bcsoa[3] < 1){
			k.append("no o-electives");
			k.appendChild(document.createElement('br'));
		}
		else if(bcsoa[2] < 1){
			k.append("no s-electives");
			k.appendChild(document.createElement('br'));
		}
		else if(bcsoa[1] < 1){
			k.append("no c-electives");
			k.appendChild(document.createElement('br'));
		}	
		else if(bcsoa[1] + bcsoa[2] < 3 ){
			k.append("s-electives + c-electives < 3");
			k.appendChild(document.createElement('br'));
		}
		else{
			var container = document.createElement("span");
			var text = document.createTextNode("Congratulation !!(c-track)");
			container.appendChild(text);
			container.style.color = "red";
			k.appendChild(container);
		}
	}
	else if(document.getElementById('btrack').checked){
		if(bcsoa[3] < 1){
			k.append("no o-electives");
			k.appendChild(document.createElement('br'));
		}
		else if(bcsoa[2] < 2){
			k.append("no s-electives");
			k.appendChild(document.createElement('br'));
		}
		else if(bcsoa[0] < 2){
			k.append("no b-electives");
			k.appendChild(document.createElement('br'));
		}	
		else{
			var container = document.createElement("span");
			var text = document.createTextNode("Congratulation !!(b-track)");
			container.appendChild(text);
			container.style.color = "red";
			k.appendChild(container);
		}
	}
	else if(document.getElementById('atrack').checked){
		if(bcsoa[3] < 1){
			k.append("no o-electives");
			k.appendChild(document.createElement('br'));
		}
		else if(bcsoa[2] < 1){
			k.append("no s-electives");
			k.appendChild(document.createElement('br'));
		}
		else if(bcsoa[2] + bcsoa[3] < 5 ){
			k.append("s-electives + o-electives < 5");
			k.appendChild(document.createElement('br'));
		}
		else{
			var container = document.createElement("span");
			var text = document.createTextNode("Congratulation !!(a-track)");
			container.appendChild(text);
			container.style.color = "red";
			k.appendChild(container);
		}
	}

  }
  function showAll(){
	for (const courseType in groupedCourses) {
		const courses = groupedCourses[courseType];

		courses.forEach(course => {
			if (course.status === 1 || course.status === 2) {
				console.log(` ${course.courseType} : ${course.courseCode}, Status: ${course.status}`);
			}
		});
	}
	console.log(findCourse('CS6730','b-electives'));
	//console.log(groupedCourses[Object.keys(groupedCourses)[0]]);
	
	//console.log(groupedCourses['waivable introductory']);
  }
  // If the course is not found, return false to indicate it was not updated

