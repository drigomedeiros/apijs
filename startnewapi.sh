#!/bin/sh

mkdir -p $1
cp -r . $1
cd $1
rm -Rf .git
npm install
