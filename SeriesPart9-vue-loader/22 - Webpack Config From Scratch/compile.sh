#!/bin/bash
mvn package -Dmaven.test.skip=true
read -p "Press key to continue.. " -n1 -s