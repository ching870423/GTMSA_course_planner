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
		'course code': 'ISE6334',
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
        "course id": "4",
        "course type": "waivable introductory",
        "course code": "MGT6753"
    },
	  //
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

function findCourse(courseCode) {
  // Iterate through the groupedCourses and find the course by its code
	let foundCourses = [];
	for (const courseType in groupedCourses) {
		const courses = groupedCourses[courseType];
		const foundCourse = courses.find(
		  course => course.courseCode === courseCode

		);
		if (foundCourse) {
			return foundCourse;
		}
		
	  }
	  // If the course is not found, return null or handle accordingly
	  return 'error';
}

function updateCourseStatus(courseCode, newStatus) {
  // Iterate through the groupedCourses and find the course by its code
  for (const courseType in groupedCourses) {
    const courses = groupedCourses[courseType];
    const foundCourseIndex = courses.findIndex(
      course => course.courseCode === courseCode
    );
    if (foundCourseIndex !== -1) {
      // If the course is found, update its status
      courses[foundCourseIndex].status = newStatus;
      return true; // Return true to indicate the course was found and updated
    }
  }
  // If the course is not found, return false to indicate it was not updated
  return false;
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
		for(var i = 0; i < p.length; i++){
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
	}
	else{
		var k = document.getElementById('eList');
		k.style.display = 'block';
		k.append(document.createElement('br'));
		var form1 = document.getElementById('select');
		
	}		
	console.log(findCourse(form1.value));
	if(Number(findCourse(form1.value).status)){
		alert("The course you enter has repeated, please enter again");
	}
	else if(!Number(findCourse(form1.value).status) && form1.value != '' ){//if Status is 0
		updateCourseStatus(form1.value, 1);
		console.log("you passed  "+ findCourse(form1.value).courseCode + " !");
		k.append(findCourse(form1.value).courseCode);
		k.appendChild(document.createElement('br'));
	}
	else
		alert("This is not core course!");
}

function checkCore(){//check required course
	var p = document.getElementsByClassName('waive');
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
				
	if(/*(findCourse('CSE6242').status) == 1 && Number(findCourse('MGT6203').status) == 1 && R3 >= 1 && R4 >= 1*/1){
		for(var i = 0; i < p.length; i++){
			if(i <=2)
				document.getElementById('checkTrack')[i].disabled = true;
			p[i].style.display = 'block';//remove "//" after test
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
			updateCourseStatus(waivableC[i].courseCode, 0);
			x.appendChild(document.createTextNode(waivableC[i].courseCode + " has waived"));
			x.appendChild(document.createElement("br"));
			x.appendChild(document.createTextNode("Please input the course to replace " + waivableC[i].courseCode + " : "));
			x.appendChild(document.createElement("br"));
			
			const ss = document.createElement('select');
			ss.id = waivableC[i].courseCode;	
			Object.values(groupedCourses).forEach(courseA => {
				if (courseA[0].courseType !== 'required' && courseA[0].courseType !== 'waivable introductory') {
					//console.log(courseA[0].courseCode);
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
					updateCourseStatus(waivableC[i].courseCode, 1);
				}
				else{
					completeW = 0;
					console.log('Please do it!');						
				}			
			}
			else{
				if (confirm('Do you pass ' + waivableC[i].courseCode + ' or ' + waivableC[3].courseCode + ' ?')) {
					
					if (confirm('Do you pass ' + waivableC[i].courseCode + ' ?')){
						
						updateCourseStatus(waivableC[i].courseCode, 1);
						console.log('Great job!');				
					}
					else if(confirm('Do you pass MGT6753 ?')){
						
						updateCourseStatus(waivableC[3].courseCode, 1);
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
		//console.log(waivableC[i].courseCode + '  status is ' + waivableC[i].status);
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
	var pivot = 1;
	const checkW = document.getElementById('checkW');
	for(i = 0; i < checkW.length; i++){
		if(checkW[i].checked){
			const courseW = document.getElementById(checkW[i].name);
			if(Number(findCourse(courseW.value).status === 1 || courseW.value == '')){
				if(courseW.value == '')
					continue;
				alert('The course you replace ' + findCourse(checkW[i].name).courseCode + '  has repeated');
				pivot = 0;
				continue;
			}
			else{
				updateCourseStatus(courseW.value, 1);
				//console.log(courseW.value + '  status is  '+Number(findCourse(courseW.value).status));
				courseW.disabled = true;
				x.append(findCourse(courseW.value).courseCode);
				x.append(document.createElement("br"));
				courseW.value = '';
			}
		}
		if( pivot == 1 && i == checkW.length - 1){
			document.getElementById('waiveBtn').textContent = "add elective coures";
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
	
	Object.values(groupedCourses).forEach(courseA => {
				if (courseA[0].courseType !== 'required' && courseA[0].courseType !== 'waivable introductory') {
					//console.log(courseA[0].courseType);
					const optgroup = document.createElement('optgroup');
					optgroup.label = courseA[0].courseType;

					courseA.forEach(courseB => {
						if(!Number(courseB.status)){
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

function abxd(){
	for (const courseType in groupedCourses) {
		const courses = groupedCourses[courseType];

		courses.forEach(course => {
			if (course.status === 1) {
				console.log(` ${course.courseType} : ${course.courseCode}, Status: ${course.status}`);
			}
		});

		console.log(); 
	}
		console.log(findCourse('CS6730'));
	console.log(Object.keys(groupedCourses));
	//console.log(groupedCourses['waivable introductory']);
}
