// threads.js

const input = document.querySelector("input");
const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener("click", async () => {
    const url = input.value.trim();


    if (url === "") {
        alert("Please enter Threads video link");
        return;
    }

    if (!url.includes("threads.net")) {
        alert("Please enter a valid Threads URL");
        return;
    }

    try {
        downloadBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Processing...';
        downloadBtn.disabled = true;

        const response = await fetch(
            `https://api.example.com/download?url=${encodeURIComponent(url)}`
        );

        const data = await response.json();

        if (data.status === "success") {
            // Create hidden download link
            const a = document.createElement("a");
            a.href = data.video;
            a.download = "threads-video.mp4";
            document.body.appendChild(a);
            a.click();
            a.remove();
        } else {
            alert("Video not found!");
        }

    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }

    downloadBtn.innerHTML =
        '<i class="fa fa-video"></i> download Video';
    downloadBtn.disabled = false;
});