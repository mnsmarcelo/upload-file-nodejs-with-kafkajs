import * as dotenv from 'dotenv';
import { Kafka } from 'kafkajs';
import * as fs from 'fs';

import { Resize } from './resize';
import { TypeUpload } from './avro/upload-schema';

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
           const valueMessage = TypeUpload.fromBuffer(message.value);
           Resize(valueMessage.dir_file);
       },
    });
};

run().catch(console.error);
