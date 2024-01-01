import cv2
import os

video_isim="sune.mp4"
video = cv2.VideoCapture(video_isim)

frame_num = 0
while True:
    ret, frame = video.read()
    if not ret:
        break

    frame_klasor = video_isim.split(".")[0]

    # Klasör mevcut değilse oluştur
    if not os.path.exists(frame_klasor):
        os.mkdir(frame_klasor)

    # Kareyi kaydet
    if frame_num % 15 == 0:
        cv2.imwrite(os.path.join(frame_klasor, "1frame_%d.jpg" % frame_num), frame)
    frame_num += 1

video.release()
cv2.destroyAllWindows()
