// Countdown Logic
const targetDate = new Date("April 19, 2026 09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  $("#days").text(days < 10 ? "0" + days : days);
  $("#hours").text(hours < 10 ? "0" + hours : hours);
  $("#mins").text(mins < 10 ? "0" + mins : mins);
  $("#secs").text(secs < 10 ? "0" + secs : secs);
}, 1000);

// Copy Text Logic
function copyText(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  showToast("Nomor rekening berhasil disalin!");
}

// Utility: Show the toast widget with sliding animation
function showToast(message, duration = 3000) {
  $("#toastMsg").text(message); // set message

  // Create / reuse Bootstrap toast instance
  const toastEl = $("#liveToast")[0];
  const toast = document.getElementById("toastContainer");

  // Bring the container into view
  $("#toastContainer").removeClass("hide").addClass("show");

  // Hide after a timeout
  setTimeout(() => {
    $("#toastContainer").removeClass("show").addClass("hide");
  }, duration);
}

// Chat Logic
$("#sendBtn").on("click", function () {
  const name = $("#guestName").val();
  const msg = $("#guestMessage").val();

  if (name && msg) {
    const bubble = `
      <div class="chat-bubble chat-bubble-own">
        <strong>${name}:</strong><br>${msg}
      </div>
    `;
    $("#chat-box").prepend(bubble);
    $("#guestName, #guestMessage").val("");

    showToast("Terima kasih atas ucapannya!");
  } else {
    alert("Mohon isi nama dan ucapan Anda.");
  }
});

// QR button toggle
$("#qrButton").on("click", function () {
  const qrModal = $("#qrModal");
  // If hidden, show it; otherwise hide.
  if (qrModal.is(":hidden")) {
    qrModal.removeClass("hide").css("display", "block").fadeIn(200); // smooth fade in
  } else {
    qrModal.fadeOut(200, () => qrModal.addClass("hide")); // fade out then add hide
  }
});
