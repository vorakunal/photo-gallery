import pika, json

params = pika.URLParameters("amqps://zcynrvtw:dN9eJVARdNDltPXjvy-yiKeC5Vw5gCOu@whale.rmq.cloudamqp.com/zcynrvtw")

connection = pika.BlockingConnection(params)

channel = connection.channel()

def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='admin', body=json.dumps(body), properties=properties)
