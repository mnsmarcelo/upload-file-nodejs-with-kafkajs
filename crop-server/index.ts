import * as dotenv from 'dotenv';
import { Kafka } from 'kafkajs';
import { Resize } from './resize';
import * as fs from 'fs';

dotenv.config();

if (!fs.existsSync('../resize')){
    fs.mkdirSync('../resize');
}

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [process.env.KAFKA_BROKER]
});

const consumer = kafka.consumer({ groupId: process.env.KAFKA_GROUPID });

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: process.env.KAFKA_TOPIC, fromBeginning: false });

    await consumer.run({
       eachMessage: async ({ topic, partition, message }) => {
           Resize(message.value.toString());
       },
    });
};

run().catch(console.error);
