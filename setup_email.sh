#!/bin/bash
# Create email.txt file with the verified email for SES

EMAIL=$1

if [ ! -e "email.txt" ]; then
    echo "$1" > email.txt
else
    echo "An email file already exists!"
fi

