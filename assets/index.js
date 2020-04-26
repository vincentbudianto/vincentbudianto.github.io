$(document).ready(function() {
	$(".navigation").on('click', function() {
		let hash = $.attr(this, 'href');

		if (hash == "#header") {
			$('body,html').animate({
				scrollTop: $(hash).offset().top - 100
			}, 900);
		}

		if (hash == "#experience") {
			$('body,html').animate({
				scrollTop: $(hash).offset().top - 100
			}, 900);
		}

		if (hash == "#projects") {
			$('body,html').animate({
				scrollTop: $(hash).offset().top - 100
			}, 900);
		}

		if (hash == "#about") {
			$('body,html').animate({
				scrollTop: $(hash).offset().top - 100
			}, 900);
		}
	});
});

let width = $(window).width();

window.onscroll = function() {
	if ((width >= 900)) {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			$("#middle").css("background-size","150% auto");
		} else {
			$("#middle").css("background-size","100% auto");
		}
	}
};

setTimeout(function() {
	$("#loading").addClass("animated fadeOut");

    setTimeout(function() {
    	$("#loading").removeClass("animated fadeOut");
    	$("#loading").css("display","none");
    }, 800);
}, 1450);

$.getJSON("./assets/data/experience.json", function (exp) {
	exp = exp || [];

	if (exp.length == 0) {
    	return (document.getElementById("experience").style.display = "none");
	} else {
		document.getElementById("mark_experience").style.display = "inline";
	}

	for (let i = 0; i < exp.length; i++) {
		if (i == 0) {
			$(".cards").append(`
				<div class="card active" style="--optionBackground: url(${exp[i].background})">
					<div class="shadow"></div>
					<div class="label">
						<div class="header">
							<div class="icon">
								<i class="${exp[i].icon}"></i>
							</div>
							<div class="type">
								${exp[i].type}
							</div>
						</div>
						<div class="info">
							<div class="title">
							${exp[i].title}
							</div>
							<div class="affiliation">
								${exp[i].affiliation}
							</div>
							<div class="description">
								${exp[i].description}
							</div>
						</div>
					</div>
				</div>
			`);
		} else {
			$(".cards").append(`
				<div class="card" style="--optionBackground: url(${exp[i].background})">
					<div class="shadow"></div>
					<div class="label">
						<div class="header">
							<div class="icon">
								<i class="${exp[i].icon}"></i>
							</div>
							<div class="type">
								${exp[i].type}
							</div>
						</div>
						<div class="info">
							<div class="title">
							${exp[i].title}
							</div>
							<div class="affiliation">
								${exp[i].affiliation}
							</div>
							<div class="description">
								${exp[i].description}
							</div>
						</div>
					</div>
				</div>
			`);
		}
	}

	$(".card").click(function() {
		$(".card").removeClass("active");
		$(this).addClass("active");
	});
}).fail(function() {
	document.getElementById("mark_experience").style.display = "none";

  	return (document.getElementById("experience").style.display = "none");
});

$.getJSON("https://api.github.com/users/vincentbudianto/repos?per_page=100", function (repo) {
	repo = repo || [];

	if (repo.length == 0) {
    	return (document.getElementById("projects").style.display = "none");
	} else {
		document.getElementById("mark_projects").style.display = "inline";
	}

	for (let i = 0; i < repo.length; i++) {
		if (repo[i].homepage !== "") {
			$(".carousel").append(`
				<div class="carousel-item">
					<div class="project_card">
						<div class="info_section">
							<div class="title_section">
								${repo[i].name}
							</div>
							<div class="line"></div>
							<div class="about_section">
								<div>
									${repo[i].description}
								</div>
							</div>
						</div>
						<div class="button_section">
							<a class="btn_demo" href="${repo[i].html_url}" target="_blank">
								Code
							</a>
							<a class="btn_demo" href="${repo[i].homepage}" target="_blank">
								Demo
							</a>
						</div>
						<div class="bottom_section">
							<div class="line"></div>
							<span>
								<i class="fas fa-code"></i>
								&nbsp; ${repo[i].language} &nbsp;
							</span>
							<span>
								<i class="fas fa-star"></i>
								&nbsp; ${repo[i].stargazers_count} &nbsp;
							</span>
							<span>
								<i class="fas fa-code-branch"></i>
								&nbsp; ${repo[i].forks}
							</span>
						</div>
					</div>
				</div>
			`);
		} else {
			$(".carousel").append(`
				<div class="carousel-item">
					<div class="project_card">
						<div class="info_section">
							<div class="title_section">
								${repo[i].name}
							</div>
							<div class="line"></div>
							<div class="about_section">
								<div>
									${repo[i].description}
								</div>
							</div>
						</div>
						<div class="button_section">
							<a class="btn_demo" href="${repo[i].html_url}" target="_blank">
								Code
							</a>
						</div>
						<div class="bottom_section">
							<div class="line"></div>
							<span>
								<i class="fas fa-code"></i>
								&nbsp; ${repo[i].language} &nbsp;
							</span>
							<span>
								<i class="fas fa-star"></i>
								&nbsp; ${repo[i].stargazers_count} &nbsp;
							</span>
							<span>
								<i class="fas fa-code-branch"></i>
								&nbsp; ${repo[i].forks}
							</span>
						</div>
					</div>
				</div>
			`);
		}
	}

	$(document).ready(function() {
		$(".carousel").carousel({
			duration: 400,
			indicators: true,
			padding: 100,
			shift: 25
		});
	});
}).fail(function() {
	document.getElementById("mark_projects").style.display = "none";

  	return (document.getElementById("projects").style.display = "none");
});

particlesJS.load("particles", "./assets/data/particles.json");
