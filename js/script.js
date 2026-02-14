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

  $("#toastMsg").text("Nomor rekening berhasil disalin!");
  const toast = new bootstrap.Toast(document.getElementById("liveToast"));
  toast.show();
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
    $("#guestName").val("");
    $("#guestMessage").val("");

    $("#toastMsg").text("Terima kasih atas ucapannya!");
    const toast = new bootstrap.Toast(document.getElementById("liveToast"));
    toast.show();
  } else {
    alert("Mohon isi nama dan ucapan Anda.");
  }
});
