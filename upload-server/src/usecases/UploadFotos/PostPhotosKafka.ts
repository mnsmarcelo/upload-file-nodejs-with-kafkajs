import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [process.env.KAFKA_BROKER]
});

const producer = kafka.producer();

export class PostPhotosKafka {

    async post(file: any) {
        await producer.connect();
        await producer.send({
            topic: process.env.KAFKA_TOPIC,
            messages: [
                { value: file },
            ],
        });
    }
}