::###############################################################################
::# @Greg [Checks if mongodb data folder exists, and creates a new one if not.	#
::#		Changes directorys and starts required processes in seperate	#
::#		windows, in addtion to importing a dump pulled from git.]   	#
::#									    	#
::# @Sophie [returns to original folder]					#
::###############################################################################

@echo off
if not exist "C:\data\db\" mkdir C:\data\db\

pushd .
cd C:\Program Files\MongoDB\Server\3.2\bin\

start mongod
start mongo
start mongorestore "%~dp0backend\db_files"
break
popd

