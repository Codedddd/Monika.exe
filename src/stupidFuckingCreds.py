import os
import json

for item in os.system("rundll32.exe keymgr.dll,KRShowKeyMgr"):
    print(item)