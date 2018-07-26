#!/usr/bin/python
import time
import RPi.GPIO as GPIO
import Adafruit_DHT
import paho.mqtt.client as paho



client = paho.Client()
client.connect("broker.hivemq.com", 1883)
client.loop_start()

sensor = Adafruit_DHT.DHT11
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(17, GPIO.IN)
GPIO.setup(23, GPIO.IN) 
GPIO.setup(26, GPIO.OUT)         
pin = 2
while True:
	
	i=GPIO.input(17)
	j=GPIO.input(26)
	k=GPIO.input(23)
	humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

	if humidity is not None and temperature is not None:
			print('Temp={0:0.1f}*C  Humidity={1:0.1f}%'.format(temperature, humidity))
			
			

	else:
			print('Failed to get reading. Try again!')

	if i==1:  
			 print "NO FIRE"
			 time.sleep(0.1)
			 a=0
		 
	elif i==0:
			 print "FIRE detected"
			 time.sleep(0.1)
			 a=1
        if k==1:
                         print "NO GAS/SMOKE"
                         GPIO.output(26, 0) 
                         time.sleep(0.1)
                         b=0
        elif k==0:
                         print "GAS/SMOKE detected"
                         GPIO.output(26, 1) 
                         time.sleep(0.1)
                         b=1

			 
	data=str(humidity)+str(temperature)+str(a)+str("/")+str(b)+str("/")
	client.publish("/cropcap1",data)

	
