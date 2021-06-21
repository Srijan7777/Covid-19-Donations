fetch('https://corona.lmao.ninja/v2/countries/India').then((response)=>{
			return response.json();
		}).then((data)=>{
			document.getElementById('flag').src = data.countryInfo.flag;
			document.getElementById('country-name').innerHTML = data.country;
			document.getElementById('active-cases').innerHTML = data.active.toLocaleString();
			document.getElementById('total-cases').innerHTML = data.cases.toLocaleString();
			document.getElementById('critical-cases').innerHTML = data.critical.toLocaleString();
			document.getElementById('total-deaths').innerHTML = data.deaths.toLocaleString();
			document.getElementById('recovered-cases').innerHTML = data.recovered.toLocaleString();
			document.getElementById('total-test').innerHTML = data.tests.toLocaleString();
		});