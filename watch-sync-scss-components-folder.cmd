@echo off
setlocal ENABLEDELAYEDEXPANSION

:: Set paths (edit these if you move the project)
set "SOURCE=C:\Users\ABOOD\OneDrive\Desktop\My NEXT.JS Applications\ecommerce-and-dashboard\components"
set "TARGET=C:\Users\ABOOD\OneDrive\Desktop\My NEXT.JS Applications\ecommerce-and-dashboard\scss\components"

:: Temporary file tracking previous state
set "STATE=.prev_tsx.txt"
set "CURRENT=.curr_tsx.txt"

:: Initialize tracking
if not exist "%STATE%" (
    dir /b /s "%SOURCE%\*.tsx" > "%STATE%"
)

:watchLoop
:: Get current list of .tsx files
dir /b /s "%SOURCE%\*.tsx" > "%CURRENT%"

:: Detect new files
for /f "delims=" %%f in ('findstr /vixg:"%STATE%" "%CURRENT%"') do (
    set "tsxPath=%%f"
    call :createScss "!tsxPath!"
)

:: Update tracking file
move /y "%CURRENT%" "%STATE%" >nul

:: Wait and repeat
timeout /t 2 >nul
goto watchLoop

:createScss
:: Convert full TSX path to SCSS path
set "filePath=%~1"
set "relativePath=!filePath:%SOURCE%=!"
set "scssPath=%TARGET%!relativePath:.tsx=.scss!"

:: Normalize slashes (optional)
set "scssPath=!scssPath:\=\\!"

:: Create directory if needed
for %%D in ("!scssPath!") do if not exist "%%~dpD" mkdir "%%~dpD"

:: Create .scss file if it doesn't exist
if not exist "!scssPath!" (
    type nul > "!scssPath!"
    echo [+] Created !scssPath!
)
exit /b
