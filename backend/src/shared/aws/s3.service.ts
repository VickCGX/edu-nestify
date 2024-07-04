import { Injectable, Logger } from '@nestjs/common'
import { S3 } from 'aws-sdk'
import { ConfigService } from '@nestjs/config'
import { ManagedUpload } from 'aws-sdk/clients/s3'
import { MulterFile } from 'multer'

@Injectable()
export class AwsS3Service {
  private readonly logger = new Logger(AwsS3Service.name)
  private readonly s3: S3

  constructor(configService: ConfigService) {
    this.s3 = new S3({
      accessKeyId: configService.get<string>('aws.accessKeyId'),
      secretAccessKey: configService.get<string>('aws.secretAccessKey'),
      region: configService.get<string>('aws.region')
    })
  }

  async uploadFile(file: MulterFile, bucketName: string, key: string): Promise<ManagedUpload.SendData> {
    try {
      const params: S3.PutObjectRequest = {
        Bucket: bucketName,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype
      }

      const data = await this.s3.upload(params).promise()
      this.logger.log(`File uploaded successfully at ${data.Location}`)
      return data
    } catch (error) {
      this.logger.error('Error uploading file to S3', error.stack)
      throw new Error('Error uploading file to S3')
    }
  }

  async deleteFile(bucketName: string, key: string): Promise<void> {
    try {
      const params: S3.DeleteObjectRequest = {
        Bucket: bucketName,
        Key: key
      }

      await this.s3.deleteObject(params).promise()
      this.logger.log(`File deleted successfully: ${key}`)
    } catch (error) {
      this.logger.error('Error deleting file from S3', error.stack)
      throw new Error('Error deleting file from S3')
    }
  }

  async listFiles(bucketName: string, prefix: string = ''): Promise<S3.ObjectList> {
    try {
      const params: S3.ListObjectsV2Request = {
        Bucket: bucketName,
        Prefix: prefix
      }

      const data = await this.s3.listObjectsV2(params).promise()
      this.logger.log(`Files listed successfully in bucket: ${bucketName}`)
      return data.Contents
    } catch (error) {
      this.logger.error('Error listing files from S3', error.stack)
      throw new Error('Error listing files from S3')
    }
  }
}
