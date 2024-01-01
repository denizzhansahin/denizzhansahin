import time

import cv2

import os

veri_yol = ("/"+str(time.strftime('%c'))).replace(" ","-")

class Veri:
    yol = ""
    counter = 0

# creates an image folder
if (not os.path.exists(os.getcwd() + veri_yol)):
    os.mkdir(os.getcwd() + veri_yol)
#counter = 0 # counter so each image name is different
#cap = cv2.VideoCapture(0) # gets the camera

while Veri.counter<10:
    # Capture frame
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(os.getcwd() + veri_yol + "/" +
                    "image{}.jpg".format(Veri.counter), frame)
        Veri.counter += 1
    time.sleep(1)  # wait 1min
    cap.release()
    print("Veri yol")
    print(veri_yol)

    veri_yol_dosya = os.getcwd() + veri_yol + "/" + "image1111{}.jpg".format(Veri.counter)

    print("veri yol dosya")
    print(veri_yol_dosya)

    Veri.yol = veri_yol_dosya
    cv2.imwrite(veri_yol_dosya,frame)


print(Veri.yol)
