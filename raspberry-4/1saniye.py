
"""
import cv2 
import os
import time

deger = 0

kontrol = 0
while kontrol < 10 :
    img_path = "goruntu" + str(deger)
    time.sleep(0.5)
    deger += 1

    kontrol += 1

"""

import time

import cv2
#from cv2 import *

import os

veri_yol = "/"+str(time.strftime('%c'))

# creates an image folder
if (not os.path.exists(os.getcwd() + veri_yol)):
    os.mkdir(os.getcwd() + veri_yol)
counter = 0 # counter so each image name is different
#cap = cv2.VideoCapture(0) # gets the camera



while True:
    # Capture frame
    cap = cv2.VideoCapture(0)
    cap.set(3, 2560)
    cap.set(4, 1920)
    ret, frame = cap.read()

    if ret:
        cv2.imwrite(os.getcwd() + veri_yol + "/" +
                    "image{}.jpg".format(counter), frame)
        counter += 1
    #time.sleep(1)  # wait 1min
    cap.release()
    print(veri_yol)
