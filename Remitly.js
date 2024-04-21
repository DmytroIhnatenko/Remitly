function verifyPolicy(jsonData) {
    try {
        const parsedData = JSON.parse(jsonData);
        const resource = parsedData.PolicyDocument.Statement[0].Resource;

        if (resource === '*') {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return false;
    }
}

function runTests() {
    const testCases = [
        {
            input: `{
                "PolicyName": "root",
                "PolicyDocument": {
                    "Version": "2012-10-17",
                    "Statement": [
                        {
                            "Sid": "IamListAccess",
                            "Effect": "Allow",
                            "Action": [
                                "iam:ListRoles",
                                "iam:ListUsers"
                            ],
                            "Resource": "*"
                        }
                    ]
                }
            }`,
            expected: false
        },
        {
            input: `{
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
            }`,
            expected: true
        }
       
    ];

    for (const testCase of testCases) {
        const result = verifyPolicy(testCase.input);
        console.log(`Input: ${testCase.input}`);
        console.log(`Expected: ${testCase.expected}`);
        console.log(`Result: ${result}`);
        console.log('---');
    }
}

runTests();

