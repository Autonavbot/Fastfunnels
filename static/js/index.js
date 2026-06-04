document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.scene-row').forEach(function (row) {
    const videos = Array.from(row.querySelectorAll('video'));
    const oursVideo = row.querySelector('.video-cell.ours video');
    if (!oursVideo || videos.length < 2) return;

    let prevTime = 0;

    oursVideo.addEventListener('timeupdate', function () {
      // Detect loop: time jumped back to near 0 after being > 1s
      if (prevTime > 1 && oursVideo.currentTime < 0.3) {
        videos.forEach(function (v) {
          v.currentTime = 0;
        });
      }
      prevTime = oursVideo.currentTime;
    });
  });
});
