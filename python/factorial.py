def factorial(num):
	# your code here
	if num == 0:
		return 1
	elif num == 1:
		return num
	else:
		return num*factorial(num-1)