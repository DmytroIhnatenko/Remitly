# AWS IAM Role Policy Verifier

This simple **JavaScript** utility verifies whether an input JSON data conforms to the AWS::IAM::Role Policy format. It checks whether the `Resource` field contains a single asterisk (`*`). If it does, the function returns `false`; otherwise, it returns `true`.

## Usage

1. Clone this repository.
2. Install Node.js if you haven't already.
3. Run `npm install` to install dependencies.
4. Edit the `input.json` file with your desired JSON data.
5. Run `node index.js` to execute the verification.

## Example Input JSON

```json
{
    "PolicyName": "custom",
    "PolicyDocument": {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "CustomAccess",
                "Effect": "Allow",
                "Action": [
                    "s3:GetObject",
                    "s3:PutObject"
                ],
                "Resource": "arn:aws:s3:::my-bucket/*"
            }
        ]
    }
}
