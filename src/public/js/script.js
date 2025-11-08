document
	.getElementById("clear-comments")
	.addEventListener("click", async () => {
		if (confirm("Želite li obrisati sve komentare?")) {
			await fetch("/clear-comments", { method: "POST" });
			location.reload();
		}
	});
