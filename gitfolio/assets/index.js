// https://api.github.com/users/vincentbudianto/repos?per_page=100
$(document).ready(function(){
	$(".navigation").on('click', function() {
		let hash = $.attr(this, 'href');

		$('body,html').animate({
			scrollTop: $(hash).offset().top - 100
		}, 1500);
	});
});

setTimeout(function () {
	document.getElementById("loading").classList.add("animated");
	document.getElementById("loading").classList.add("fadeOut");

	setTimeout(function () {
		document.getElementById("loading").classList.remove("animated");
    	document.getElementById("loading").classList.remove("fadeOut");
    	document.getElementById("loading").style.display = "none";
	}, 800);
}, 1500);

$.getJSON("https://api.github.com/users/vincentbudianto/repos?per_page=100", function (repo) {
	repo = repo || [];
	count1 = 0;
	count2 = 0;

	if (repo.length == 0) {
		document.getElementById("repository").style.display = "none";

		return (document.getElementById("forks").style.display = "none");
	} else {
		document.getElementById("mark_repository").style.display = "inline";
		document.getElementById("mark_forks").style.display = "inline";
	}

	for (let i = 0; i < repo.length; i++) {
		if (repo[i].fork == false) {
			count1++;

			$("#repository_section").append(`
				<a href="${repo[i].html_url}" target="_blank">
					<section>
						<div class="section_title">
							${repo[i].name}
						</div>
						<div class="about_section">
							<span style="display:block;">
								${repo[i].description}
							</span>
						</div>
						<div class="bottom_section">
							<span style="display:inline-block;">
								<i class="fas fa-code"></i>
								&nbsp; ${repo[i].language}
							</span>
							<span>
								<i class="fas fa-star"></i>
								&nbsp; ${repo[i].stargazers_count}
							</span>
							<span>
								<i class="fas fa-code-branch"></i>
								&nbsp; ${repo[i].forks}
							</span>
						</div>
					</section>
				</a>
			`);
		}
		else {
			count2++;

			$("#forks_section").append(`
				<a href="${repo[i].html_url}" target="_blank">
					<section>
						<div class="section_title">
							${repo[i].name}
						</div>
						<div class="about_section">
							<span style="display:block;">
								${repo[i].description}
							</span>
						</div>
						<div class="bottom_section">
							<span style="display:inline-block;">
								<i class="fas fa-code"></i>
								&nbsp; ${repo[i].language}
							</span>
							<span>
								<i class="fas fa-star"></i>
								&nbsp; ${repo[i].stargazers_count}
							</span>
							<span>
								<i class="fas fa-code-branch"></i>
								&nbsp; ${repo[i].forks}
							</span>
						</div>
					</section>
				</a>
			`);
		}
	}

	if (count1 > 0) {
		$("#repository_title").append(`
			<h1>Projects &nbsp; (${count1})</h1>
		`);
	}

	if (count2 > 0) {
		$("#forks_title").append(`
			<h1>Forked &nbsp;Projects &nbsp; (${count2})</h1>
		`);
	}
}).fail(function () {
	document.getElementById("mark_repository").style.display = "none";
	document.getElementById("repository").style.display = "none"
	document.getElementById("mark_forks").style.display = "none";

	return (document.getElementById("forks").style.display = "none");
});
