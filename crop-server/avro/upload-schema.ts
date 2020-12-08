import avro from 'avsc';

export const TypeUpload = avro.Type.forSchema({
   name: 'File',
   type: 'record',
   fields: [
       { name: 'dir_file', type: 'string' }
   ],
});
