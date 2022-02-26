import * as yup from 'yup';

const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/vnd.microsoft.icon',
  'image/gif',
  'image/jpeg',
  'image/png',
  'audio/mp3',
  'audio/mpeg',
  'audio/opus',
  'video/mpeg',
  'video/mp4',
  'application/json',
  'application/x-tar',
  'application/gzip',
  'text/plain',
];

export const FileSchema = yup.object().shape({
  file: yup
    .mixed()
    .nullable()
    .test('fileSize', 'The file is too large', (value) => {
      return value?.size < 80000000;
    })
    .test('type', 'Try again!', (value) => {
      return value && SUPPORTED_FORMATS.includes(value.type);
    }),
});
