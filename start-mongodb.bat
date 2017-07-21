@echo off
if not exist "C:\data\db\" mkdir C:\data\db\

cd C:\Program Files\MongoDB\Server\3.2\bin\

start mongod
start mongo
break
