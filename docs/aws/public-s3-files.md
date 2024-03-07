# How to Make S3 Files Public

1. Create a bucket specifically for user uploads with the environment in the title.
   1. `boundless-user-uploads-bucket-staging`
2. Make the bucket public by unchecking all bucket restrictions.
3. Add the following bucket policy to the bucket.
     ```json
    {
      "Version": "2008-10-17",
      "Statement": [
        {
          "Sid": "AllowPublicRead",
          "Effect": "Allow",
          "Principal": {
            "AWS": "*"
          },
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
      ]
    }
     ```