import picamera

# Kamera nesnesini oluşturun
camera = picamera.PiCamera()

# Kamerayı başlatın
camera.start_preview()

# Kamerayı kullanarak işlemler yapın
# Örneğin, fotoğraf çekmek için:
camera.capture('image.jpg')

# Kamerayı durdurun
camera.stop_preview()

# Kamera nesnesini serbest bırakın
camera.close()

