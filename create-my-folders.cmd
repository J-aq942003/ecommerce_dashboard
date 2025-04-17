@echo off
echo 🛠️ Creating project folder structure...

REM Create folders
mkdir actions
mkdir components
mkdir components\shared
mkdir hooks
mkdir meta
mkdir redux
mkdir redux\actions
mkdir redux\reducers
mkdir schemas
mkdir scss
mkdir scss\components
mkdir style

REM Create files
/*echo /* Your styles here */ > style\style.css*/
echo // Test component > redux\store.ts
echo // Test component > redux\types.ts

echo ✅ Folder structure created successfully!
pause
