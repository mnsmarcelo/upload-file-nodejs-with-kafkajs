import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

export class PostPhotosKafka {

    async post(file: any) {
        await producer.connect();
        await producer.send({
            topic: 'test-topic',
            messages: [
                { value: file },
            ],
        });
    }
}