#!/bin/bash
# Sets up project with all necessary files, and dependency installation

EMAIL=$1

if [ ! -e "email.txt" ]; then
    echo "$1" > email.txt
else
    echo "An email file already exists!"
fi

