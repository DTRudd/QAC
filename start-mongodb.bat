# Sophie
@echo off
if not exist "C:\data\db\" mkdir C:\data\db\

pushd .
cd C:\Program Files\MongoDB\Server\3.2\bin\

start mongod
start mongo
start mongorestore "%~dp0backend\db_files"
break
popd

